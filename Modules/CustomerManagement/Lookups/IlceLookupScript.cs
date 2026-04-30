using Microsoft.AspNetCore.Hosting;
using Serenity.Web;
using System.Collections;
using System.IO;
using System.Text.Json;

namespace MapPin.CustomerManagement;

[LookupScript("CustomerManagement.Ilce", Permission = PermissionKeys.Customer)]
public class IlceLookupScript(IWebHostEnvironment env) : LookupScript
{
    private List<IlceItem> _items;

    public IlceLookupScript() : this(null!) { }

    protected override IEnumerable GetItems()
    {
        if (_items != null) return _items;

        var path = Path.Combine(env.WebRootPath, "Content", "il-ilce.json");
        var dict = JsonSerializer.Deserialize<Dictionary<string, string[]>>(File.ReadAllText(path));
        IdField      = "Id";
        TextField    = "Text";
        ParentIdField = "IlId";
        _items = [.. dict
            .SelectMany(kv => kv.Value.Select(ilce => new IlceItem { Id = ilce, Text = ilce, IlId = kv.Key }))
            .OrderBy(i => i.Text)];
        return _items;
    }

    public class IlceItem
    {
        public string Id   { get; set; }
        public string Text { get; set; }
        public string IlId { get; set; }
    }
}
