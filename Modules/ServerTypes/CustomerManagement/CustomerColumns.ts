import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CustomerRow } from "./CustomerRow";

export interface CustomerColumns {
    CustomerId: Column<CustomerRow>;
    CustomerName: Column<CustomerRow>;
    ContactName: Column<CustomerRow>;
    Email: Column<CustomerRow>;
    Phone: Column<CustomerRow>;
    City: Column<CustomerRow>;
    District: Column<CustomerRow>;
    Country: Column<CustomerRow>;
}

export class CustomerColumns extends ColumnsBase<CustomerRow> {
    static readonly columnsKey = 'CustomerManagement.Customer';
    static readonly Fields = fieldsProxy<CustomerColumns>();
}
