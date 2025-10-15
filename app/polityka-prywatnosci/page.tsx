export const metadata = {
  title: 'Polityka Prywatności - Consbridge Production',
  description: 'Polityka prywatności i ochrony danych osobowych Consbridge Production',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-white py-20 border-b border-slate-300 dark:border-slate-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, cyan 2px, cyan 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, cyan 2px, cyan 4px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              Polityka Prywatności
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300">
              Ochrona Twoich danych osobowych jest dla nas priorytetem
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              
              {/* Administrator danych osobowych */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  1. Administrator danych osobowych
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Administratorem Twoich danych osobowych przetwarzanych zgodnie z niniejszą Polityką Prywatności jest <strong>CONSBRIDGE PRODUCTION SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</strong> z siedzibą w Jaworznie przy ul. Galmany 6A, 43-600 Jaworzno, wpisana do rejestru przedsiębiorców przez Sąd Rejonowy Katowice-Wschód w Katowicach, VIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS 0000998530, NIP: 6322032434, REGON: 523457269 (dalej: „Administrator" lub „CP").
                  </p>
                </div>
              </div>

              {/* Okoliczności przetwarzania */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  2. Okoliczności przetwarzania danych osobowych
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>Twoje dane osobowe są przetwarzane w następujących sytuacjach:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>odwiedzasz stronę www.consbridgeproduction.pl lub którąkolwiek z jej podstron (dalej ww. strona oraz jej podstrony zwane są – łącznie lub osobno – „Stroną");</li>
                    <li>kontaktujesz się z CP, w tym m.in. osobiście, telefonicznie, za pomocą poczty elektronicznej lub poczty tradycyjnej albo też za pomocą formularza kontaktowego na Stronie.</li>
                  </ul>
                </div>
              </div>

              {/* Kontakt ws. danych osobowych */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  3. Kontakt ws. danych osobowych
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>W sprawach dotyczących Twoich danych osobowych można skontaktować się pod adresem:</p>
                  <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg border border-slate-300 dark:border-slate-700">
                    <p className="mb-2"><strong>Adres:</strong> ul. Zabłocie 23/24, 30-701 Kraków</p>
                    <p><strong>E-mail:</strong> <a href="mailto:OfficeProduction@consbridgeproduction.pl" className="text-cyan-600 dark:text-cyan-400 hover:underline">OfficeProduction@consbridgeproduction.pl</a></p>
                  </div>
                </div>
              </div>

              {/* Cel i podstawy prawne */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  4. Cel i podstawy prawne przetwarzania
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>Uzyskane w sposób opisany w niniejszej Polityce Prywatności dane osobowe mogą być przetwarzane:</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>w oparciu o nasz prawnie uzasadniony interes jako administratora danych osobowych – w celu odpowiedzi na wiadomości kierowane do nas na nasze dane kontaktowe za pomocą poczty tradycyjnej, poczty elektronicznej lub formularza kontaktowego;</li>
                    <li>w oparciu o nasz prawnie uzasadniony interes w przypadku, gdy już nawiązaliśmy relację biznesową, zaś w przypadku, gdy taką relację zamierzamy nawiązać w oparciu o Twoją zgodę (tj. od czasu wyrażenia zgody przez Ciebie, przez czas nie dłuższy niż do momentu wycofania tej zgody) – w celu realizowania marketingu bezpośredniego produktów lub usług;</li>
                    <li>w związku z nałożonym na nas jako na administratora danych obowiązkiem prawidłowego zabezpieczenia danych i w oparciu o nasz prawnie uzasadniony interes jako administratora danych osobowych – w celu archiwizacji danych i wykonywania kopii zapasowych.</li>
                  </ul>
                </div>
              </div>

              {/* Dane przetwarzane w celu kontaktu */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  5. Dane przetwarzane w celu kontaktu – zakres przetwarzania
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    W przypadku kontaktu z nami poprzez formularz kontaktowy udostępniony na Stronie, telefonicznie, pocztą tradycyjną lub elektroniczną, jak również w sytuacjach, kiedy mamy prawo się z Tobą kontaktować (m.in. w celach marketingowych lub jesteś naszym kontrahentem), wówczas będziemy przetwarzać Twoje dane osobowe w takim zakresie, w jakim nam je podasz lub są one niezbędne do odpowiedzi na Twoją wiadomość (w tym dane kontaktowe i identyfikacyjne, a w przypadku skorzystania z formularza kontaktowego udostępnionego na Stronie – także adres IP), lub dane które posiadamy ze względu na łączącą nas relację albo które zebraliśmy z powszechnie dostępnych źródeł.
                  </p>
                  <p>
                    Przetwarzamy te dane, albowiem są one niezbędne do realizacji obowiązków wynikających z przepisów prawa lub do realizacji prawnie uzasadnionych interesów Administratora, to jest w celu odpowiedzi na Twoje wiadomości i dalszy kontakt z Tobą, realizowania marketingu bezpośredniego produktów i usług naszych lub podmiotów trzecich lub w celu archiwizacji danych i wykonywania kopii zapasowych.
                  </p>
                </div>
              </div>

              {/* Dane przetwarzane w związku z korzystaniem ze Strony */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  6. Dane przetwarzane w związku z korzystaniem z naszej Strony – zakres przetwarzania
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Gdy korzystasz ze Strony, przetwarzamy takie dane jak: adres IP, sposób korzystania ze Strony, rodzaj i wersja urządzenia końcowego, rodzaj przeglądarki, dokonany wybór w zakresie cookies. W większości przypadków nie jest możliwe zidentyfikowanie Ciebie jako użytkownika, więc takie dane są anonimowe. Jednakże w przypadku, gdy w połączeniu z innymi danymi jest możliwe połączenie tych danych z Tobą (np. gdy posiadamy dane z innego źródła, m.in. jeśli skontaktujesz się z nami poprzez formularz kontaktowy udostępniony na Stronie), wówczas mogą one stać się dla nas Twoimi danymi osobowymi.
                  </p>
                  <p>
                    Dane te przetwarzamy z uwagi na fakt, że są one niezbędne do realizacji celów wynikających z prawnie uzasadnionych interesów Administratora, tj. w szczególności: analizy zachowania na Stronie dla poprawy jej funkcjonowania oraz ochrony przed nadużyciami, dostosowania sposobu, w jaki Strona jest wyświetlana i jej ewentualnej personalizacji, zapisania danych z formularzy celem zachowania sesji i ułatwienia korzystania ze Strony.
                  </p>
                </div>
              </div>

              {/* Okres przetwarzania danych */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  7. Okres przetwarzania danych
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>Twoje dane osobowe będą przetwarzane w następujących okresach:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>do kontaktu z Tobą – od dnia ich zebrania do czasu zakończenia prowadzenia korespondencji w sprawie, z związku z którą nawiązałeś kontakt z nami;</li>
                    <li>do celów wykonania obowiązków nałożonych przepisami prawa – przez czas nie dłuższy niż niezbędny dla wykazania, że obowiązki te były realizowane prawidłowo;</li>
                    <li>do celów dochodzenia lub obrony przed roszczeniami – przez czas nie dłuższy niż okres przedawnienia roszczeń;</li>
                    <li>do celów marketingowych – przez czas naszej relacji lub do czasu wycofania zgody, jeżeli została nam ona udzielona;</li>
                    <li>do celów poprawy funkcjonowania lub bezpieczeństwa Strony – przez czas, przez jaki dane te są niezbędne do realizacji tego celu;</li>
                    <li>do celu archiwizacji i wykonywania kopii zapasowych – przez okres ustalony zgodnie z polityką wykonywania kopii zapasowych i archiwizacji.</li>
                  </ul>
                  <p className="mt-4">
                    Jednakże danych tych Administrator nie będzie przetwarzać po złożeniu przez Ciebie skutecznego sprzeciwu wobec ich przetwarzania przez Administratora – w przypadku, gdy podstawą przetwarzania Twoich danych jest prawnie uzasadniony interes Administratora lub po wycofaniu zgody przez Ciebie – w przypadku, gdy zgoda ta była podstawą przetwarzania Twoich danych.
                  </p>
                </div>
              </div>

              {/* Odbiorcy danych */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  8. Odbiorcy danych
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>Twoje dane osobowe mogą zostać ujawnione:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>podmiotom powiązanym z Administratorem, w szczególności partnerom Administratora;</li>
                    <li>odbiorcom, na rzecz których ujawnienie wymagane jest na mocy odpowiednich przepisów lub postanowienia sądu lub innego organu władzy;</li>
                    <li>osobom trzecim świadczącym usługi na rzecz Administratora, a które są potrzebne dla realizacji celów, w związku z którymi przetwarzamy Twoje dane (np. usług z zakresu IT, rekrutacji, księgowości, komunikacji elektronicznej, hostingu danych, marketingu);</li>
                    <li>innym odbiorcom, jeżeli wyrazisz na nich swoją zgodę lub gdy przekazanie im danych jest niezbędne, by chronić Twoje żywotne interesy lub żywotne interesy innych podmiotów.</li>
                  </ul>
                  <p className="mt-4">
                    Dołożymy staranności w doborze podmiotów, którym przekazywać będziemy Twoje dane i w przypadku takich podmiotów będziemy wymagać, by chronili Twoje dane za pomocą odpowiednich środków technicznych i organizacyjnych.
                  </p>
                </div>
              </div>

              {/* Przekazywanie danych do państw trzecich */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  9. Przekazywanie danych osobowych do państw trzecich
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Jeśli Twoje dane osobowe będą przekazywane poza Europejski Obszar Gospodarczy (EOG) do państw, które nie zapewniają takiego samego lub odpowiedniego poziomu ochrony danych osobowych, jaki wynika z przepisów obowiązujących na terenie Polski, dołożymy staranności, aby odbywało się to w oparciu o ważną podstawę prawną oraz z wykorzystaniem prawem wymaganych zabezpieczeń.
                  </p>
                </div>
              </div>

              {/* Uprawnienia */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  10. Uprawnienia
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    W zakresie każdego z niżej wskazanych praw można skontaktować się z Administratorem w sposób określony w punkcie 3 powyżej niniejszej Polityki Prywatności. Przysługują Ci następujące prawa:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-700">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2">Prawo do uzyskania informacji, dostępu do danych oraz do otrzymania kopii danych</h3>
                      <p className="text-sm">
                        Masz prawo żądać podania informacji o Twoich danych osobowych, które przechowujemy lub do których mamy dostęp; możesz żądać przedstawienia Ci Twoich danych osobowych w jednej kopii bezpłatnie; za przesłanie dodatkowych kopii Administrator ma prawo żądać opłaty odpowiadającej kosztom obsługi takiego żądania.
                      </p>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-700">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2">Prawo do sprostowania danych osobowych</h3>
                      <p className="text-sm">
                        W celu utrzymywania aktualności, poprawności i kompletności Twoich danych osobowych, prosimy o powiadomienie nas o konieczności wprowadzenia zmiany Twoich danych osobowych.
                      </p>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-700">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2">Prawo do wycofania zgody</h3>
                      <p className="text-sm">
                        Jeśli Twoje dane osobowe przetwarzamy w oparciu o udzieloną przez Ciebie zgodę, masz prawo tę zgodę wycofać, jednakże wycofanie zgody nie ma wpływu na zgodność z przepisami prawa przetwarzania tych danych przed wycofaniem przez Ciebie zgody.
                      </p>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-700">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2">Prawo do wniesienia sprzeciwu wobec przetwarzania</h3>
                      <p className="text-sm">
                        W zakresie określonym przepisami prawa masz prawo sprzeciwić się dalszemu przetwarzaniu Twoich danych osobowych przez Administratora, w przypadku, gdy podstawą przetwarzania Twoich danych osobowych jest prawnie uzasadniony interes Administratora.
                      </p>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-700">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2">Prawo do przenoszenia danych</h3>
                      <p className="text-sm">
                        W przypadku, gdy przetwarzanie danych osobowych odbywa się na podstawie udzielonej zgody, masz prawo żądać przeniesienia swoich danych osobowych w ustrukturyzowanym i powszechnie używanym formacie, który się nadaje do odczytu maszynowego, jak również masz prawo do żądania przesłania Twoich danych innemu administratorowi.
                      </p>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-700">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2">Prawo do usunięcia danych i do ograniczenia przetwarzania</h3>
                      <p className="text-sm">
                        W zakresie określonym przepisami prawa masz prawo żądać usunięcia Twoich danych osobowych, jak również ograniczenia dalszego przetwarzania tych danych osobowych. Mogą natomiast wystąpić okoliczności, które sprawią, że Administrator nadal będzie uprawniony do przetwarzania Twoich danych osobowych.
                      </p>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-700">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2">Prawo do wniesienia skargi do organu nadzorczego</h3>
                      <p className="text-sm">
                        Masz prawo wnieść skargę do organu nadzorczego, którym co do zasady jest Prezes Urzędu Ochrony Danych Osobowych.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Polityka cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  11. Polityka stosowania plików cookies i innych podobnych technologii
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Strona wykorzystuje pliki cookies, tj. niewielkie pliki tekstowe obsługiwane przez Stronę i zapisywane na Twoim urządzeniu. Strona wykorzystuje także inne podobne technologie (m.in. narzędzia Google Inc., np. Google Analytics).
                  </p>
                  <p>
                    Narzędzia te są używane m.in. w zakresie niezbędnym do działania Strony (głównie po to, by dostosować sposób wyświetlania Strony do oprogramowania, urządzenia końcowego lub wybranych przez użytkownika preferencji, w tym wybranych przez użytkownika ustawień), a także w innym zakresie, np. do monitorowania i analizowania sposobu korzystania ze Strony przez użytkowników, w tym poprawy funkcjonowania Strony.
                  </p>
                  <p>
                    Pliki cookies i inne stosowane narzędzia nie są używane w celu przetwarzania lub przechowywania danych osobowych, nie służą do bezpośredniej identyfikacji użytkownika, jak również nie zmieniają ustawień wykorzystywanej przez użytkownika przeglądarki, w tym nie zmieniają konfiguracji urządzenia użytkownika. W wyjątkowych okolicznościach, gdy dane uzyskane za pomocą plików cookies mogą być uznane za dane osobowe użytkownika, są opisane powyżej w niniejszej Polityce Prywatności.
                  </p>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3">Wykorzystywane rodzaje plików cookies:</h3>
                  <div className="space-y-3">
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-700">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">1. Funkcjonalne pliki cookies</h4>
                      <p className="text-sm">Umożliwiają zapamiętanie ustawień użytkowników i ich personalizację (np. w zakresie wybranego języka lub akceptacji oświadczeń w zakresie cookies).</p>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-700">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">2. Analityczne pliki cookies</h4>
                      <p className="text-sm">Badają zachowanie użytkownika na Stronie.</p>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-700">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">3. Pliki cookies podmiotów (stron) trzecich</h4>
                      <p className="text-sm">Mogą być zapamiętywane w urządzeniach końcowych także pliki cookies innych podmiotów, np. Google Inc.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wyłączanie plików cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  12. Wyłączanie plików cookies
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    W ustawieniach przeglądarki można również wskazać wymóg każdorazowego samodzielnego akceptowania plików cookies tak, aby przeglądarka za każdym razem – przed udzieleniem dostępu dla pliku cookies – pytała o zgodę na udzielenie takiego dostępu.
                  </p>
                  <p>
                    Wchodząc na Stronę użytkownik ma prawo wyrazić zgodę na wykorzystywanie plików cookies do celów innych aniżeli niezbędne do działania Strony. W trakcie korzystania można wyłączyć pliki cookies w wykorzystywanej przeglądarce internetowej, korzystając z następujących opcji:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.microsoft.com/pl-pl/windows/usuwanie-plik%C3%B3w-cookie-i-zarz%C4%85dzanie-nimi-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">Windows Internet Explorer</a></li>
                    <li><a href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">Firefox</a></li>
                    <li><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">Apple Safari</a></li>
                    <li><a href="https://help.opera.com/pl/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">Opera</a></li>
                  </ul>
                  <p className="mt-4">
                    Użytkownik ma możliwość wyłączenia przekazywania swoich danych do celów analitycznych i statystycznych z wykorzystaniem Google Analytics (poprzez zainstalowanie rozszerzenia do przeglądarki internetowej zgodnie z instrukcją podaną pod adresem{' '}
                    <a href="https://support.google.com/analytics/answer/181881?hl=pl" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      https://support.google.com/analytics/answer/181881?hl=pl
                    </a>
                    ).
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}