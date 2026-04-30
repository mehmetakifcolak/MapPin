import { EntityGrid } from "@serenity-is/corelib";
import { CustomerColumns, CustomerRow, CustomerService } from "../../ServerTypes/CustomerManagement";
import { nsCustomerManagement } from "../../ServerTypes/Namespaces";
import { CustomerDialog } from "./CustomerDialog";

export class CustomerGrid extends EntityGrid<CustomerRow, any> {
    static override[Symbol.typeInfo] = this.registerClass(nsCustomerManagement);

    protected override useAsync() { return true; }
    protected override getColumnsKey() { return CustomerColumns.columnsKey; }
    protected override getDialogType() { return CustomerDialog; }
    protected override getIdProperty() { return CustomerRow.idProperty; }
    protected override getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
    protected override getService() { return CustomerService.baseUrl; }

    protected override getDefaultSortBy() {
        return [CustomerRow.Fields.CustomerName];
    }
}
