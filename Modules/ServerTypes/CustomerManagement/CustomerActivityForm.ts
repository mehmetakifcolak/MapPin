import { DateEditor, EnumEditor, initFormType, PrefixedContext, StringEditor, TextAreaEditor } from "@serenity-is/corelib";
import { CustomerActivityType } from "./CustomerActivityType";

export interface CustomerActivityForm {
    ActivityType: EnumEditor;
    ActivityDate: DateEditor;
    Subject: StringEditor;
    Notes: TextAreaEditor;
}

export class CustomerActivityForm extends PrefixedContext {
    static readonly formKey = 'CustomerManagement.CustomerActivity';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CustomerActivityForm.init) {
            CustomerActivityForm.init = true;

            var w0 = EnumEditor;
            var w1 = DateEditor;
            var w2 = StringEditor;
            var w3 = TextAreaEditor;

            initFormType(CustomerActivityForm, [
                'ActivityType', w0,
                'ActivityDate', w1,
                'Subject', w2,
                'Notes', w3
            ]);
        }
    }
}

[CustomerActivityType]; // referenced types