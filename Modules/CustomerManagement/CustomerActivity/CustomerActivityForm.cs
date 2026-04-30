namespace MapPin.CustomerManagement.Forms;

[FormScript("CustomerManagement.CustomerActivity")]
[BasedOnRow(typeof(CustomerActivityRow), CheckNames = true)]
public class CustomerActivityForm
{
    public CustomerActivityType ActivityType { get; set; }
    public DateTime             ActivityDate { get; set; }
    public string               Subject      { get; set; }
    public string               Notes        { get; set; }
}
