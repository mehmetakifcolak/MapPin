import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CustomerActivityRow } from "./CustomerActivityRow";
import { CustomerActivityType } from "./CustomerActivityType";

export interface CustomerActivityColumns {
    ActivityDate: Column<CustomerActivityRow>;
    ActivityType: Column<CustomerActivityRow>;
    Subject: Column<CustomerActivityRow>;
    Notes: Column<CustomerActivityRow>;
}

export class CustomerActivityColumns extends ColumnsBase<CustomerActivityRow> {
    static readonly columnsKey = 'CustomerManagement.CustomerActivity';
    static readonly Fields = fieldsProxy<CustomerActivityColumns>();
}

[CustomerActivityType]; // referenced types