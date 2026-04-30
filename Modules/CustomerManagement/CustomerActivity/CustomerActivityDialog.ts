import { EntityDialog } from "@serenity-is/corelib";
import { CustomerActivityForm, CustomerActivityRow, CustomerActivityService } from "../../ServerTypes/CustomerManagement";
import { nsCustomerManagement } from "../../ServerTypes/Namespaces";

export class CustomerActivityDialog extends EntityDialog<CustomerActivityRow, any> {
    static override[Symbol.typeInfo] = this.registerClass(nsCustomerManagement);

    protected override getFormKey()        { return CustomerActivityForm.formKey; }
    protected override getIdProperty()     { return CustomerActivityRow.idProperty; }
    protected override getLocalTextPrefix(){ return CustomerActivityRow.localTextPrefix; }
    protected override getNameProperty()   { return CustomerActivityRow.nameProperty; }
    protected override getService()        { return CustomerActivityService.baseUrl; }

    protected form = new CustomerActivityForm(this.idPrefix);

    // CustomerId dışarıdan set edilir, form'da gösterilmez
    public customerId: number;

    protected override getSaveEntity() {
        var entity = super.getSaveEntity();
        if (this.customerId && !entity.CustomerId) {
            entity.CustomerId = this.customerId;
        }
        return entity;
    }
}
