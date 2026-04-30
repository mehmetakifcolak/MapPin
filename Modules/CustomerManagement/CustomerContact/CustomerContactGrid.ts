import { EntityGrid } from "@serenity-is/corelib";
import { CustomerContactColumns, CustomerContactRow, CustomerContactService } from "../../ServerTypes/CustomerManagement";
import { nsCustomerManagement } from "../../ServerTypes/Namespaces";
import { CustomerContactDialog } from "./CustomerContactDialog";

export class CustomerContactGrid extends EntityGrid<CustomerContactRow, any> {
    static override[Symbol.typeInfo] = this.registerClass(nsCustomerManagement);

    private _customerId: number;

    protected override useAsync()           { return true; }
    protected override getColumnsKey()      { return CustomerContactColumns.columnsKey; }
    protected override getDialogType()      { return CustomerContactDialog; }
    protected override getIdProperty()      { return CustomerContactRow.idProperty; }
    protected override getLocalTextPrefix() { return CustomerContactRow.localTextPrefix; }
    protected override getService()         { return CustomerContactService.baseUrl; }

    protected override getDefaultSortBy() {
        return [CustomerContactRow.Fields.ContactName];
    }

    public setCustomerId(id: number) {
        this._customerId = id;
        this.refresh();
    }

    protected override getRequest() {
        var req = super.getRequest();
        if (this._customerId) {
            req.EqualityFilter = req.EqualityFilter || {};
            (req.EqualityFilter as any)[CustomerContactRow.Fields.CustomerId] = this._customerId;
        }
        return req;
    }

    protected override addButtonClick() {
        var dlg = new CustomerContactDialog();
        dlg.customerId = this._customerId;
        this.initDialog(dlg);
        dlg.loadEntityAndOpenDialog({ CustomerId: this._customerId } as CustomerContactRow);
    }

    protected override getInitialTitle() { return null; }

    protected override getGridCanLoad() {
        return !!this._customerId;
    }
}
