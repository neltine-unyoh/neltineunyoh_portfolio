import "./ProductVisual.css";

// Illustrations of each product. When you have real screenshots,
// pass `image` (a path in /public) and it replaces the illustration.

function KoraVisual() {
  const modules = ["Sales", "Inventory", "Invoices", "Payments", "POS", "Staff", "Branches"];
  return (
    <div className="pv-window pv-kora">
      <div className="pv-window-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="pv-kora-body">
        <aside className="pv-kora-side">
          <strong>Kora</strong>
          {modules.map((item, index) => (
            <span key={item} className={index === 0 ? "is-active" : ""}>
              {item}
            </span>
          ))}
        </aside>
        <div className="pv-kora-main">
          <div className="pv-kora-tiles">
            <div>
              <small>Today's sales</small>
              <i style={{ width: "62%" }}></i>
            </div>
            <div>
              <small>Low stock</small>
              <i style={{ width: "38%" }}></i>
            </div>
            <div>
              <small>Unpaid invoices</small>
              <i style={{ width: "50%" }}></i>
            </div>
          </div>
          <div className="pv-kora-chart">
            {[42, 58, 50, 72, 64, 86, 70, 92].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }}></span>
            ))}
          </div>
          <div className="pv-kora-rows">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizVisual() {
  const options = ["Mitochondria", "Nucleus", "Ribosome", "Cell wall"];
  return (
    <div className="pv-quiz">
      <div className="pv-quiz-top">
        <span>Question 3 of 10</span>
        <span className="pv-quiz-progress">
          <i></i>
        </span>
      </div>
      <p className="pv-quiz-question">Which part of the cell produces most of its energy?</p>
      <div className="pv-quiz-options">
        {options.map((option, index) => (
          <span key={option} className={index === 0 ? "is-correct" : ""}>
            {option}
          </span>
        ))}
      </div>
      <p className="pv-quiz-hint">Generated from your biology notes</p>
    </div>
  );
}

function AgriVisual() {
  return (
    <div className="pv-agri">
      <svg className="pv-agri-lines" viewBox="0 0 400 300" aria-hidden="true" preserveAspectRatio="none">
        <path d="M80 60 L200 150 L320 60 M80 240 L200 150 L320 240" />
      </svg>
      <span className="pv-agri-node n1">Farmers</span>
      <span className="pv-agri-node n2">Financiers</span>
      <span className="pv-agri-node n3">Buyers</span>
      <span className="pv-agri-node n4">Verifiers</span>
      <span className="pv-agri-lock">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
        Funds locked
        <br />
        until milestones
      </span>
    </div>
  );
}

function WhatsAppVisual() {
  return (
    <div className="pv-chat">
      <p className="pv-chat-head">
        <strong>Family</strong>
        <span>Mum, Dad, Ruth, you and 4 others</span>
      </p>
      <p className="pv-bubble in">Good morning family. Have a blessed day</p>
      <p className="pv-bubble in pv-voice">
        <span className="pv-voice-play" aria-hidden="true"></span>
        <span className="pv-voice-wave" aria-hidden="true"></span>
        <span>0:24</span>
      </p>
      <p className="pv-bubble out">Morning! Calling you after work, Mum</p>
      <p className="pv-chat-note">Nobody had to send a notification to bring them back.</p>
    </div>
  );
}

function MomoVisual() {
  return (
    <div className="pv-phone">
      <div className="pv-phone-screen">
        <p className="pv-ussd-code">*126#</p>
        <p>1. Transfer money</p>
        <p>2. Pay a merchant</p>
        <p>3. Withdraw cash</p>
        <p>4. My account</p>
        <p className="pv-ussd-status">Transaction pending. Please wait.</p>
      </div>
    </div>
  );
}

const visuals = {
  kora: KoraVisual,
  quizgenie: QuizVisual,
  agrilock: AgriVisual,
  whatsapp: WhatsAppVisual,
  momo: MomoVisual,
};

function ProductVisual({ type, tint, image, alt, size = "default" }) {
  const Visual = visuals[type];

  return (
    <div className={`pv pv-${size}`} style={{ background: tint }}>
      {image ? (
        <img src={image} alt={alt} className="pv-image" />
      ) : (
        <div role="img" aria-label={alt} className="pv-stage">
          {Visual && <Visual />}
        </div>
      )}
    </div>
  );
}

export default ProductVisual;
