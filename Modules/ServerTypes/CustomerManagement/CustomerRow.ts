import { fieldsProxy } from "@serenity-is/corelib";

export interface CustomerRow {
    CustomerId?: number;
    CustomerName?: string;
    ContactName?: string;
    Email?: string;
    Phone?: string;
    Address?: string;
    City?: string;
    District?: string;
    Country?: string;
    Notes?: string;
    Latitude?: number;
    Longitude?: number;
    IsActive?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class CustomerRow {
    static readonly idProperty = 'CustomerId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'CustomerName';
    static readonly localTextPrefix = 'CustomerManagement.Customer';
    static readonly deletePermission = 'CustomerManagement:Customer';
    static readonly insertPermission = 'CustomerManagement:Customer';
    static readonly readPermission = 'CustomerManagement:Customer';
    static readonly updatePermission = 'CustomerManagement:Customer';

    static readonly Fields = fieldsProxy<CustomerRow>();
}