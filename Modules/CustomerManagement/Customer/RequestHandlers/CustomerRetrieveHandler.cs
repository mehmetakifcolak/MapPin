using MyRow = MapPin.CustomerManagement.CustomerRow;

namespace MapPin.CustomerManagement;

public interface ICustomerRetrieveHandler : IRetrieveHandler<MyRow> { }

public class CustomerRetrieveHandler(IRequestContext context)
    : RetrieveRequestHandler<MyRow>(context), ICustomerRetrieveHandler
{
}
