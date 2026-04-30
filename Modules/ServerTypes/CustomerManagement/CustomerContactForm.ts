import { initFormType, PrefixedContext, StringEditor, TextAreaEditor } from "@serenity-is/corelib";

export interface CustomerContactForm {
    ContactName: StringEditor;
    Title: StringEditor;
    Phone: StringEditor;
    Email: StringEditor;
    Notes: TextAreaEditor;
}

export class CustomerContactForm extends PrefixedContext {
    static readonly formKey = 'CustomerManagement.CustomerContact';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CustomerContactForm.init) {
            CustomerContactForm.init = true;

            var w0 = StringEditor;
            var w1 = TextAreaEditor;

            initFormType(CustomerContactForm, [
                'ContactName', w0,
                'Title', w0,
                'Phone', w0,
                'Email', w0,
                'Notes', w1
            ]);
        }
    }
}