namespace MapPin.CustomerManagement;

[ConnectionKey("Default"), Module("CustomerManagement"), TableName("Customers")]
[DisplayName("Customers"), InstanceName("Customer")]
[ReadPermission(PermissionKeys.Customer)]
[ModifyPermission(PermissionKeys.Customer)]
public sealed class CustomerRow : Serenity.Extensions.Entities.LoggingRow<CustomerRow.RowFields>, IIdRow, INameRow, IIsActiveRow
{
    [DisplayName("Customer Id"), Identity, IdProperty]
    public int? CustomerId { get => fields.CustomerId[this]; set => fields.CustomerId[this] = value; }

    [DisplayName("Customer Name"), Size(150), NotNull, QuickSearch, NameProperty]
    public string CustomerName { get => fields.CustomerName[this]; set => fields.CustomerName[this] = value; }

    [DisplayName("Contact Name"), Size(100)]
    public string ContactName { get => fields.ContactName[this]; set => fields.ContactName[this] = value; }

    [DisplayName("Email"), Size(100)]
    public string Email { get => fields.Email[this]; set => fields.Email[this] = value; }

    [DisplayName("Phone"), Size(50)]
    public string Phone { get => fields.Phone[this]; set => fields.Phone[this] = value; }

    [DisplayName("Address"), Size(250)]
    public string Address { get => fields.Address[this]; set => fields.Address[this] = value; }

    [DisplayName("İl"), Size(100)]
    public string City { get => fields.City[this]; set => fields.City[this] = value; }

    [DisplayName("İlçe"), Size(100)]
    public string District { get => fields.District[this]; set => fields.District[this] = value; }

    [DisplayName("Country"), Size(100)]
    public string Country { get => fields.Country[this]; set => fields.Country[this] = value; }

    [DisplayName("Notes"), Size(1000)]
    public string Notes { get => fields.Notes[this]; set => fields.Notes[this] = value; }

    [DisplayName("Enlem"), Scale(8)]
    public double? Latitude { get => fields.Latitude[this]; set => fields.Latitude[this] = value; }

    [DisplayName("Boylam"), Scale(8)]
    public double? Longitude { get => fields.Longitude[this]; set => fields.Longitude[this] = value; }

    [DisplayName("Active"), NotNull, DefaultValue(1), Insertable(false), Updatable(false)]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField => fields.IsActive;

    public class RowFields : Serenity.Extensions.Entities.LoggingRowFields
    {
        public Int32Field CustomerId;
        public StringField CustomerName;
        public StringField ContactName;
        public StringField Email;
        public StringField Phone;
        public StringField Address;
        public StringField City;
        public StringField District;
        public StringField Country;
        public StringField Notes;
        public DoubleField Latitude;
        public DoubleField Longitude;
        public Int16Field IsActive;
    }
}
