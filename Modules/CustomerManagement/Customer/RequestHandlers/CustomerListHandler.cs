using MyRow = MapPin.CustomerManagement.CustomerRow;

namespace MapPin.CustomerManagement;

public interface ICustomerListHandler : IListHandler<MyRow> { }

public class CustomerListHandler(IRequestContext context)
    : ListRequestHandler<MyRow>(context), ICustomerListHandler
{
}
