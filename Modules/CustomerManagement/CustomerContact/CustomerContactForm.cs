namespace MapPin.CustomerManagement.Forms;

[FormScript("CustomerManagement.CustomerContact")]
[BasedOnRow(typeof(CustomerContactRow), CheckNames = true)]
public class CustomerContactForm
{
    public string ContactName { get; set; }
    public string Title       { get; set; }
    public string Phone       { get; set; }
    public string Email       { get; set; }
    public string Notes       { get; set; }
}
