export const metadata = {
  title: 'Regulamin - Consbridge Production',
  description: 'Regulamin korzystania ze strony internetowej Consbridge Production',
}

export default function TermsPage() {
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
              Regulamin
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300">
              Warunki korzystania ze strony internetowej
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              
              {/* Akceptacja warunków */}
              <div className="mb-12 bg-cyan-50 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg font-semibold text-slate-900 dark:text-white mb-0">
                  OSOBY KORZYSTAJĄCE Z NASZEJ STRONY INTERNETOWEJ W PEŁNI AKCEPTUJĄ NASTĘPUJĄCE WARUNKI:
                </p>
              </div>

              {/* Strona */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  Strona
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Niniejszy serwis internetowy (dalej – wraz z podstronami – jako: „Strona") został przygotowany na zlecenie spółki pod firmą <strong>CONSBRIDGE PRODUCTION SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</strong> z siedzibą w Jaworznie przy ul. Galmany 6A, 43-600 Jaworzno, wpisana do rejestru przedsiębiorców przez Sąd Rejonowy Katowice-Wschód w Katowicach, VIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS 0000998530, NIP: 6322032434, REGON: 523457269 (dalej jako: „Spółka").
                  </p>
                </div>
              </div>

              {/* Warunki korzystania ze Strony */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  Warunki korzystania ze Strony
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Korzystanie ze Strony nie wymaga spełnienia szczególnych warunków technicznych przez komputer lub inne urządzenie dostępowe, poza standardowymi elementami koniecznymi, takimi jak: dostęp do Internetu oraz standardowy system operacyjny wraz z przeglądarką internetową.
                  </p>
                </div>
              </div>

              {/* Treść i zawartość Strony */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  Treść i zawartość Strony
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Wszelkie informacje zawarte na Stronie mają charakter wyłącznie informacyjny i dostępne są nieodpłatnie. Zawartość Strony nie stanowi oferty w rozumieniu przepisów ustawy z dnia 23 kwietnia 1964 roku Kodeks cywilny. Informacji zawartych na Stronie nie można traktować jako konsultacje, jak również nie mogą być uznane jako jakakolwiek forma rekomendacji.
                  </p>
                  <p>
                    Jakiekolwiek komentarze, sugestie lub uwagi nawiązujące do informacji zawartych na Stronie, przekazane przez odwiedzającego nie będą traktowane przez Spółkę jako poufne, chyba że Spółka postanowi inaczej. Przekazanie ich powoduje, że Spółka ma prawo dysponować informacjami zawartymi w ww. komentarzach, sugestiach lub uwagach, w tym także Spółka nabywa nieodpłatne prawo do powielania, wykorzystywania, używania lub dystrybuowania takich informacji, bez żadnych ograniczeń.
                  </p>
                  <p>
                    Wszelkie pomysły, wynalazki, plany oraz technologie zawarte w ww. informacjach mogą zostać przez Spółkę wykorzystane bez ograniczeń, w dowolny sposób, w szczególności w produkcji, dystrybucji lub marketingu.
                  </p>
                  <p>
                    Na Stronie mogą być zawarte odnośniki do innych serwisów lub stron internetowych prowadzonych lub administrowanych przez podmioty trzecie. Spółka nie ponosi odpowiedzialności za zawartość lub dostępność materiałów znajdujących się na ww. stronach lub serwisach internetowych.
                  </p>
                </div>
              </div>

              {/* Prawa autorskie */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  Prawa autorskie
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Zawartość i budowa Strony, w tym także udostępnione za jej pośrednictwem pliki graficzne, pliki tekstowe oraz jej układ graficzny, chronione są prawami autorskimi i mogą ulec zmianie w dowolnym czasie, bez konieczności jakichkolwiek ogłoszeń w tym zakresie.
                  </p>
                  <p>
                    Kopiowanie danych lub informacji zawartych na Stronie, w tym wykorzystywanie w jakiejkolwiek formie umieszczonych na Stronie tekstów czy zdjęć, w tym także ich fragmentów, jest zabronione, chyba że co innego wynika z bezwzględnie obowiązujących przepisów prawa lub uprzedniej pisemnej zgody udzielonej przez Spółkę.
                  </p>
                </div>
              </div>

              {/* Odpowiedzialność */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  Odpowiedzialność
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Spółka dokłada należytej staranności, aby rzetelnie przedstawić informacje dotyczące prowadzonej działalności. Spółka stara się, aby na bieżąco uaktualniać informacje zawarte na Stronie, jednakże nie udziela żadnej gwarancji do treści zamieszczonych na Stronie i w związku z tym nie ponosi odpowiedzialności za następstwa korzystania ze Strony, ani za jej zawartość, w tym w szczególności Spółka nie ponosi odpowiedzialności za rzetelność, kompletność ani aktualność zamieszczonych informacji na Stronie.
                  </p>
                  <p>
                    W szczególności Spółka nie ponosi odpowiedzialności za jakiekolwiek szkody wynikające z dostępu do Strony lub w związku z korzystaniem ze Strony. O ile bezwzględnie obowiązujące przepisy prawa nie stanowią inaczej, Spółka nie ponosi odpowiedzialności za jakiekolwiek braki lub też niepoprawność zamieszczonych na Stronie informacji, w szczególności dotyczących rodzaju oferowanych usług lub produktów, a zaistniałych z przyczyn technicznych lub też niezależnych od Spółki.
                  </p>
                  <p>
                    Spółka nie ponosi również odpowiedzialności za działania osób trzecich, jak również za jakiekolwiek szkody powstałe w związku z pobieraniem bądź wykorzystywaniem materiałów znajdujących się na Stronie, w tym także za szkody zaistniałe wskutek bądź w związku z błędami systemu komputerowego, wirusami lub komunikacją za pośrednictwem poczty elektronicznej.
                  </p>
                </div>
              </div>

              {/* Korespondencja elektroniczna */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-cyan-500">
                  Korespondencja elektroniczna
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Treść wykorzystywanej przez członków zespołu Spółki korespondencji elektronicznej (włączając wszelkie załączniki) jest poufna i prawnie chroniona oraz przeznaczona wyłącznie dla podmiotu, do którego jest zaadresowana. Jakiekolwiek nieuprawnione rozpowszechnianie, kopiowanie, rozprowadzanie ww. wiadomości lub ich części jest zabronione.
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