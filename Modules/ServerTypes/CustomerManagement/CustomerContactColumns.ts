import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CustomerContactRow } from "./CustomerContactRow";

export interface CustomerContactColumns {
    ContactName: Column<CustomerContactRow>;
    Title: Column<CustomerContactRow>;
    Phone: Column<CustomerContactRow>;
    Email: Column<CustomerContactRow>;
    Notes: Column<CustomerContactRow>;
}

export class CustomerContactColumns extends ColumnsBase<CustomerContactRow> {
    static readonly columnsKey = 'CustomerManagement.CustomerContact';
    static readonly Fields = fieldsProxy<CustomerContactColumns>();
}