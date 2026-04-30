# MapPin

Serenity Framework tabanlı müşteri yönetimi ve harita konumlandırma uygulaması.

## Teknolojiler

- **Backend:** ASP.NET Core 8, C#
- **Framework:** Serenity 9.1.1
- **Veritabanı:** SQL Server
- **Frontend:** TypeScript, React

## Modüller

- **Müşteri Yönetimi** — Müşteri, iletişim bilgileri ve aktivite takibi
- **Harita** — İl/ilçe bazlı konumlandırma ve sınır görselleştirme
- **Yönetim** — Kullanıcı, rol ve yetki yönetimi

## Kurulum

### Gereksinimler

- .NET 8 SDK
- Node.js
- SQL Server

### Adımlar

```bash
# Bağımlılıkları yükle
npm install
dotnet restore

# Veritabanı bağlantısını yapılandır
# appsettings.json dosyasını oluşturup bağlantı bilgilerini girin
# (örnek: appsettings.Development.json)

# Uygulamayı çalıştır
dotnet run
```

Uygulama varsayılan olarak `https://localhost:5001` adresinde çalışır.

## Veritabanı

Migration'lar FluentMigrator ile yönetilir ve uygulama ilk açılışta otomatik çalışır. `appsettings.json` git'e dahil edilmediğinden her ortam için ayrı oluşturulması gerekir:

```json
{
  "Data": {
    "Default": {
      "ConnectionString": "Server=.;Database=MapPin_Default_v1;User Id=sa;Password=...;Integrated Security=false;Encrypt=false;TrustServerCertificate=true",
      "ProviderName": "System.Data.SqlClient"
    }
  }
}
```

### Şema

```
Customers
├── CustomerId        int, PK
├── CustomerName      nvarchar(150), NOT NULL
├── ContactName       nvarchar(100)
├── Email             nvarchar(100)
├── Phone             nvarchar(50)
├── Address           nvarchar(250)
├── City              nvarchar(100)   -- İl
├── District          nvarchar(100)   -- İlçe
├── Country           nvarchar(100)
├── Notes             nvarchar(1000)
├── Latitude          float
├── Longitude         float
├── IsActive          smallint, DEFAULT 1
└── Insert/UpdateDate, Insert/UpdateUserId

CustomerContacts
├── ContactId         int, PK
├── CustomerId        int, FK → Customers
├── ContactName       nvarchar(150), NOT NULL
├── Title             nvarchar(100)
├── Phone             nvarchar(50)
├── Email             nvarchar(150)
├── Notes             nvarchar(500)
└── Insert/UpdateDate, Insert/UpdateUserId

CustomerActivities
├── ActivityId        int, PK
├── CustomerId        int, FK → Customers
├── ActivityType      int  (enum: Telefon, E-posta, Ziyaret, vb.)
├── Subject           nvarchar(250), NOT NULL
├── Notes             nvarchar(2000)
├── ActivityDate      datetime, NOT NULL
└── Insert/UpdateDate, Insert/UpdateUserId
```

### Migration Geçmişi

| Tarih | Açıklama |
|-------|----------|
| 2014-11-03 | Başlangıç (kullanıcı, rol, yetki tabloları) |
| 2014-11-11 | Yetki kayıtları |
| 2016-05-15 | Kullanıcı tercihleri |
| 2016-10-29 | Exception log |
| 2026-04-27 | Customers tablosu |
| 2026-04-27 | Harita alanları (Latitude, Longitude, District) |
| 2026-04-27 | CustomerActivities tablosu |
| 2026-04-28 | CustomerContacts tablosu |
