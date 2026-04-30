using MyRow = MapPin.CustomerManagement.CustomerActivityRow;

namespace MapPin.CustomerManagement;

public interface ICustomerActivitySaveHandler : ISaveHandler<MyRow> { }
public class CustomerActivitySaveHandler(IRequestContext context)
    : SaveRequestHandler<MyRow>(context), ICustomerActivitySaveHandler { }
