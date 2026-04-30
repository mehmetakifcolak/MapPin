using FluentMigrator;

namespace MapPin.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20260427_1200)]
public class DefaultDB_20260427_1200_CustomerActivity : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("CustomerActivities")
            .WithColumn("ActivityId").AsInt32().IdentityKey(this)
            .WithColumn("CustomerId").AsInt32().NotNullable()
                .ForeignKey("FK_CustomerActivities_Customers", "Customers", "CustomerId")
            .WithColumn("ActivityType").AsInt32().NotNullable()
            .WithColumn("Subject").AsString(250).NotNullable()
            .WithColumn("Notes").AsString(2000).Nullable()
            .WithColumn("ActivityDate").AsDateTime().NotNullable()
            .WithColumn("InsertDate").AsDateTime().NotNullable()
            .WithColumn("InsertUserId").AsInt32().NotNullable()
            .WithColumn("UpdateDate").AsDateTime().Nullable()
            .WithColumn("UpdateUserId").AsInt32().Nullable();
    }
}
