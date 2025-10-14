# 📖 Instrukcja Obsługi - Consbridge Production

## 🚀 Szybki Start

### 1. Pierwsze uruchomienie

```bash
# Zainstaluj zależności (tylko raz)
npm install

# Uruchom serwer deweloperski
npm run dev
```

Otwórz przeglądarkę: **http://localhost:3000**

---

## ✏️ Jak Edytować Treść

### 📞 Zmiana Danych Kontaktowych

#### Telefon i Email w nagłówku:
**Plik:** `components/Header.tsx`

Znajdź i zmień:
```tsx
<a href="tel:+48123456789">+48 123 456 789</a>
<a href="mailto:kontakt@consbridgeproduction.pl">kontakt@consbridgeproduction.pl</a>
```

#### Dane w stopce:
**Plik:** `components/Footer.tsx`

Znajdź sekcję "Contact Info" i zmień adres, telefon, email.

#### Formularz kontaktowy:
**Plik:** `components/Contact.tsx`

Zmień dane w tablicy `contactInfo`.

---

### 🏠 Zmiana Treści na Stronie Głównej

#### Sekcja Hero (powitalna):
**Plik:** `components/Hero.tsx`

Zmień:
- Nagłówek: `<h1>Innowacyjne Rozwiązania...</h1>`
- Opis: `<p>Consbridge Production to...</p>`
- Statystyki: liczby 500+, 25+, 1000+

#### Statystyki:
**Plik:** `components/Stats.tsx`

Zmień liczby i opisy w tablicy `stats`.

---

### 🛠️ Edycja Usług

**Plik:** `components/Services.tsx`

Znajdź tablicę `services` i edytuj:
```tsx
{
  title: 'Nazwa usługi',
  description: 'Opis usługi',
  features: ['Cecha 1', 'Cecha 2', ...],
}
```

Możesz dodać nowe usługi lub usunąć istniejące.

---

### 📦 Edycja Produktów

**Plik:** `components/Products.tsx`

#### Zmiana kategorii:
Edytuj tablicę `categories`:
```tsx
{ id: 'chemical', label: 'Chemikalia', icon: <FaFlask /> }
```

#### Zmiana produktów:
Edytuj tablicę `products`:
```tsx
{
  category: 'chemical',
  name: 'Nazwa produktu',
  description: 'Opis',
  items: ['Element 1', 'Element 2'],
  image: '🧪',
}
```

---

### 📝 Edycja Sekcji "O Nas"

**Plik:** `components/About.tsx`

Zmień:
- Nagłówek i opis firmy
- Wartości firmy (tablica `values`)
- Osiągnięcia (tablica `achievements`)
- Certyfikaty (na dole sekcji)

---

## 🎨 Zmiana Kolorów

**Plik:** `tailwind.config.js`

### Kolor główny (niebieski):
```js
primary: {
  500: '#0ea5e9',  // Zmień ten kod koloru
  600: '#0284c7',
  // ...
}
```

### Kolor dodatkowy (szary):
```js
secondary: {
  900: '#0f172a',  // Ciemny
  // ...
}
```

**Podgląd zmian:** Zapisz plik, strona odświeży się automatycznie.

---

## 🖼️ Dodawanie Obrazów

### 1. Dodaj obrazy do folderu:
```
public/
  images/
    logo.png
    product1.jpg
    hero-bg.jpg
```

### 2. Użyj w komponencie:
```tsx
import Image from 'next/image'

<Image 
  src="/images/logo.png" 
  alt="Logo" 
  width={200} 
  height={100}
/>
```

---

## 📧 Konfiguracja Formularza Kontaktowego

### Opcja 1: Formspree (Najprostsze)

1. Zarejestruj się na **https://formspree.io**
2. Utwórz nowy formularz
3. Skopiuj ID formularza
4. W `components/Contact.tsx` zmień:

```tsx
<form action="https://formspree.io/f/TWOJE_ID" method="POST">
```

### Opcja 2: Email API

Stwórz plik `app/api/contact/route.ts`:
```tsx
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Wyślij email przez SendGrid, Mailgun, etc.
  
  return NextResponse.json({ success: true })
}
```

---

## 🌐 Zmiana Języka

Wszystkie teksty są w plikach komponentów. Aby zmienić na angielski:

1. Otwórz każdy komponent
2. Zmień teksty polskie na angielskie
3. Zmień `lang="pl"` na `lang="en"` w `app/layout.tsx`

**Dla wersji wielojęzycznej:** Użyj biblioteki `next-intl` lub `react-i18next`.

---

## 📱 Testowanie Responsywności

### W przeglądarce:
1. Otwórz DevTools (F12)
2. Kliknij ikonę telefonu (Toggle device toolbar)
3. Wybierz różne urządzenia

### Breakpointy:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🚀 Publikacja Strony

### Vercel (Zalecane - Darmowe):

1. **Utwórz konto:** https://vercel.com
2. **Połącz z GitHub:**
   - Push kod do GitHub
   - Import projektu w Vercel
3. **Deploy:** Automatyczny!

### Własny Hosting:

```bash
# Zbuduj projekt
npm run build

# Uruchom
npm start
```

Potrzebujesz serwera z Node.js 18+.

---

## 🔧 Rozwiązywanie Problemów

### Strona się nie uruchamia:
```bash
# Usuń node_modules i zainstaluj ponownie
rmdir /s /q node_modules
npm install
```

### Błędy TypeScript:
```bash
# Sprawdź błędy
npm run lint
```

### Port 3000 zajęty:
```bash
# Użyj innego portu
npm run dev -- -p 3001
```

---

## 📞 Potrzebujesz Pomocy?

### Dokumentacja:
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Icons: https://react-icons.github.io/react-icons/

### Wsparcie:
- Email: kontakt@consbridgeproduction.pl
- Telefon: +48 123 456 789

---

## ✅ Checklist przed publikacją:

- [ ] Zmieniono wszystkie dane kontaktowe
- [ ] Zaktualizowano treści (usługi, produkty, o nas)
- [ ] Dodano prawdziwe obrazy
- [ ] Skonfigurowano formularz kontaktowy
- [ ] Przetestowano na różnych urządzeniach
- [ ] Sprawdzono wszystkie linki
- [ ] Dodano Google Analytics (opcjonalnie)
- [ ] Skonfigurowano domenę

---

**Powodzenia! 🎉**