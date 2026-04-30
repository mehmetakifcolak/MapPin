using MyRow = MapPin.CustomerManagement.CustomerActivityRow;

namespace MapPin.CustomerManagement;

public interface ICustomerActivityDeleteHandler : IDeleteHandler<MyRow> { }
public class CustomerActivityDeleteHandler(IRequestContext context)
    : DeleteRequestHandler<MyRow>(context), ICustomerActivityDeleteHandler { }
