# 📁 Przewodnik po Plikach - Co Gdzie Znajdziesz?

## 🎯 Szybki Dostęp

### 📖 Dokumentacja (Zacznij tutaj!)
```
START-HERE.md          ⭐ Zacznij od tego pliku!
QUICK-EDIT.md          ⚡ Najczęstsze zmiany
INSTRUKCJA.md          📖 Szczegółowa instrukcja
README.md              🔧 Dokumentacja techniczna
FAQ.md                 ❓ Najczęstsze pytania
FEATURES.md            ✨ Lista funkcjonalności
PROJECT-SUMMARY.md     📊 Podsumowanie projektu
VISUAL-GUIDE.md        🎨 Wizualny przewodnik
FILES-GUIDE.md         📁 Ten plik
CHANGELOG.md           📝 Historia zmian
```

---

## 🎨 Pliki do Edycji (Najważniejsze!)

### 1. Dane Kontaktowe
```
components/Header.tsx       → Telefon i email w górnym pasku
components/Footer.tsx       → Dane w stopce
components/Contact.tsx      → Formularz kontaktowy
```

### 2. Treść Strony
```
components/Hero.tsx         → Strona główna (nagłówek)
components/Stats.tsx        → Statystyki (500+, 25+, 1000+)
components/Services.tsx     → Usługi (6 kategorii)
components/Products.tsx     → Produkty (katalog)
components/About.tsx        → O firmie
components/CTA.tsx          → Zachęta do kontaktu
```

### 3. Wygląd i Kolory
```
tailwind.config.js          → Kolory, czcionki, breakpointy
app/globals.css             → Style globalne
app/layout.tsx              → Czcionki, SEO metadata
```

### 4. Konfiguracja
```
package.json                → Zależności, skrypty
next.config.js              → Ustawienia Next.js
tsconfig.json               → Ustawienia TypeScript
.env.local.example          → Przykładowa konfiguracja
```

---

## 📂 Struktura Katalogów

```
consbridgeproduction/
│
├── 📄 Dokumentacja (10 plików .md)
│   └── Wszystkie pliki README, instrukcje, FAQ
│
├── 📁 app/                          ← Główna aplikacja Next.js
│   ├── layout.tsx                   → Layout + SEO + czcionki
│   ├── page.tsx                     → Strona główna (importy komponentów)
│   └── globals.css                  → Style globalne
│
├── 📁 components/                   ← Komponenty React (9 plików)
│   ├── Header.tsx                   → Nawigacja + top bar
│   ├── Footer.tsx                   → Stopka
│   ├── Hero.tsx                     → Sekcja powitalna
│   ├── Stats.tsx                    → Statystyki
│   ├── Services.tsx                 → Usługi
│   ├── Products.tsx                 → Produkty
│   ├── About.tsx                    → O nas
│   ├── CTA.tsx                      → Call to action
│   └── Contact.tsx                  → Kontakt + formularz
│
├── 📁 public/                       ← Pliki statyczne
│   ├── robots.txt                   → Dla robotów Google
│   └── sitemap.xml                  → Mapa strony
│
├── 📁 node_modules/                 ← Biblioteki (nie edytuj!)
├── 📁 .next/                        ← Build (nie edytuj!)
│
└── ⚙️ Pliki konfiguracyjne
    ├── package.json                 → Zależności
    ├── next.config.js               → Next.js
    ├── tailwind.config.js           → Tailwind CSS
    ├── tsconfig.json                → TypeScript
    ├── postcss.config.js            → PostCSS
    ├── .eslintrc.json               → ESLint
    ├── .gitignore                   → Git
    └── .env.local.example           → Zmienne środowiskowe
```

---

## 🎯 Co Gdzie Edytować?

### Chcę zmienić...

#### 📞 Telefon i Email
```
✏️ components/Header.tsx (linia ~30-40)
✏️ components/Footer.tsx (linia ~80-100)
✏️ components/Contact.tsx (linia ~40-70)
```

#### 📍 Adres Firmy
```
✏️ components/Footer.tsx (sekcja Contact Info)
✏️ components/Contact.tsx (tablica contactInfo)
```

#### 🎨 Kolory
```
✏️ tailwind.config.js (sekcja colors)
```

#### 🔤 Czcionki
```
✏️ app/layout.tsx (import czcionek)
```

#### 📝 Tekst na Stronie Głównej
```
✏️ components/Hero.tsx (nagłówek, opis, przyciski)
```

#### 📊 Statystyki (500+, 25+, 1000+)
```
✏️ components/Hero.tsx (linia ~60-75)
✏️ components/Stats.tsx (tablica stats)
```

