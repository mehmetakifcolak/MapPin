import { initFormType, LookupEditor, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface CustomerForm {
    CustomerName: StringEditor;
    ContactName: StringEditor;
    Email: StringEditor;
    Phone: StringEditor;
    Address: StringEditor;
    City: LookupEditor;
    District: LookupEditor;
    Notes: StringEditor;
}

export class CustomerForm extends PrefixedContext {
    static readonly formKey = 'CustomerManagement.Customer';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CustomerForm.init) {
            CustomerForm.init = true;

            var w0 = StringEditor;
            var w1 = LookupEditor;

            initFormType(CustomerForm, [
                'CustomerName', w0,
                'ContactName', w0,
                'Email', w0,
                'Phone', w0,
                'Address', w0,
                'City', w1,
                'District', w1,
                'Notes', w0
            ]);
        }
    }
}