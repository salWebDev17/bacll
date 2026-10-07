import "./App.css";

const subjects = [
  {
    title: "រូបវិទ្យា",
    english: "Physics",
    description:
      "មេរៀនរូបវិទ្យាថ្នាក់ទី១២ និងមេរៀនសម្រាប់ត្រៀមប្រឡងបាក់ឌុប។",
    icon: "⚛️",
    action: "ចូលរៀន",
    url: "https://salwebdev17.github.io/Physics-Bacll/",
    className: "physics",
  },
  {
    title: "ជីវវិទ្យា",
    english: "Biology",
    description:
      "សិក្សាជីវវិទ្យាតាមរយៈលំហាត់ និងសកម្មភាពអន្តរកម្ម។",
    icon: "🧬",
    action: "ចាប់ផ្តើម",
    url: "https://salwebdev17.github.io/Biology-Bacll/",
    className: "biology",
  },
  {
    title: "ភាសាអង់គ្លេស",
    english: "English",
    description:
      "វិញ្ញាសាអង់គ្លេសបាក់ឌុបពីឆ្នាំផ្សេងៗ និងលំហាត់បន្ថែម។",
    icon: "🇬🇧",
    action: "មើលវិញ្ញាសា",
    url: "https://salwebdev17.github.io/English-Bacll/",
    className: "english",
  },
  {
    title: "ត្រីកោណមាត្រ",
    english: "Trigonometry",
    description:
      "Quiz អន្តរកម្មសម្រាប់ហាត់រូបមន្ត អត្តសញ្ញាណ និងសមីការត្រីកោណមាត្រ។",
    icon: "📐",
    action: "ចាប់ផ្តើម Quiz",
    url: "https://trigmaster-1.base44.app",
    className: "math",
  },
];

function App() {
  const openSubject = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <div className="logoIcon">📚</div>
            <span>Study Hub</span>
          </div>

          <div className="badge">
            ថ្នាក់ទី១២ • Bac II
          </div>
        </nav>
      </header>

      {/* Main */}
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="heroLabel">
            <span>✨</span>
            <span>រៀនឆ្លាត • ត្រៀមប្រឡង</span>
          </div>

          <h1>
            មជ្ឈមណ្ឌលសិក្សា{" "}
            <span className="gradientText">
              ថ្នាក់ទី១២
            </span>
          </h1>

          <p>
            ប្រមូលផ្តុំមេរៀន លំហាត់ និងការប្រឡង
            នៅកន្លែងតែមួយ។ ជ្រើសរើសមុខវិជ្ជា
            ដើម្បីចាប់ផ្តើមសិក្សា។
          </p>
        </section>

        {/* Cards */}
        <section className="subjects">
          {subjects.map((subject) => (
            <article
              key={subject.title}
              className={`subjectCard ${subject.className}`}
              onClick={() => openSubject(subject.url)}
              role="link"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  openSubject(subject.url);
                }
              }}
            >
              <div>
                <div className="cardTop">
                  <div className="subjectIcon">
                    {subject.icon}
                  </div>

                  <div className="arrow">
                    ↗
                  </div>
                </div>

                <h2>{subject.title}</h2>

                <p>{subject.description}</p>
              </div>

              <div className="cardFooter">
                <span>{subject.action}</span>

                <span className="englishName">
                  {subject.english}
                </span>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2026 • Grade 12 Study Hub</p>
        <span>
          រៀនថ្ងៃនេះ ដើម្បីជោគជ័យថ្ងៃស្អែក 🎓
        </span>
      </footer>
    </div>
  );
}

export default App;
