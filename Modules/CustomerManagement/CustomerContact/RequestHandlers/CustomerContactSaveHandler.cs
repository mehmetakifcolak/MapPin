using MyRow = MapPin.CustomerManagement.CustomerContactRow;

namespace MapPin.CustomerManagement;

public interface ICustomerContactSaveHandler : ISaveHandler<MyRow> { }
public class CustomerContactSaveHandler(IRequestContext context)
    : SaveRequestHandler<MyRow>(context), ICustomerContactSaveHandler { }
