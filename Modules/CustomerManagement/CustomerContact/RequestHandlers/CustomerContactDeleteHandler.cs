using MyRow = MapPin.CustomerManagement.CustomerContactRow;

namespace MapPin.CustomerManagement;

public interface ICustomerContactDeleteHandler : IDeleteHandler<MyRow> { }
public class CustomerContactDeleteHandler(IRequestContext context)
    : DeleteRequestHandler<MyRow>(context), ICustomerContactDeleteHandler { }
