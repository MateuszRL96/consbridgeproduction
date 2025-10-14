@echo off
chcp 65001 >nul
cls

echo.
echo ╔══════════════════════════════════════════════════════════════════════════════╗
echo ║                                                                              ║
echo ║                    🚀 URUCHAMIANIE STRONY CONSBRIDGE 🚀                      ║
echo ║                                                                              ║
echo ╚══════════════════════════════════════════════════════════════════════════════╝
echo.
echo.

echo [1/3] Sprawdzanie środowiska...
echo.

REM Sprawdź czy Node.js jest zainstalowany
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ BŁĄD: Node.js nie jest zainstalowany!
    echo.
    echo Pobierz Node.js z: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js zainstalowany
node --version
echo.

REM Sprawdź czy npm jest zainstalowany
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ BŁĄD: npm nie jest zainstalowany!
    echo.
    pause
    exit /b 1
)

echo ✅ npm zainstalowany
npm --version
echo.

echo [2/3] Sprawdzanie zależności...
echo.

REM Sprawdź czy node_modules istnieje
if not exist "node_modules" (
    echo ⚠️  Brak node_modules - instaluję zależności...
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo ❌ BŁĄD: Instalacja zależności nie powiodła się!
        echo.
        pause
        exit /b 1
    )
    echo.
    echo ✅ Zależności zainstalowane
) else (
    echo ✅ Zależności już zainstalowane
)
echo.

echo [3/3] Uruchamianie serwera deweloperskiego...
echo.
echo ┌──────────────────────────────────────────────────────────────────────────────┐
echo │  🌐 Strona będzie dostępna pod adresem:                                     │
echo │                                                                              │
echo │     http://localhost:3001                                                    │
echo │                                                                              │
echo │  📝 Aby zatrzymać serwer, naciśnij Ctrl+C                                   │
echo └──────────────────────────────────────────────────────────────────────────────┘
echo.
echo Uruchamiam...
echo.

REM Uruchom serwer deweloperski
call npm run dev

REM Jeśli serwer się zatrzymał
echo.
echo.
echo ╔══════════════════════════════════════════════════════════════════════════════╗
echo ║                                                                              ║
echo ║                         ⚠️  SERWER ZATRZYMANY ⚠️                             ║
echo ║                                                                              ║
echo ╚══════════════════════════════════════════════════════════════════════════════╝
echo.
pause