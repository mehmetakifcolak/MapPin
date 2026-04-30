using MyRow = MapPin.Administration.RoleRow;

namespace MapPin.Administration;

public interface IRoleRetrieveHandler : IRetrieveHandler<MyRow> { }
public class RoleRetrieveHandler(IRequestContext context)
    : RetrieveRequestHandler<MyRow>(context), IRoleRetrieveHandler
{
}