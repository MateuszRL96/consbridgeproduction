# ⚡ Szybka Edycja - Najczęstsze Zmiany

## 📞 DANE KONTAKTOWE

### Gdzie zmienić telefon i email?

**1. Header (górny pasek):**
```
Plik: components/Header.tsx
Linia: ~30-40

Zmień:
tel:+48123456789
mailto:kontakt@consbridgeproduction.pl
```

**2. Footer (stopka):**
```
Plik: components/Footer.tsx
Linia: ~80-100

Zmień sekcję "Contact Info"
```

**3. Formularz kontaktowy:**
```
Plik: components/Contact.tsx
Linia: ~40-70

Zmień tablicę contactInfo
```

---

## 🏢 ADRES FIRMY

```
Plik: components/Footer.tsx + components/Contact.tsx

Obecny adres:
ul. Przykładowa 123
00-000 Warszawa, Polska

Zmień na swój adres
```

---

## 📊 STATYSTYKI (500+, 25+, 1000+)

### Hero (strona główna):
```
Plik: components/Hero.tsx
Linia: ~60-75

<div className="text-3xl">500+</div>  ← Zmień liczby
<div className="text-sm">Produktów</div>  ← Zmień opisy
```

### Sekcja Stats:
```
Plik: components/Stats.tsx
Linia: ~8-30

const stats = [
  { number: '25+', label: 'Lat na rynku' },  ← Zmień tutaj
  ...
]
```

---

## 🎨 KOLORY STRONY

```
Plik: tailwind.config.js
Linia: ~10-30

Kolor główny (niebieski):
primary: {
  500: '#0ea5e9',  ← Zmień na swój kolor
  600: '#0284c7',
}

Kolor dodatkowy (szary):
secondary: {
  900: '#0f172a',  ← Ciemny szary
}
```

**Jak wybrać kolor?**
- Użyj: https://tailwindcss.com/docs/customizing-colors
- Lub: https://colorhunt.co/

---

## 📝 TEKST NA STRONIE GŁÓWNEJ

### Główny nagłówek:
```
Plik: components/Hero.tsx
Linia: ~25-35

<h1>
  Innowacyjne
  <span>Rozwiązania</span>  ← Zmień tekst
  dla Przemysłu
</h1>
```

### Opis pod nagłówkiem:
```
Plik: components/Hero.tsx
Linia: ~40-45

<p>
  Consbridge Production to wiodący dostawca...  ← Zmień opis
</p>
```

---

## 🛠️ USŁUGI

```
Plik: components/Services.tsx
Linia: ~8-50

const services = [
  {
    title: 'Produkty Chemiczne',  ← Zmień nazwę
    description: 'Szeroka gama...',  ← Zmień opis
    features: ['Cecha 1', 'Cecha 2'],  ← Zmień cechy
  },
  // Dodaj więcej usług lub usuń istniejące
]
```

**Jak dodać nową usługę?**
Skopiuj cały blok `{ title: ..., description: ..., features: [...] }` i wklej poniżej.

---

## 📦 PRODUKTY

```
Plik: components/Products.tsx
Linia: ~20-80

const products = [
  {
    category: 'chemical',  ← Kategoria
    name: 'Produkty Chemiczne',  ← Nazwa
    description: 'Opis...',  ← Opis
    items: ['Item 1', 'Item 2'],  ← Lista elementów
    image: '🧪',  ← Emoji (lub zmień na obrazek)
  },
  // Dodaj więcej produktów
]
```

---

## 📖 O FIRMIE

### Główny tekst:
```
Plik: components/About.tsx
Linia: ~40-55

<h2>Lider w Branży Chemicznej od 1998 Roku</h2>  ← Zmień rok
<p>Consbridge Production to...</p>  ← Zmień opis
```

### Osiągnięcia (lista z checkmarkami):
```
Plik: components/About.tsx
Linia: ~30-40

const achievements = [
  'Ponad 25 lat doświadczenia',  ← Zmień lub dodaj nowe
  'Certyfikaty ISO...',
  ...
]
```

---

## 🔗 SOCIAL MEDIA

