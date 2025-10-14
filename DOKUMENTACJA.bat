@echo off
chcp 65001 >nul
cls

echo.
echo ╔══════════════════════════════════════════════════════════════════════════════╗
echo ║                                                                              ║
echo ║                    📚 DOKUMENTACJA CONSBRIDGE PRODUCTION 📚                  ║
echo ║                                                                              ║
echo ╚══════════════════════════════════════════════════════════════════════════════╝
echo.
echo.
echo Wybierz dokument do otwarcia:
echo.
echo ┌──────────────────────────────────────────────────────────────────────────────┐
echo │  🚀 SZYBKI START                                                             │
echo └──────────────────────────────────────────────────────────────────────────────┘
echo.
echo   1. CZYTAJ-MNIE.txt          ⭐ Zacznij tutaj! (2 min)
echo   2. START-HERE.md            📖 Przewodnik startowy (5 min)
echo   3. QUICK-EDIT.md            ⚡ Jak edytować (10 min)
echo.
echo ┌──────────────────────────────────────────────────────────────────────────────┐
echo │  ✏️ EDYCJA I POMOC                                                           │
echo └──────────────────────────────────────────────────────────────────────────────┘
echo.
echo   4. FAQ.md                   ❓ Najczęstsze pytania (15 min)
echo   5. INSTRUKCJA.md            📖 Szczegółowa instrukcja (20 min)
echo   6. FILES-GUIDE.md           📁 Przewodnik po plikach (10 min)
echo.
echo ┌──────────────────────────────────────────────────────────────────────────────┐
echo │  🎨 DESIGN I PRZEGLĄD                                                        │
echo └──────────────────────────────────────────────────────────────────────────────┘
echo.
echo   7. VISUAL-GUIDE.md          🎨 Wizualny przewodnik (10 min)
echo   8. PROJECT-SUMMARY.md       📊 Podsumowanie projektu (10 min)
echo   9. INDEX.md                 📚 Indeks dokumentacji (5 min)
echo.
echo ┌──────────────────────────────────────────────────────────────────────────────┐
echo │  🔧 DOKUMENTACJA TECHNICZNA                                                  │
echo └──────────────────────────────────────────────────────────────────────────────┘
echo.
echo  10. README.md                🔧 Dokumentacja techniczna (15 min)
echo  11. README-PL.md             🇵🇱 Polski README (10 min)
echo  12. FEATURES.md              ✨ Lista funkcjonalności (10 min)
echo  13. CHANGELOG.md             📝 Historia zmian (5 min)
echo.
echo ┌──────────────────────────────────────────────────────────────────────────────┐
echo │  🌐 INNE                                                                     │
echo └──────────────────────────────────────────────────────────────────────────────┘
echo.
echo  14. DOKUMENTACJA.html        🌐 Przeglądaj w przeglądarce
echo  15. Otwórz stronę            🚀 http://localhost:3001
echo.
echo   0. Wyjście
echo.
echo ══════════════════════════════════════════════════════════════════════════════
echo.

set /p choice="Wybierz numer (0-15): "

if "%choice%"=="1" start "" "CZYTAJ-MNIE.txt"
if "%choice%"=="2" start "" "START-HERE.md"
if "%choice%"=="3" start "" "QUICK-EDIT.md"
if "%choice%"=="4" start "" "FAQ.md"
if "%choice%"=="5" start "" "INSTRUKCJA.md"
if "%choice%"=="6" start "" "FILES-GUIDE.md"
if "%choice%"=="7" start "" "VISUAL-GUIDE.md"
if "%choice%"=="8" start "" "PROJECT-SUMMARY.md"
if "%choice%"=="9" start "" "INDEX.md"
if "%choice%"=="10" start "" "README.md"
if "%choice%"=="11" start "" "README-PL.md"
if "%choice%"=="12" start "" "FEATURES.md"
if "%choice%"=="13" start "" "CHANGELOG.md"
if "%choice%"=="14" start "" "DOKUMENTACJA.html"
if "%choice%"=="15" start "" "http://localhost:3001"
if "%choice%"=="0" exit

echo.
echo ✅ Otwarto dokument!
echo.
echo Chcesz otworzyć kolejny dokument?
echo.
pause
cls
goto :eof