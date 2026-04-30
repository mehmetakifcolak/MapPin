using MyRow = MapPin.CustomerManagement.CustomerActivityRow;

namespace MapPin.CustomerManagement;

public interface ICustomerActivityRetrieveHandler : IRetrieveHandler<MyRow> { }
public class CustomerActivityRetrieveHandler(IRequestContext context)
    : RetrieveRequestHandler<MyRow>(context), ICustomerActivityRetrieveHandler { }
