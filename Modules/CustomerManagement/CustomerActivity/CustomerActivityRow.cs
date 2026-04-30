namespace MapPin.CustomerManagement;

[ConnectionKey("Default"), Module("CustomerManagement"), TableName("CustomerActivities")]
[DisplayName("Aktiviteler"), InstanceName("Aktivite")]
[ReadPermission(PermissionKeys.Customer)]
[ModifyPermission(PermissionKeys.Customer)]
public sealed class CustomerActivityRow : Serenity.Extensions.Entities.LoggingRow<CustomerActivityRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Aktivite Id"), Identity, IdProperty]
    public int? ActivityId { get => fields.ActivityId[this]; set => fields.ActivityId[this] = value; }

    [DisplayName("Müşteri"), NotNull, ForeignKey(typeof(CustomerRow)), LeftJoin("c")]
    public int? CustomerId { get => fields.CustomerId[this]; set => fields.CustomerId[this] = value; }

    [DisplayName("Aktivite Tipi"), NotNull]
    public CustomerActivityType? ActivityType { get => (CustomerActivityType?)fields.ActivityType[this]; set => fields.ActivityType[this] = (int?)value; }

    [DisplayName("Konu"), Size(250), NotNull, QuickSearch, NameProperty]
    public string Subject { get => fields.Subject[this]; set => fields.Subject[this] = value; }

    [DisplayName("Notlar"), Size(2000)]
    [TextAreaEditor(Rows = 4)]
    public string Notes { get => fields.Notes[this]; set => fields.Notes[this] = value; }

    [DisplayName("Tarih"), NotNull]
    public DateTime? ActivityDate { get => fields.ActivityDate[this]; set => fields.ActivityDate[this] = value; }

    [DisplayName("Müşteri Adı"), Origin("c", nameof(CustomerRow.CustomerName))]
    public string CustomerName { get => fields.CustomerName[this]; set => fields.CustomerName[this] = value; }

    public class RowFields : Serenity.Extensions.Entities.LoggingRowFields
    {
        public Int32Field    ActivityId;
        public Int32Field    CustomerId;
        public Int32Field    ActivityType;
        public StringField   Subject;
        public StringField   Notes;
        public DateTimeField ActivityDate;
        public StringField   CustomerName;
    }
}
