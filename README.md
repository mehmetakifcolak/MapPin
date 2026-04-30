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

Migrations otomatik olarak çalışır. `appsettings.json` dosyasını `.gitignore`'a eklendiğinden her ortam için ayrı oluşturmanız gerekir:

```json
{
  "Data": {
    "Default": {
      "ConnectionString": "Server=.;Database=MapPin_Default_v1;...",
      "ProviderName": "System.Data.SqlClient"
    }
  }
}
```