```
Plik: components/Footer.tsx
Linia: ~35-50

<a href="#">  ← Zmień # na link do LinkedIn
  <FaLinkedin />
</a>
<a href="#">  ← Zmień # na link do Facebook
  <FaFacebook />
</a>
```

---

## 📧 FORMULARZ KONTAKTOWY

### Zmiana opcji w dropdown "Temat":
```
Plik: components/Contact.tsx
Linia: ~150-160

<option value="products">Zapytanie o produkty</option>  ← Zmień
<option value="order">Złożenie zamówienia</option>  ← Lub dodaj nowe
```

### Podłączenie prawdziwego formularza:
```
Opcja 1 - Formspree (najprostsze):
1. Zarejestruj się: https://formspree.io
2. Utwórz formularz
3. Zmień w Contact.tsx:
   <form action="https://formspree.io/f/TWOJE_ID" method="POST">

Opcja 2 - Własny backend:
Stwórz plik: app/api/contact/route.ts
```

---

## 🖼️ LOGO

### Zmiana logo (tekst "CB"):
```
Plik: components/Header.tsx
Linia: ~50-60

<div className="...">
  CB  ← Zmień na inicjały swojej firmy
</div>
<span>Consbridge</span>  ← Zmień nazwę
<span>PRODUCTION</span>  ← Zmień podtytuł
```

### Dodanie obrazka jako logo:
```tsx
import Image from 'next/image'

<Image 
  src="/images/logo.png" 
  alt="Logo" 
  width={150} 
  height={50}
/>
```

---

## 🌐 SEO (Google)

```
Plik: app/layout.tsx
Linia: ~15-25

export const metadata = {
  title: 'Consbridge Production - ...',  ← Zmień tytuł
  description: 'Opis firmy...',  ← Zmień opis (max 160 znaków)
  keywords: 'nawozy, chemikalia...',  ← Zmień słowa kluczowe
}
```

---

## ⏰ GODZINY PRACY

```
Plik: components/Header.tsx (top bar)
Linia: ~35

<div>Pon - Pt: 8:00 - 16:00</div>  ← Zmień godziny
```

```
Plik: components/Contact.tsx (karta kontaktowa)
Linia: ~50

content: 'Pon - Pt: 8:00 - 16:00\nSob - Ndz: Zamknięte',  ← Zmień
```

---

## 🚀 JAK ZOBACZYĆ ZMIANY?

1. **Zapisz plik** (Ctrl + S)
2. **Odśwież przeglądarkę** (F5)
3. Zmiany powinny być widoczne natychmiast!

Jeśli nie widzisz zmian:
- Sprawdź czy serwer działa (`npm run dev`)
- Sprawdź konsolę w przeglądarce (F12) czy są błędy
- Zrestartuj serwer (Ctrl+C, potem `npm run dev`)

---

## ❓ NAJCZĘSTSZE PYTANIA

**Q: Jak zmienić kolor przycisków?**
A: Zmień `bg-gradient-primary` na `bg-blue-600` (lub inny kolor Tailwind)

**Q: Jak dodać nową sekcję?**
A: 
1. Stwórz nowy plik w `components/NowaSekcja.tsx`
2. Dodaj import w `app/page.tsx`
3. Dodaj `<NowaSekcja />` w odpowiednim miejscu

**Q: Jak usunąć sekcję?**
A: W pliku `app/page.tsx` usuń linię z komponentem, np. `<Stats />`

**Q: Jak zmienić czcionkę?**
A: W `app/layout.tsx` zmień `Inter` i `Poppins` na inne czcionki z Google Fonts

**Q: Strona nie działa po zmianach?**
A: Sprawdź czy nie ma błędów składni (brakujące nawiasy, przecinki, etc.)

---

## 📞 POTRZEBUJESZ POMOCY?

Jeśli coś nie działa:
1. Sprawdź konsolę przeglądarki (F12 → Console)
2. Sprawdź terminal gdzie działa `npm run dev`
3. Przeczytaj komunikat błędu
4. Cofnij ostatnie zmiany (Ctrl+Z)

---

**Powodzenia! 🎉**

Pamiętaj: Zawsze możesz cofnąć zmiany używając Git lub Ctrl+Z!