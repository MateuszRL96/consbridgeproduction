# ❓ FAQ - Najczęściej Zadawane Pytania

## 🚀 Uruchamianie

### Q: Jak uruchomić stronę?
**A:** Strona już działa! Otwórz: `http://localhost:3001`

Jeśli nie działa:
```bash
cd C:\Users\mateu\Documents\consbridgeproduction
npm run dev
```

### Q: Port 3000 jest zajęty, co robić?
**A:** Next.js automatycznie użyje portu 3001. Możesz też wybrać inny:
```bash
npm run dev -- -p 3002
```

### Q: Jak zatrzymać serwer?
**A:** Naciśnij `Ctrl + C` w terminalu.

---

## ✏️ Edycja

### Q: Jak zmienić telefon i email?
**A:** Otwórz `QUICK-EDIT.md` → sekcja "DANE KONTAKTOWE"

Pliki do edycji:
- `components/Header.tsx` (linia ~30-40)
- `components/Footer.tsx` (linia ~80-100)
- `components/Contact.tsx` (linia ~40-70)

### Q: Jak zmienić kolory strony?
**A:** Edytuj `tailwind.config.js`:
```js
primary: {
  500: '#0ea5e9',  // ← Zmień ten kolor
}
```

### Q: Jak zmienić logo?
**A:** W `components/Header.tsx` (linia ~50-60):
```tsx
<div>CB</div>  // ← Zmień na swoje inicjały
```

Lub dodaj obrazek:
```tsx
<Image src="/images/logo.png" alt="Logo" width={150} height={50} />
```

### Q: Jak dodać nową usługę?
**A:** W `components/Services.tsx` dodaj nowy obiekt do tablicy `services`:
```tsx
{
  icon: <FaIcon />,
  title: 'Nowa Usługa',
  description: 'Opis...',
  features: ['Cecha 1', 'Cecha 2'],
  color: 'from-blue-500 to-blue-600',
}
```

### Q: Jak usunąć sekcję ze strony?
**A:** W `app/page.tsx` usuń linię z komponentem:
```tsx
<Stats />  // ← Usuń tę linię
```

---

## 🎨 Design

### Q: Jak zmienić czcionkę?
**A:** W `app/layout.tsx` zmień:
```tsx
import { Inter, Poppins } from 'next/font/google'
// Zmień na inne czcionki z Google Fonts
```

### Q: Jak dodać zdjęcia?
**A:** 
1. Dodaj zdjęcie do folderu `public/images/`
2. Użyj w komponencie:
```tsx
<Image src="/images/photo.jpg" alt="Opis" width={800} height={600} />
```

### Q: Jak zmienić gradient?
**A:** W `tailwind.config.js` lub bezpośrednio w komponencie:
```tsx
className="bg-gradient-to-r from-blue-500 to-purple-600"
```

---

## 📧 Formularz Kontaktowy

### Q: Formularz nie wysyła emaili, co robić?
**A:** Obecnie formularz jest w wersji demo. Aby podłączyć prawdziwy:

**Opcja 1 - Formspree (najprostsze):**
1. Zarejestruj się: https://formspree.io
2. Utwórz formularz
3. W `components/Contact.tsx` zmień:
```tsx
<form action="https://formspree.io/f/TWOJE_ID" method="POST">
```

**Opcja 2 - Własny backend:**
Stwórz `app/api/contact/route.ts` z logiką wysyłki email.

### Q: Jak zmienić opcje w dropdown "Temat"?
**A:** W `components/Contact.tsx` (linia ~150-160):
```tsx
<option value="products">Zapytanie o produkty</option>
<option value="new">Nowa opcja</option>  // ← Dodaj
```

---

## 🚀 Publikacja

### Q: Jak opublikować stronę w internecie?
**A:** Najłatwiej przez Vercel (darmowe):

1. Push kod do GitHub
2. Zarejestruj się na https://vercel.com
3. Połącz z GitHub
4. Kliknij "Deploy"
5. Gotowe!

### Q: Jak podłączyć własną domenę?
**A:** 
1. Kup domenę (np. consbridgeproduction.pl)
2. W Vercel: Settings → Domains → Add Domain
3. Skonfiguruj DNS zgodnie z instrukcjami

### Q: Jak zbudować wersję produkcyjną?
**A:**
```bash
npm run build
npm start
```

---

## 🔧 Problemy

### Q: Strona się nie ładuje / biały ekran
**A:** Sprawdź:
1. Czy serwer działa? (`npm run dev`)
2. Czy są błędy w terminalu?
3. Czy są błędy w konsoli przeglądarki? (F12 → Console)

### Q: Zmiany nie są widoczne
**A:** 
1. Zapisz plik (Ctrl + S)
2. Odśwież przeglądarkę (F5 lub Ctrl + Shift + R)
3. Jeśli dalej nie działa, zrestartuj serwer (Ctrl+C, potem `npm run dev`)

### Q: Błąd po edycji pliku
**A:** Sprawdź:
- Czy nie brakuje przecinka, nawiasu, cudzysłowu?
- Czy nie usunąłeś ważnego kodu?
- Cofnij zmiany (Ctrl + Z) i spróbuj ponownie

### Q: "Module not found" error
**A:**
```bash
npm install
```

