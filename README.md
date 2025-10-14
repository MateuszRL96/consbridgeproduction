# Consbridge Production - Strona Internetowa

Profesjonalna strona internetowa dla firmy Consbridge Production - wiodącego dostawcy produktów chemicznych, nawozów oraz usług badawczych.

## 🚀 Technologie

- **Next.js 14** - React framework z server-side rendering
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Biblioteka ikon
- **Framer Motion** - Animacje (opcjonalnie)

## 📋 Funkcjonalności

### Sekcje strony:
- ✅ **Hero** - Efektowna sekcja powitalna z CTA
- ✅ **Statystyki** - Kluczowe liczby firmy
- ✅ **Usługi** - 6 głównych kategorii usług
- ✅ **Produkty** - Katalog produktów z filtrowaniem
- ✅ **O Nas** - Historia i wartości firmy
- ✅ **CTA** - Sekcja zachęcająca do kontaktu
- ✅ **Kontakt** - Formularz kontaktowy i dane firmy

### Cechy:
- 📱 **Responsywny design** - działa na wszystkich urządzeniach
- 🎨 **Nowoczesny design** - gradients, animacje, hover effects
- ⚡ **Szybki** - optymalizacja Next.js
- 🔍 **SEO-friendly** - metadata, semantic HTML
- ♿ **Dostępny** - ARIA labels, keyboard navigation

## 🛠️ Instalacja

### Wymagania:
- Node.js 18+ 
- npm lub yarn

### Kroki instalacji:

1. **Zainstaluj zależności:**
```bash
npm install
```

2. **Uruchom serwer deweloperski:**
```bash
npm run dev
```

3. **Otwórz przeglądarkę:**
```
http://localhost:3000
```

## 📦 Komendy

```bash
# Uruchom serwer deweloperski
npm run dev

# Zbuduj wersję produkcyjną
npm run build

# Uruchom wersję produkcyjną
npm start

# Sprawdź kod (linting)
npm run lint
```

## 📁 Struktura projektu

```
consbridgeproduction/
├── app/
│   ├── layout.tsx          # Layout główny
│   ├── page.tsx            # Strona główna
│   └── globals.css         # Style globalne
├── components/
│   ├── Header.tsx          # Nagłówek z nawigacją
│   ├── Footer.tsx          # Stopka
│   ├── Hero.tsx            # Sekcja hero
│   ├── Stats.tsx           # Statystyki
│   ├── Services.tsx        # Usługi
│   ├── Products.tsx        # Produkty
│   ├── About.tsx           # O nas
│   ├── CTA.tsx             # Call to action
│   └── Contact.tsx         # Kontakt
├── public/                 # Pliki statyczne (obrazy, etc.)
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Personalizacja

### Kolory:
Edytuj `tailwind.config.js` aby zmienić schemat kolorów:
```js
colors: {
  primary: { ... },    // Kolor główny (niebieski)
  secondary: { ... },  // Kolor dodatkowy (szary)
}
```

### Treść:
- **Dane kontaktowe**: `components/Header.tsx`, `components/Footer.tsx`, `components/Contact.tsx`
- **Produkty**: `components/Products.tsx`
- **Usługi**: `components/Services.tsx`
- **O firmie**: `components/About.tsx`

### Metadata SEO:
Edytuj `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: '...',
  description: '...',
  keywords: '...',
}
```

## 📧 Formularz kontaktowy

Obecnie formularz jest w wersji demo (symulacja wysyłki). Aby podłączyć prawdziwy backend:

### Opcja 1: Email API (np. SendGrid, Mailgun)
```tsx
// W components/Contact.tsx
const handleSubmit = async (e) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
}
```

### Opcja 2: Formspree / Getform
Dodaj endpoint do formularza:
```tsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Opcja 3: Własny backend
Stwórz API route w `app/api/contact/route.ts`

## 🚀 Deployment

### Vercel (Zalecane):
1. Push kod do GitHub
2. Połącz z Vercel
3. Deploy automatyczny

### Inne platformy:
- **Netlify**: `npm run build` → deploy folder `.next`
- **Własny serwer**: `npm run build` → `npm start`

## 📱 Responsywność

Strona jest w pełni responsywna:
- 📱 Mobile: < 768px
- 💻 Tablet: 768px - 1024px
- 🖥️ Desktop: > 1024px

## ⚡ Optymalizacja

- ✅ Lazy loading obrazów
- ✅ Code splitting (Next.js)
- ✅ Minifikacja CSS/JS
- ✅ Optymalizacja fontów (Google Fonts)
- ✅ SEO metadata

## 🔧 Dalszy rozwój

Możliwe rozszerzenia:
- 🌐 Wersja wielojęzyczna (i18n)
- 📝 Blog / Aktualności
- 🛒 Sklep online
- 👤 Panel klienta
- 📊 Dashboard administracyjny
- 🔐 Logowanie / Rejestracja
- 💬 Live chat
- 📄 Generator PDF (oferty, faktury)

## 📞 Wsparcie

W razie pytań lub problemów:
- 📧 Email: kontakt@consbridgeproduction.pl
- 📱 Telefon: +48 123 456 789

## 📄 Licencja

© 2024 Consbridge Production. Wszelkie prawa zastrzeżone.

---

**Stworzone z ❤️ dla Consbridge Production**