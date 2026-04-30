import { registerEnum } from "@serenity-is/corelib";

export enum CustomerActivityType {
    Email = 1,
    Phone = 2,
    Note = 3,
    Meeting = 4,
    Other = 5
}
registerEnum(CustomerActivityType, 'MapPin.CustomerManagement.CustomerActivityType', 'CustomerManagement.CustomerActivityType');