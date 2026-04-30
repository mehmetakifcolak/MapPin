using MyRow = MapPin.CustomerManagement.CustomerContactRow;

namespace MapPin.CustomerManagement;

public interface ICustomerContactRetrieveHandler : IRetrieveHandler<MyRow> { }
public class CustomerContactRetrieveHandler(IRequestContext context)
    : RetrieveRequestHandler<MyRow>(context), ICustomerContactRetrieveHandler { }
