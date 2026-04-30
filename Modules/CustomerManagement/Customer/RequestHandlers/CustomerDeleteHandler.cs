using MyRow = MapPin.CustomerManagement.CustomerRow;

namespace MapPin.CustomerManagement;

public interface ICustomerDeleteHandler : IDeleteHandler<MyRow> { }

public class CustomerDeleteHandler(IRequestContext context)
    : DeleteRequestHandler<MyRow>(context), ICustomerDeleteHandler
{
}
