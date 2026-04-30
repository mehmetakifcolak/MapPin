import { EntityDialog } from "@serenity-is/corelib";
import { CustomerForm, CustomerRow, CustomerService } from "../../ServerTypes/CustomerManagement";
import { nsCustomerManagement } from "../../ServerTypes/Namespaces";
import { CustomerActivityGrid } from "../CustomerActivity/CustomerActivityGrid";
import { CustomerContactGrid } from "../CustomerContact/CustomerContactGrid";
import "../../Common/Editors/NoteEditor";

export class CustomerDialog extends EntityDialog<CustomerRow, any> {
    static override[Symbol.typeInfo] = this.registerClass(nsCustomerManagement);

    protected override getFormKey()         { return CustomerForm.formKey; }
    protected override getIdProperty()      { return CustomerRow.idProperty; }
    protected override getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
    protected override getNameProperty()    { return CustomerRow.nameProperty; }
    protected override getService()         { return CustomerService.baseUrl; }

    protected form = new CustomerForm(this.idPrefix);

    private activitiesGrid: CustomerActivityGrid;
    private contactsGrid: CustomerContactGrid;
    private tabsInjected = false;

    protected override afterInit(): void {
        super.afterInit();
        this.injectTabs();
    }

    private injectTabs(): void {
        if (this.tabsInjected) return;

        var formEl = this.domNode?.querySelector('.s-Form') as HTMLElement;
        if (!formEl) return;

        this.tabsInjected = true;
        var prefix = this.idPrefix;

        var navHtml = `<ul class="nav nav-tabs" style="padding:0 16px;margin-bottom:0;">
            <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#${prefix}tab-info">
                    <i class="fa fa-user me-1"></i>Genel Bilgiler
                </a>
            </li>
            <li class="nav-item" id="${prefix}tab-con-li" style="display:none">
                <a class="nav-link" data-bs-toggle="tab" href="#${prefix}tab-con"
                   id="${prefix}tab-con-link">
                    <i class="fa fa-address-book me-1"></i>İletişim Kişileri
                </a>
            </li>
            <li class="nav-item" id="${prefix}tab-act-li" style="display:none">
                <a class="nav-link" data-bs-toggle="tab" href="#${prefix}tab-act"
                   id="${prefix}tab-act-link">
                    <i class="fa fa-comments me-1"></i>Aktiviteler
                </a>
            </li>
        </ul>`;

        // Tab 1 — form
        var tabInfo = document.createElement('div');
        tabInfo.id = prefix + 'tab-info';
        tabInfo.className = 'tab-pane fade show active';
        formEl.parentNode!.insertBefore(tabInfo, formEl);
        tabInfo.appendChild(formEl);

        // Tab 2 — contacts
        var tabCon = document.createElement('div');
        tabCon.id = prefix + 'tab-con';
        tabCon.className = 'tab-pane fade';
        tabCon.style.cssText = 'min-height:320px;padding:8px 0;';
        var conDiv = document.createElement('div');
        tabCon.appendChild(conDiv);

        // Tab 3 — activities
        var tabAct = document.createElement('div');
        tabAct.id = prefix + 'tab-act';
        tabAct.className = 'tab-pane fade';
        tabAct.style.cssText = 'min-height:320px;padding:8px 0;';
        var actDiv = document.createElement('div');
        tabAct.appendChild(actDiv);

        // Tab content wrapper
        var tabContent = document.createElement('div');
        tabContent.className = 'tab-content';
        tabInfo.parentNode!.insertBefore(tabContent, tabInfo);
        tabContent.appendChild(tabInfo);
        tabContent.appendChild(tabCon);
        tabContent.appendChild(tabAct);

        tabContent.insertAdjacentHTML('beforebegin', navHtml);

        // Lazy load contacts grid
        var conLink = this.domNode.querySelector('#' + prefix + 'tab-con-link') as HTMLElement;
        conLink?.addEventListener('shown.bs.tab', () => {
            if (!this.contactsGrid) {
                this.contactsGrid = new CustomerContactGrid({ element: conDiv });
                if (this.entityId)
                    this.contactsGrid.setCustomerId(this.entityId as number);
            } else {
                this.contactsGrid.refresh();
            }
        });

        // Lazy load activities grid
        var actLink = this.domNode.querySelector('#' + prefix + 'tab-act-link') as HTMLElement;
        actLink?.addEventListener('shown.bs.tab', () => {
            if (!this.activitiesGrid) {
                this.activitiesGrid = new CustomerActivityGrid({ element: actDiv });
                if (this.entityId)
                    this.activitiesGrid.setCustomerId(this.entityId as number);
            } else {
                this.activitiesGrid.refresh();
            }
        });
    }

    protected override afterLoadEntity(): void {
        super.afterLoadEntity();

        var hasId = !!this.entityId;

        var tabConLi = this.domNode?.querySelector('#' + this.idPrefix + 'tab-con-li') as HTMLElement;
        if (tabConLi) tabConLi.style.display = hasId ? '' : 'none';

        var tabActLi = this.domNode?.querySelector('#' + this.idPrefix + 'tab-act-li') as HTMLElement;
        if (tabActLi) tabActLi.style.display = hasId ? '' : 'none';

        if (this.contactsGrid && hasId)
            this.contactsGrid.setCustomerId(this.entityId as number);

        if (this.activitiesGrid && hasId)
            this.activitiesGrid.setCustomerId(this.entityId as number);
    }
}
