using MyRow = MapPin.CustomerManagement.CustomerContactRow;

namespace MapPin.CustomerManagement.Endpoints;

[Route("Services/CustomerManagement/CustomerContact/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class CustomerContactEndpoint : ServiceEndpoint
{
    [HttpPost, AuthorizeCreate(typeof(MyRow))]
    public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] ICustomerContactSaveHandler handler) => handler.Create(uow, request);

    [HttpPost, AuthorizeUpdate(typeof(MyRow))]
    public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] ICustomerContactSaveHandler handler) => handler.Update(uow, request);

    [HttpPost, AuthorizeDelete(typeof(MyRow))]
    public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
        [FromServices] ICustomerContactDeleteHandler handler) => handler.Delete(uow, request);

    public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
        [FromServices] ICustomerContactRetrieveHandler handler) => handler.Retrieve(connection, request);

    public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
        [FromServices] ICustomerContactListHandler handler) => handler.List(connection, request);
}