#### 🛠️ Usługi
```
✏️ components/Services.tsx (tablica services)
```

#### 📦 Produkty
```
✏️ components/Products.tsx (tablice categories i products)
```

#### 📖 O Firmie
```
✏️ components/About.tsx (tekst, wartości, osiągnięcia)
```

#### 🏷️ Logo
```
✏️ components/Header.tsx (linia ~50-60)
✏️ components/Footer.tsx (linia ~20-35)
```

#### 🔍 SEO (tytuł, opis)
```
✏️ app/layout.tsx (export const metadata)
```

#### 📧 Formularz Kontaktowy
```
✏️ components/Contact.tsx (pola, opcje, walidacja)
```

---

## 📄 Szczegółowy Opis Plików

### 📁 app/

#### `layout.tsx` (Główny Layout)
```tsx
Co zawiera:
- Import czcionek (Inter, Poppins)
- Metadata SEO (title, description, keywords)
- Layout aplikacji (Header, Main, Footer)
- Konfiguracja HTML lang="pl"

Kiedy edytować:
- Zmiana czcionek
- Zmiana SEO (tytuł, opis)
- Dodanie Google Analytics
```

#### `page.tsx` (Strona Główna)
```tsx
Co zawiera:
- Importy wszystkich komponentów
- Kolejność sekcji na stronie

Kiedy edytować:
- Zmiana kolejności sekcji
- Usunięcie sekcji
- Dodanie nowej sekcji
```

#### `globals.css` (Style Globalne)
```css
Co zawiera:
- Import Tailwind CSS
- Custom CSS (animacje, scrollbar)
- Utility classes

Kiedy edytować:
- Dodanie custom animacji
- Zmiana scrollbara
- Dodanie globalnych stylów
```

---

### 📁 components/

#### `Header.tsx` (Nawigacja)
```tsx
Co zawiera:
- Top bar z danymi kontaktowymi
- Logo
- Menu nawigacyjne (desktop + mobile)
- Sticky scroll effect

Kiedy edytować:
- Zmiana telefonu/emaila
- Zmiana logo
- Dodanie/usunięcie linków menu
- Zmiana godzin pracy
```

#### `Footer.tsx` (Stopka)
```tsx
Co zawiera:
- 4 kolumny (firma, linki, usługi, kontakt)
- Social media links
- Copyright

Kiedy edytować:
- Zmiana danych kontaktowych
- Dodanie/usunięcie linków
- Zmiana social media
```

#### `Hero.tsx` (Sekcja Powitalna)
```tsx
Co zawiera:
- Główny nagłówek
- Opis firmy
- 2 przyciski CTA
- Statystyki (500+, 25+, 1000+)
- 4 karty z kategoriami

Kiedy edytować:
- Zmiana nagłówka
- Zmiana opisu
- Zmiana statystyk
- Zmiana tekstów przycisków
```

#### `Stats.tsx` (Statystyki)
```tsx
Co zawiera:
- 4 metryki z ikonami
- Animacje hover

Kiedy edytować:
- Zmiana liczb
- Zmiana opisów
- Dodanie/usunięcie statystyk
```

#### `Services.tsx` (Usługi)
```tsx
Co zawiera:
- 6 kategorii usług
- Opisy i cechy każdej usługi
- Ikony z gradientami

Kiedy edytować:
- Zmiana opisu usług
- Dodanie nowej usługi
- Usunięcie usługi
- Zmiana cech
```

#### `Products.tsx` (Produkty)
```tsx
Co zawiera:
- System filtrowania (6 kategorii)
- 9 produktów
- Opisy i listy elementów

Kiedy edytować:
- Dodanie nowego produktu
- Zmiana kategorii
- Zmiana opisów
- Dodanie/usunięcie filtrów
```

#### `About.tsx` (O Nas)
```tsx
Co zawiera:
- Historia firmy
- 4 wartości firmy
- 6 osiągnięć
- 4 certyfikaty

Kiedy edytować:
- Zmiana tekstu o firmie
- Zmiana roku założenia
- Dodanie/usunięcie wartości
- Zmiana certyfikatów
```

#### `CTA.tsx` (Call to Action)
```tsx
Co zawiera:
- Gradient background
- Zachęta do kontaktu
- 2 przyciski
- Trust indicators

Kiedy edytować:
- Zmiana tekstu zachęty
- Zmiana przycisków
- Zmiana wskaźników zaufania
```

