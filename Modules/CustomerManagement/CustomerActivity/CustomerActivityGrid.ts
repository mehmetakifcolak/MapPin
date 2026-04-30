import { EntityGrid, ToolButton } from "@serenity-is/corelib";
import { CustomerActivityColumns, CustomerActivityRow, CustomerActivityService } from "../../ServerTypes/CustomerManagement";
import { nsCustomerManagement } from "../../ServerTypes/Namespaces";
import { CustomerActivityDialog } from "./CustomerActivityDialog";

export class CustomerActivityGrid extends EntityGrid<CustomerActivityRow, any> {
    static override[Symbol.typeInfo] = this.registerClass(nsCustomerManagement);

    private _customerId: number;

    protected override useAsync()          { return true; }
    protected override getColumnsKey()     { return CustomerActivityColumns.columnsKey; }
    protected override getDialogType()     { return CustomerActivityDialog; }
    protected override getIdProperty()     { return CustomerActivityRow.idProperty; }
    protected override getLocalTextPrefix(){ return CustomerActivityRow.localTextPrefix; }
    protected override getService()        { return CustomerActivityService.baseUrl; }

    protected override getDefaultSortBy() {
        return [CustomerActivityRow.Fields.ActivityDate + ' DESC'];
    }

    // CustomerId ile filtrele
    public setCustomerId(id: number) {
        this._customerId = id;
        this.refresh();
    }

    protected override getRequest() {
        var req = super.getRequest();
        if (this._customerId) {
            req.EqualityFilter = req.EqualityFilter || {};
            (req.EqualityFilter as any)[CustomerActivityRow.Fields.CustomerId] = this._customerId;
        }
        return req;
    }

    // Yeni aktivite eklerken CustomerId'yi ön doldur
    protected override addButtonClick() {
        var dlg = new CustomerActivityDialog();
        dlg.customerId = this._customerId;
        this.initDialog(dlg);
        dlg.loadEntityAndOpenDialog({ CustomerId: this._customerId } as CustomerActivityRow);
    }

    protected override getInitialTitle() { return null; }

    protected override getGridCanLoad() {
        return !!this._customerId;
    }
}
