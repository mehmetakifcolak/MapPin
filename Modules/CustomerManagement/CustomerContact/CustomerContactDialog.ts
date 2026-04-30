import { EntityDialog } from "@serenity-is/corelib";
import { CustomerContactForm, CustomerContactRow, CustomerContactService } from "../../ServerTypes/CustomerManagement";
import { nsCustomerManagement } from "../../ServerTypes/Namespaces";

export class CustomerContactDialog extends EntityDialog<CustomerContactRow, any> {
    static override[Symbol.typeInfo] = this.registerClass(nsCustomerManagement);

    protected override getFormKey()         { return CustomerContactForm.formKey; }
    protected override getIdProperty()      { return CustomerContactRow.idProperty; }
    protected override getLocalTextPrefix() { return CustomerContactRow.localTextPrefix; }
    protected override getNameProperty()    { return CustomerContactRow.nameProperty; }
    protected override getService()         { return CustomerContactService.baseUrl; }

    protected form = new CustomerContactForm(this.idPrefix);

    public customerId: number;

    protected override getSaveEntity() {
        var entity = super.getSaveEntity();
        if (this.customerId && !entity.CustomerId)
            entity.CustomerId = this.customerId;
        return entity;
    }
}
