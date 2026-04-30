using FluentMigrator;

namespace MapPin.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20260427_1100)]
public class DefaultDB_20260427_1100_CustomerMapFields : AutoReversingMigration
{
    public override void Up()
    {
        Alter.Table("Customers")
            .AddColumn("District").AsString(100).Nullable()
            .AddColumn("Latitude").AsDouble().Nullable()
            .AddColumn("Longitude").AsDouble().Nullable();
    }
}