#### `Contact.tsx` (Kontakt)
```tsx
Co zawiera:
- 4 karty informacyjne
- Formularz kontaktowy
- Walidacja
- Komunikaty

Kiedy edytować:
- Zmiana danych kontaktowych
- Dodanie/usunięcie pól formularza
- Zmiana opcji dropdown
- Konfiguracja wysyłki
```

---

### ⚙️ Pliki Konfiguracyjne

#### `package.json`
```json
Co zawiera:
- Nazwa projektu
- Wersja
- Zależności (Next.js, React, Tailwind)
- Skrypty (dev, build, start)

Kiedy edytować:
- Dodanie nowej biblioteki
- Zmiana skryptów
- Aktualizacja wersji
```

#### `tailwind.config.js`
```js
Co zawiera:
- Kolory (primary, secondary)
- Czcionki
- Breakpointy
- Rozszerzenia

Kiedy edytować:
- Zmiana kolorów
- Dodanie nowych kolorów
- Zmiana breakpointów
```

#### `next.config.js`
```js
Co zawiera:
- Konfiguracja Next.js
- Ustawienia obrazków
- Redirects (opcjonalnie)

Kiedy edytować:
- Dodanie domeny dla obrazków
- Konfiguracja redirects
- Zmiana ustawień build
```

#### `tsconfig.json`
```json
Co zawiera:
- Konfiguracja TypeScript
- Ścieżki importów
- Opcje kompilacji

Kiedy edytować:
- Rzadko! Tylko jeśli wiesz co robisz
```

---

## 🚫 Czego NIE Edytować?

### ❌ Nie dotykaj tych folderów:
```
node_modules/          → Biblioteki (reinstaluj: npm install)
.next/                 → Build (usuń i zbuduj ponownie)
```

### ⚠️ Ostrożnie z tymi plikami:
```
tsconfig.json          → Tylko dla zaawansowanych
postcss.config.js      → Tylko jeśli wiesz co robisz
.eslintrc.json         → Konfiguracja lintera
```

---

## 🔍 Jak Znaleźć Konkretny Element?

### Metoda 1: Szukaj w VS Code
```
Ctrl + Shift + F       → Szukaj w całym projekcie
Ctrl + F               → Szukaj w pliku
```

### Metoda 2: Użyj tego przewodnika
```
Znajdź w sekcji "Co Gdzie Edytować?"
```

### Metoda 3: Sprawdź QUICK-EDIT.md
```
Tam są najczęstsze zmiany
```

---

## 📊 Rozmiary Plików

```
Komponenty:
Header.tsx      ~4 KB
Footer.tsx      ~3 KB
Hero.tsx        ~5 KB
Services.tsx    ~4 KB
Products.tsx    ~5 KB
About.tsx       ~4 KB
Contact.tsx     ~6 KB

Dokumentacja:
START-HERE.md   ~8 KB
QUICK-EDIT.md   ~7 KB
INSTRUKCJA.md   ~6 KB
README.md       ~5 KB

Razem: ~50 KB (bez node_modules)
```

---

## 🎯 Workflow Edycji

### Krok po kroku:

1. **Znajdź plik** (użyj tego przewodnika)
2. **Otwórz w edytorze** (VS Code)
3. **Znajdź sekcję** (Ctrl + F)
4. **Edytuj** (zmień tekst, liczby, kolory)
5. **Zapisz** (Ctrl + S)
6. **Sprawdź** (odśwież przeglądarkę)
7. **Gotowe!** ✅

---

## 💡 Wskazówki

### ✅ Dobre praktyki:
- Zawsze rób backup przed dużymi zmianami
- Testuj zmiany na różnych urządzeniach
- Używaj Git do wersjonowania
- Czytaj komentarze w kodzie

### ❌ Unikaj:
- Edytowania wielu plików naraz
- Usuwania kodu bez zrozumienia
- Commitowania node_modules do Git
- Edytowania plików w .next/

---

## 🆘 Pomoc

### Nie wiesz który plik edytować?
1. Sprawdź `QUICK-EDIT.md`
2. Sprawdź ten plik (FILES-GUIDE.md)
3. Sprawdź `FAQ.md`

### Coś się zepsuło?
1. Cofnij zmiany (Ctrl + Z)
2. Sprawdź terminal (błędy)
3. Sprawdź konsolę przeglądarki (F12)

---

**Ten przewodnik pomoże Ci znaleźć każdy plik w projekcie!**

Zapisz go w zakładkach i wracaj gdy potrzebujesz! 📌

---

*Przewodnik po plikach - Consbridge Production*