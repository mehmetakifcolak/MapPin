namespace MapPin.CustomerManagement.Forms;

[ColumnsScript("CustomerManagement.CustomerActivity")]
[BasedOnRow(typeof(CustomerActivityRow), CheckNames = true)]
public class CustomerActivityColumns
{
    [EditLink, SortOrder(1, descending: true)]
    public DateTime ActivityDate { get; set; }

    [EditLink, Width(120)]
    public CustomerActivityType ActivityType { get; set; }

    [EditLink]
    public string Subject { get; set; }

    public string Notes { get; set; }
}
