## Dijital Kartvizit (Tek Şablon, Çok Kişi)

Bu proje **tek bir `index.html`** ile çalışır. Kişi bilgileri `data/profiles.json` içinden okunur.

### 1) Kişi kartı nasıl açılır?

- **Query param ile (tek dosya, en basit)**:
  - `index.html?id=yunus`
  - `index.html?id=ornek`

### 2) “Ben URL’de ?id görmek istemiyorum” (tek tek sayfa yazmadan)

`profiles.json` içindeki her profil için otomatik olarak şu dosyalar üretilir:

- `cards/<id>/index.html`

Bu dosyalar sadece **redirect** eder:
- `cards/yunus/` → `index.html?id=yunus`

Oluşturmak için:

```bash
npm run generate:cards
```

### 3) Local çalıştırma

```bash
npm run serve
```

Sonra:
- `http://localhost:3000/index.html?id=yunus`
- `http://localhost:3000/cards/yunus/`

### 4) Yeni kişi ekleme

`data/profiles.json` içindeki `profiles` dizisine yeni bir obje ekleyin ve benzersiz bir `id` verin.
Sonra (2. yöntemi kullanıyorsanız) tekrar çalıştırın:

```bash
npm run generate:cards
```

