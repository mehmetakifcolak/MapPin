namespace MapPin.CustomerManagement.Forms;

[ColumnsScript("CustomerManagement.Customer")]
[BasedOnRow(typeof(CustomerRow), CheckNames = true)]
public class CustomerColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int CustomerId { get; set; }

    [EditLink, SortOrder(1)]
    public string CustomerName { get; set; }

    public string ContactName { get; set; }

    public string Email { get; set; }

    public string Phone { get; set; }

    public string City { get; set; }

    public string District { get; set; }

    public string Country { get; set; }
}
