namespace _Ext;

public partial class AuditLogActionTypeFormatterAttribute : CustomFormatterAttribute
{
    public const string Key = "_Ext.AuditLogActionTypeFormatter";

    public AuditLogActionTypeFormatterAttribute()
        : base(Key)
    {
    }
}