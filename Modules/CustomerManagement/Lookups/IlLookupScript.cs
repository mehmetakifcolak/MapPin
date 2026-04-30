using Microsoft.AspNetCore.Hosting;
using Serenity.Web;
using System.Collections;
using System.IO;
using System.Text.Json;

namespace MapPin.CustomerManagement;

[LookupScript("CustomerManagement.Il", Permission = PermissionKeys.Customer)]
public class IlLookupScript(IWebHostEnvironment env) : LookupScript
{
    private List<IlItem> _items;

    public IlLookupScript() : this(null!) { }

    protected override IEnumerable GetItems()
    {
        if (_items != null) return _items;

        var path = Path.Combine(env.WebRootPath, "Content", "il-ilce.json");
        var dict = JsonSerializer.Deserialize<Dictionary<string, string[]>>(File.ReadAllText(path));
        IdField   = "Id";
        TextField = "Text";
        _items = [.. dict.Keys.Order().Select(k => new IlItem { Id = k, Text = k })];
        return _items;
    }

    public class IlItem
    {
        public string Id   { get; set; }
        public string Text { get; set; }
    }
}
