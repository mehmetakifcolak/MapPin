using System.IO;
using System.Text.Json;
using Microsoft.AspNetCore.Hosting;
using MyRow = MapPin.CustomerManagement.CustomerRow;

namespace MapPin.CustomerManagement;

public interface ICustomerSaveHandler : ISaveHandler<MyRow> { }

public class CustomerSaveHandler(IRequestContext context, IWebHostEnvironment env)
    : SaveRequestHandler<MyRow>(context), ICustomerSaveHandler
{
    private static Dictionary<string, (double Lat, double Lng)> _ilCenters;
    private static Dictionary<string, (double Lat, double Lng)> _ilceCenters;
    private static readonly object _lock = new();

    protected override void BeforeSave()
    {
        base.BeforeSave();

        if (!string.IsNullOrWhiteSpace(Row.City) && !Row.Latitude.HasValue)
        {
            bool shouldAutoCoord = IsCreate || (IsUpdate && Old?.Latitude == null);
            if (shouldAutoCoord)
                SetCoordinates();
        }
    }

    private void SetCoordinates()
    {
        EnsureCenters();
        var city     = Row.City!.Trim();
        var district = (Row.District ?? "").Trim();

        if (!string.IsNullOrEmpty(district))
        {
            var key = city.ToLowerInvariant() + "|" + district.ToLowerInvariant();
            if (_ilceCenters!.TryGetValue(key, out var dc))
            {
                Row.Latitude  = dc.Lat;
                Row.Longitude = dc.Lng;
                return;
            }
        }

        if (_ilCenters!.TryGetValue(city.ToLowerInvariant(), out var ic))
        {
            Row.Latitude  = ic.Lat;
            Row.Longitude = ic.Lng;
        }
    }

    private void EnsureCenters()
    {
        if (_ilCenters != null) return;
        lock (_lock)
        {
            if (_ilCenters != null) return;

            var ilCenters   = new Dictionary<string, (double, double)>(StringComparer.OrdinalIgnoreCase);
            var ilceCenters = new Dictionary<string, (double, double)>(StringComparer.OrdinalIgnoreCase);

            var path = Path.Combine(env.WebRootPath, "Content", "turkey-ilce-borders.json");
            if (File.Exists(path))
            {
                using var doc = JsonDocument.Parse(File.ReadAllText(path));
                foreach (var ilProp in doc.RootElement.EnumerateObject())
                {
                    var ilName   = ilProp.Name;
                    var cityLats = new List<double>();
                    var cityLngs = new List<double>();

                    foreach (var feature in ilProp.Value.EnumerateArray())
                    {
                        var distName = "";
                        if (feature.TryGetProperty("properties", out var props) &&
                            props.TryGetProperty("name", out var n))
                            distName = n.GetString() ?? "";

                        var lats = new List<double>();
                        var lngs = new List<double>();
                        if (feature.TryGetProperty("geometry", out var geom) &&
                            geom.TryGetProperty("coordinates", out var coords))
                            CollectCoords(coords, lats, lngs);

                        if (lats.Count > 0)
                        {
                            var clat = lats.Average();
                            var clng = lngs.Average();
                            if (!string.IsNullOrEmpty(distName))
                                ilceCenters[ilName.ToLowerInvariant() + "|" + distName.ToLowerInvariant()] = (clat, clng);
                            cityLats.AddRange(lats);
                            cityLngs.AddRange(lngs);
                        }
                    }

                    if (cityLats.Count > 0)
                        ilCenters[ilName.ToLowerInvariant()] = (cityLats.Average(), cityLngs.Average());
                }
            }

            _ilceCenters = ilceCenters;
            _ilCenters   = ilCenters;
        }
    }

    private static void CollectCoords(JsonElement el, List<double> lats, List<double> lngs)
    {
        if (el.ValueKind != JsonValueKind.Array) return;
        var arr = el.EnumerateArray().ToArray();
        if (arr.Length == 0) return;

        if (arr[0].ValueKind == JsonValueKind.Number && arr.Length >= 2)
        {
            lngs.Add(arr[0].GetDouble());
            lats.Add(arr[1].GetDouble());
        }
        else
        {
            foreach (var child in arr)
                CollectCoords(child, lats, lngs);
        }
    }
}
