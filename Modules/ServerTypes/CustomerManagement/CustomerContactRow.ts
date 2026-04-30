import { fieldsProxy } from "@serenity-is/corelib";

export interface CustomerContactRow {
    ContactId?: number;
    CustomerId?: number;
    ContactName?: string;
    Title?: string;
    Phone?: string;
    Email?: string;
    Notes?: string;
    CustomerName?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class CustomerContactRow {
    static readonly idProperty = 'ContactId';
    static readonly nameProperty = 'ContactName';
    static readonly localTextPrefix = 'CustomerManagement.CustomerContact';
    static readonly deletePermission = 'CustomerManagement:Customer';
    static readonly insertPermission = 'CustomerManagement:Customer';
    static readonly readPermission = 'CustomerManagement:Customer';
    static readonly updatePermission = 'CustomerManagement:Customer';

    static readonly Fields = fieldsProxy<CustomerContactRow>();
}
