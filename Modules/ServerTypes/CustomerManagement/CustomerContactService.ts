import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { CustomerContactRow } from "./CustomerContactRow";

export namespace CustomerContactService {
    export const baseUrl = 'CustomerManagement/CustomerContact';

    export declare function Create(request: SaveRequest<CustomerContactRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<CustomerContactRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<CustomerContactRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<CustomerContactRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<CustomerContactRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<CustomerContactRow>>;

    export const Methods = {
        Create: "CustomerManagement/CustomerContact/Create",
        Update: "CustomerManagement/CustomerContact/Update",
        Delete: "CustomerManagement/CustomerContact/Delete",
        Retrieve: "CustomerManagement/CustomerContact/Retrieve",
        List: "CustomerManagement/CustomerContact/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>CustomerContactService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}