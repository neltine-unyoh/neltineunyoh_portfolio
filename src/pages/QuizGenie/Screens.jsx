// Concept screens for QuizGenie, designed for this case study.
// The original app's screens weren't available, so these recreate the flow.

function Sparkle({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`qs-sparkle ${className}`}>
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
    </svg>
  );
}

function StatusBar() {
  return (
    <div className="qs-status" aria-hidden="true">
      <span>9:41</span>
      <span className="qs-status-icons">
        <i></i>
        <i></i>
      </span>
    </div>
  );
}

function UploadScreen() {
  return (
    <div className="qs-screen">
      <StatusBar />
      <p className="qs-hello">
        Hi, Ada <Sparkle />
      </p>
      <p className="qs-sub">What are we studying today?</p>
      <div className="qs-drop">
        <span className="qs-drop-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 16V4M7 9l5-5 5 5M5 20h14" />
          </svg>
        </span>
        <strong>Upload your notes</strong>
        <small>PDF or DOCX, up to 5 MB</small>
      </div>
      <p className="qs-label">Recent</p>
      <ul className="qs-docs">
        <li>
          <span className="qs-doc-icon is-pdf">PDF</span>
          <div>
            <strong>Biology notes</strong>
            <small>20 questions · 85%</small>
          </div>
        </li>
        <li>
          <span className="qs-doc-icon is-doc">DOC</span>
          <div>
            <strong>History, chapter 3</strong>
            <small>10 questions · 70%</small>
          </div>
        </li>
      </ul>
    </div>
  );
}

function SettingsScreen() {
  return (
    <div className="qs-screen">
      <StatusBar />
      <p className="qs-title">Set up your quiz</p>
      <p className="qs-file">Biology notes.pdf</p>
      <p className="qs-label">Question type</p>
      <div className="qs-seg">
        <span className="is-on">Multiple choice</span>
        <span>Open-ended</span>
      </div>
      <p className="qs-label">Difficulty</p>
      <div className="qs-chips">
        <span>Easy</span>
        <span className="is-on">Intermediate</span>
        <span>Hard</span>
      </div>
      <p className="qs-label">
        Questions <b>20</b>
      </p>
      <div className="qs-slider">
        <i style={{ width: "43%" }}></i>
        <b style={{ left: "43%" }}></b>
      </div>
      <div className="qs-toggle-row">
        <span>Timer, 30s per question</span>
        <span className="qs-toggle is-on">
          <i></i>
        </span>
      </div>
      <span className="qs-btn">
        <Sparkle /> Generate questions
      </span>
    </div>
  );
}

function GeneratingScreen() {
  return (
    <div className="qs-screen qs-center">
      <StatusBar />
      <div className="qs-genie">
        <Sparkle className="s1" />
        <Sparkle className="s2" />
        <Sparkle className="s3" />
        <span className="qs-genie-orb"></span>
      </div>
      <p className="qs-title">Reading your notes…</p>
      <p className="qs-sub">Writing 20 intermediate questions from Biology notes.pdf</p>
      <div className="qs-progress">
        <i></i>
      </div>
    </div>
  );
}

function QuizScreen() {
  const options = ["Mitochondria", "Nucleus", "Ribosome", "Golgi body"];
  return (
    <div className="qs-screen">
      <StatusBar />
      <div className="qs-quiz-top">
        <span>Question 3 of 20</span>
        <span className="qs-timer">
          <svg viewBox="0 0 36 36" aria-hidden="true">
            <circle cx="18" cy="18" r="15" className="qs-timer-track" />
            <circle cx="18" cy="18" r="15" className="qs-timer-fill" />
          </svg>
          <b>24</b>
        </span>
      </div>
      <div className="qs-bar">
        <i style={{ width: "15%" }}></i>
      </div>
      <p className="qs-question">Which part of the cell produces most of its energy?</p>
      <ul className="qs-options">
        {options.map((option, index) => (
          <li key={option} className={index === 0 ? "is-picked" : ""}>
            <span>{String.fromCharCode(65 + index)}</span>
            {option}
          </li>
        ))}
      </ul>
      <span className="qs-btn">Next question</span>
    </div>
  );
}

function ResultsScreen() {
  return (
    <div className="qs-screen qs-center">
      <StatusBar />
      <p className="qs-confetti" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </p>
      <div className="qs-score">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="50" className="qs-score-track" />
          <circle cx="60" cy="60" r="50" className="qs-score-fill" />
        </svg>
        <span>
          <b>17/20</b>
          <small>85%</small>
        </span>
      </div>
      <p className="qs-title">Very good!</p>
      <p className="qs-sub">You're strong on cell structure. Review respiration before your exam.</p>
      <span className="qs-btn">Review answers</span>
      <span className="qs-btn is-ghost">Practise again</span>
    </div>
  );
}

function HistoryScreen() {
  const items = [
    { name: "Biology notes", meta: "3 attempts", score: 85 },
    { name: "History, chapter 3", meta: "1 attempt", score: 70 },
    { name: "Statistics handout", meta: "2 attempts", score: 55 },
  ];
  return (
    <div className="qs-screen">
      <StatusBar />
      <p className="qs-title">Your history</p>
      <p className="qs-sub">Pick up where you left off.</p>
      <ul className="qs-history">
        {items.map((item) => (
          <li key={item.name}>
            <div>
              <strong>{item.name}</strong>
              <small>{item.meta}</small>
            </div>
            <span className={`qs-pill ${item.score < 60 ? "is-low" : ""}`}>{item.score}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const screens = {
  upload: UploadScreen,
  settings: SettingsScreen,
  generating: GeneratingScreen,
  quiz: QuizScreen,
  results: ResultsScreen,
  history: HistoryScreen,
};

export function Phone({ screen, label, className = "" }) {
  const Screen = screens[screen];
  return (
    <div className={`qs-phone ${className}`} role="img" aria-label={label}>
      <span className="qs-notch" aria-hidden="true"></span>
      <Screen />
    </div>
  );
}
