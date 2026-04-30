using FluentMigrator;

namespace MapPin.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20260427_1000)]
public class DefaultDB_20260427_1000_Customer : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("Customers")
            .WithColumn("CustomerId").AsInt32().IdentityKey(this)
            .WithColumn("CustomerName").AsString(150).NotNullable()
            .WithColumn("ContactName").AsString(100).Nullable()
            .WithColumn("Email").AsString(100).Nullable()
            .WithColumn("Phone").AsString(50).Nullable()
            .WithColumn("Address").AsString(250).Nullable()
            .WithColumn("City").AsString(100).Nullable()
            .WithColumn("Country").AsString(100).Nullable()
            .WithColumn("Notes").AsString(1000).Nullable()
            .WithColumn("InsertDate").AsDateTime().NotNullable()
            .WithColumn("InsertUserId").AsInt32().NotNullable()
            .WithColumn("UpdateDate").AsDateTime().Nullable()
            .WithColumn("UpdateUserId").AsInt32().Nullable()
            .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);
    }
}