### Q: Strona działa wolno
**A:**
1. Zbuduj wersję produkcyjną: `npm run build`
2. Uruchom: `npm start`
3. Wersja produkcyjna jest znacznie szybsza

---

## 📱 Responsywność

### Q: Jak przetestować na telefonie?
**A:** 
1. Otwórz DevTools (F12)
2. Kliknij ikonę telefonu (Toggle device toolbar)
3. Wybierz urządzenie (iPhone, Android)

### Q: Strona źle wygląda na telefonie
**A:** Sprawdź breakpointy w Tailwind:
- `md:` - tablet (768px+)
- `lg:` - desktop (1024px+)

Przykład:
```tsx
className="text-2xl md:text-4xl lg:text-6xl"
```

---

## 🎯 Funkcjonalności

### Q: Jak dodać Google Analytics?
**A:**
1. Utwórz konto GA4
2. Skopiuj ID (G-XXXXXXXXXX)
3. Dodaj do `app/layout.tsx`:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
```

### Q: Jak dodać blog?
**A:** To wymaga dodatkowej pracy:
1. Stwórz folder `app/blog/`
2. Dodaj `page.tsx` dla listy artykułów
3. Dodaj `[slug]/page.tsx` dla pojedynczego artykułu

### Q: Jak dodać wersję angielską?
**A:** Użyj biblioteki `next-intl`:
```bash
npm install next-intl
```
Dokumentacja: https://next-intl-docs.vercel.app/

### Q: Jak dodać live chat?
**A:** Użyj gotowego rozwiązania:
- Tawk.to (darmowy)
- Crisp
- Intercom

---

## 💾 Backup i Git

### Q: Jak zapisać kopię zapasową?
**A:** Użyj Git:
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### Q: Jak cofnąć zmiany?
**A:**
- W edytorze: Ctrl + Z
- W Git: `git checkout -- plik.tsx`
- Cały projekt: `git reset --hard`

---

## 📊 SEO

### Q: Jak zmienić tytuł strony w Google?
**A:** W `app/layout.tsx`:
```tsx
export const metadata = {
  title: 'Nowy Tytuł',  // ← Zmień
  description: 'Nowy opis...',  // ← Zmień (max 160 znaków)
}
```

### Q: Jak dodać favicon (ikonkę w zakładce)?
**A:** Dodaj plik `app/favicon.ico` (16x16 lub 32x32 px)

### Q: Jak dodać sitemap?
**A:** Plik `public/sitemap.xml` już istnieje! Zaktualizuj daty i URL.

---

## 🔐 Bezpieczeństwo

### Q: Czy strona jest bezpieczna?
**A:** Tak, Next.js ma wbudowane zabezpieczenia. Pamiętaj:
- Nie commituj `.env` do Git
- Używaj HTTPS w produkcji
- Waliduj dane z formularzy

### Q: Jak dodać HTTPS?
**A:** Vercel/Netlify dodają automatycznie. Na własnym serwerze użyj Let's Encrypt.

---

## 💰 Koszty

### Q: Ile kosztuje hosting?
**A:**
- **Vercel/Netlify:** Darmowe dla małych stron
- **Własny VPS:** ~20-50 zł/miesiąc
- **Domena:** ~50-100 zł/rok

### Q: Czy potrzebuję płacić za Next.js?
**A:** Nie! Next.js jest darmowy i open-source.

---

## 📞 Wsparcie

### Q: Gdzie znaleźć więcej informacji?
**A:** Sprawdź dokumentację:
- `START-HERE.md` - Szybki start
- `QUICK-EDIT.md` - Szybka edycja
- `INSTRUKCJA.md` - Szczegółowa instrukcja
- `README.md` - Dokumentacja techniczna

### Q: Gdzie szukać pomocy online?
**A:**
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Stack Overflow: https://stackoverflow.com/questions/tagged/next.js

### Q: Jak skontaktować się z supportem?
**A:**
- 📧 Email: kontakt@consbridgeproduction.pl
- 📱 Telefon: +48 123 456 789

---

## 🎓 Nauka

### Q: Nie znam React/Next.js, czy dam radę?
**A:** Tak! Do podstawowych zmian (tekst, kolory, dane) nie potrzebujesz znajomości React. Użyj `QUICK-EDIT.md`.

### Q: Gdzie nauczyć się więcej?
**A:**
- React: https://react.dev/learn
- Next.js: https://nextjs.org/learn
- Tailwind: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs/

---

## 🔄 Aktualizacje

### Q: Jak zaktualizować Next.js?
**A:**
```bash
npm update next react react-dom
```

### Q: Jak sprawdzić wersję?
**A:**
```bash
npm list next
```

---

## ✅ Checklist

### Q: Co zrobić przed publikacją?
**A:** Sprawdź:
- [ ] Zmieniono dane kontaktowe
- [ ] Zaktualizowano treści
- [ ] Dodano prawdziwe logo
- [ ] Skonfigurowano formularz
- [ ] Przetestowano na telefonie
- [ ] Sprawdzono wszystkie linki
- [ ] Dodano Google Analytics
- [ ] Skonfigurowano domenę

---

**Nie znalazłeś odpowiedzi?**

Sprawdź inne pliki dokumentacji lub skontaktuj się z nami!

---

*FAQ dla Consbridge Production Website*