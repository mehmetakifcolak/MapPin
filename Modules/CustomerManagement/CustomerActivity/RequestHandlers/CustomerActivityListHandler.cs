using MyRow = MapPin.CustomerManagement.CustomerActivityRow;

namespace MapPin.CustomerManagement;

public interface ICustomerActivityListHandler : IListHandler<MyRow> { }
public class CustomerActivityListHandler(IRequestContext context)
    : ListRequestHandler<MyRow>(context), ICustomerActivityListHandler { }
