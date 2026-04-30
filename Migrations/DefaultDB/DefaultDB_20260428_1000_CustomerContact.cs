using FluentMigrator;

namespace MapPin.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20260428_1000)]
public class DefaultDB_20260428_1000_CustomerContact : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("CustomerContacts")
            .WithColumn("ContactId").AsInt32().IdentityKey(this)
            .WithColumn("CustomerId").AsInt32().NotNullable()
                .ForeignKey("FK_CustomerContacts_Customers", "Customers", "CustomerId")
            .WithColumn("ContactName").AsString(150).NotNullable()
            .WithColumn("Title").AsString(100).Nullable()
            .WithColumn("Phone").AsString(50).Nullable()
            .WithColumn("Email").AsString(150).Nullable()
            .WithColumn("Notes").AsString(500).Nullable()
            .WithColumn("InsertDate").AsDateTime().NotNullable()
            .WithColumn("InsertUserId").AsInt32().NotNullable()
            .WithColumn("UpdateDate").AsDateTime().Nullable()
            .WithColumn("UpdateUserId").AsInt32().Nullable();
    }
}
