using MyRow = MapPin.CustomerManagement.CustomerContactRow;

namespace MapPin.CustomerManagement;

public interface ICustomerContactListHandler : IListHandler<MyRow> { }
public class CustomerContactListHandler(IRequestContext context)
    : ListRequestHandler<MyRow>(context), ICustomerContactListHandler { }
