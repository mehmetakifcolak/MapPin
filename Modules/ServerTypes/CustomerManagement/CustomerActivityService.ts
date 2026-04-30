import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { CustomerActivityRow } from "./CustomerActivityRow";

export namespace CustomerActivityService {
    export const baseUrl = 'CustomerManagement/CustomerActivity';

    export declare function Create(request: SaveRequest<CustomerActivityRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<CustomerActivityRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<CustomerActivityRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<CustomerActivityRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<CustomerActivityRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<CustomerActivityRow>>;

    export const Methods = {
        Create: "CustomerManagement/CustomerActivity/Create",
        Update: "CustomerManagement/CustomerActivity/Update",
        Delete: "CustomerManagement/CustomerActivity/Delete",
        Retrieve: "CustomerManagement/CustomerActivity/Retrieve",
        List: "CustomerManagement/CustomerActivity/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>CustomerActivityService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}