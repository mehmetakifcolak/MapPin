namespace MapPin.CustomerManagement;

[EnumKey("CustomerManagement.CustomerActivityType")]
public enum CustomerActivityType
{
    [Description("E-posta")]
    Email = 1,
    [Description("Telefon")]
    Phone = 2,
    [Description("Not")]
    Note = 3,
    [Description("Toplantı")]
    Meeting = 4,
    [Description("Diğer")]
    Other = 5
}
