import { fieldsProxy } from "@serenity-is/corelib";
import { CustomerActivityType } from "./CustomerActivityType";

export interface CustomerActivityRow {
    ActivityId?: number;
    CustomerId?: number;
    ActivityType?: CustomerActivityType;
    Subject?: string;
    Notes?: string;
    ActivityDate?: string;
    CustomerName?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class CustomerActivityRow {
    static readonly idProperty = 'ActivityId';
    static readonly nameProperty = 'Subject';
    static readonly localTextPrefix = 'CustomerManagement.CustomerActivity';
    static readonly deletePermission = 'CustomerManagement:Customer';
    static readonly insertPermission = 'CustomerManagement:Customer';
    static readonly readPermission = 'CustomerManagement:Customer';
    static readonly updatePermission = 'CustomerManagement:Customer';

    static readonly Fields = fieldsProxy<CustomerActivityRow>();
}