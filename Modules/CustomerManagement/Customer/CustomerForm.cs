namespace MapPin.CustomerManagement.Forms;

[FormScript("CustomerManagement.Customer")]
[BasedOnRow(typeof(CustomerRow), CheckNames = true)]
public class CustomerForm
{
    [HalfWidth]
    public string CustomerName { get; set; }

    [HalfWidth]
    public string ContactName { get; set; }

    [HalfWidth]
    public string Email { get; set; }

    [HalfWidth]
    public string Phone { get; set; }

    public string Address { get; set; }

    [HalfWidth, LookupEditor("CustomerManagement.Il")]
    public string City { get; set; }

    [HalfWidth, LookupEditor("CustomerManagement.Ilce", CascadeFrom = "City", CascadeField = "IlId")]
    public string District { get; set; }

    //[NoteEditor]
    public string Notes { get; set; }
}
