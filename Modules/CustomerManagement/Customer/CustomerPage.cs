namespace MapPin.CustomerManagement.Pages;

[PageAuthorize(typeof(CustomerRow))]
public class CustomerPage : Controller
{
    [Route("CustomerManagement/Customer")]
    public ActionResult Index()
    {
        return this.GridPage("@/CustomerManagement/Customer/CustomerPage",
            CustomerRow.Fields.PageTitle());
    }
}
