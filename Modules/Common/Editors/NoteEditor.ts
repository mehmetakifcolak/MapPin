import { Authorization, EditorWidget, IStringValue } from "@serenity-is/corelib";

interface NoteItem {
    date: string;
    user: string;
    text: string;
}

export class NoteEditor extends EditorWidget<{}> implements IStringValue {

    static override [Symbol.typeInfo] = this.registerEditor("Common.NoteEditor");

    private textarea: HTMLTextAreaElement;
    private list: HTMLElement;

    constructor(props: { element: HTMLElement }) {
        super(props);

        this.domNode.style.cssText = 'display:flex;flex-direction:column;gap:8px;';

        // Not giriş alanı
        const inputRow = document.createElement('div');
        inputRow.style.cssText = 'display:flex;gap:6px;align-items:flex-end;';

        this.textarea = document.createElement('textarea');
        this.textarea.className = 'form-control form-control-sm';
        this.textarea.rows = 2;
        this.textarea.placeholder = 'Not ekleyin...';
        this.textarea.style.cssText = 'flex:1;resize:vertical;';
        inputRow.appendChild(this.textarea);

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-sm btn-primary';
        btn.innerHTML = '<i class="fa fa-plus me-1"></i>Ekle';
        btn.style.cssText = 'white-space:nowrap;height:fit-content;';
        btn.addEventListener('click', () => this.addNote());
        inputRow.appendChild(btn);

        this.domNode.appendChild(inputRow);

        // Not listesi
        this.list = document.createElement('div');
        this.list.className = 'note-list';
        this.list.style.cssText = 'display:flex;flex-direction:column;gap:6px;max-height:260px;overflow-y:auto;';
        this.domNode.appendChild(this.list);

        // Enter ile ekleme (Shift+Enter yeni satır)
        this.textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.addNote();
            }
        });
    }

    private addNote() {
        const text = this.textarea.value.trim();
        if (!text) return;

        const notes = this.getNotes();
        const user = Authorization.userDefinition?.Username || 'Kullanıcı';
        notes.unshift({ date: new Date().toISOString(), user, text });
        this.setNotes(notes);
        this.textarea.value = '';
        this.textarea.focus();
    }

    private getNotes(): NoteItem[] {
        try {
            const val = this.domNode.getAttribute('data-value');
            return val ? JSON.parse(val) : [];
        } catch { return []; }
    }

    private setNotes(notes: NoteItem[]) {
        this.domNode.setAttribute('data-value', JSON.stringify(notes));
        this.renderList(notes);
    }

    private renderList(notes: NoteItem[]) {
        this.list.innerHTML = '';
        notes.forEach(n => {
            const d = new Date(n.date);
            const dateStr = d.toLocaleDateString('tr-TR') + ' ' + d.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

            const item = document.createElement('div');
            item.style.cssText = 'background:#f8f9fa;border-radius:6px;padding:8px 10px;border-left:3px solid #2c3e50;font-size:12px;';
            item.innerHTML =
                `<div style="display:flex;justify-content:space-between;margin-bottom:3px;">` +
                `<span style="font-weight:600;color:#2c3e50;">${this.esc(n.user)}</span>` +
                `<span style="color:#adb5bd;font-size:11px;">${dateStr}</span>` +
                `</div>` +
                `<div style="color:#495057;white-space:pre-wrap;">${this.esc(n.text)}</div>`;
            this.list.appendChild(item);
        });
    }

    private esc(s: string) {
        return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    get_value(): string {
        const notes = this.getNotes();
        return notes.length ? JSON.stringify(notes) : null;
    }

    set_value(value: string) {
        let notes: NoteItem[] = [];
        try { if (value) notes = JSON.parse(value); } catch { }
        this.setNotes(notes);
    }
}
