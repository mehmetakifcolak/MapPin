namespace Common;

public partial class NoteEditorAttribute : CustomEditorAttribute
{
    public const string Key = "Common.NoteEditor";

    public NoteEditorAttribute()
        : base(Key)
    {
    }

    public object Element
    {
        get { return GetOption<object>("element"); }
        set { SetOption("element", value); }
    }
}