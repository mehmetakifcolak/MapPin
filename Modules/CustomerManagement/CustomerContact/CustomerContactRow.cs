namespace MapPin.CustomerManagement;

[ConnectionKey("Default"), Module("CustomerManagement"), TableName("CustomerContacts")]
[DisplayName("İletişim Kişileri"), InstanceName("İletişim Kişisi")]
[ReadPermission(PermissionKeys.Customer)]
[ModifyPermission(PermissionKeys.Customer)]
public sealed class CustomerContactRow : Serenity.Extensions.Entities.LoggingRow<CustomerContactRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Kişi Id"), Identity, IdProperty]
    public int? ContactId { get => fields.ContactId[this]; set => fields.ContactId[this] = value; }

    [DisplayName("Müşteri"), NotNull, ForeignKey(typeof(CustomerRow)), LeftJoin("c")]
    public int? CustomerId { get => fields.CustomerId[this]; set => fields.CustomerId[this] = value; }

    [DisplayName("Ad Soyad"), Size(150), NotNull, QuickSearch, NameProperty]
    public string ContactName { get => fields.ContactName[this]; set => fields.ContactName[this] = value; }

    [DisplayName("Unvan / Pozisyon"), Size(100)]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("Telefon"), Size(50)]
    public string Phone { get => fields.Phone[this]; set => fields.Phone[this] = value; }

    [DisplayName("E-posta"), Size(150)]
    public string Email { get => fields.Email[this]; set => fields.Email[this] = value; }

    [DisplayName("Notlar"), Size(500)]
    [TextAreaEditor(Rows = 3)]
    public string Notes { get => fields.Notes[this]; set => fields.Notes[this] = value; }

    [DisplayName("Müşteri Adı"), Origin("c", nameof(CustomerRow.CustomerName))]
    public string CustomerName { get => fields.CustomerName[this]; set => fields.CustomerName[this] = value; }

    public class RowFields : Serenity.Extensions.Entities.LoggingRowFields
    {
        public Int32Field  ContactId;
        public Int32Field  CustomerId;
        public StringField ContactName;
        public StringField Title;
        public StringField Phone;
        public StringField Email;
        public StringField Notes;
        public StringField CustomerName;
    }
}
