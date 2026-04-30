namespace MapPin.CustomerManagement.Forms;

[ColumnsScript("CustomerManagement.CustomerContact")]
[BasedOnRow(typeof(CustomerContactRow), CheckNames = true)]
public class CustomerContactColumns
{
    [EditLink, Width(180)]
    public string ContactName { get; set; }

    [Width(130)]
    public string Title { get; set; }

    [Width(120)]
    public string Phone { get; set; }

    [Width(160)]
    public string Email { get; set; }

    public string Notes { get; set; }
}
