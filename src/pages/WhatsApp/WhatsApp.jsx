import { Link } from "react-router-dom";
import { teardowns } from "../../data/site";
import { ArrowLeft, ArrowRight, Check, Cross } from "../../components/Icons/Icons";
import { CaseLogo, Typewriter, useScrollReveal } from "../../components/CaseKit/CaseKit";
import "../../styles/detail.css";
import "../Kora/Kora.css";
import "../Teardown/Teardown.css";
import "../AgriLock/AgriLock.css";
import "./WhatsApp.css";

// ---------------------------------------------------------------
// WhatsApp teardown, from "Reverse Engineering WhatsApp" (your
// article) and your product-system analysis.
// ---------------------------------------------------------------

const wa = teardowns.find((item) => item.slug === "whatsapp");

const firstQuestions = [
  "Why does WhatsApp open to Chats instead of the Camera?",
  "Why are message edits limited to a short window?",
  "Why were Communities introduced when Groups already existed?",
  "Why do some features appear overnight, while obvious ones never arrive?",
];

const before = [
  { name: "SMS", good: "Worked almost everywhere.", catch: "Every message cost money, especially abroad. Groups and media were clunky." },
  { name: "BBM", good: "Instant messages and delivery receipts.", catch: "Both people needed to own a BlackBerry." },
  { name: "Skype", good: "Affordable internet calls.", catch: "Built for desktops and scheduled calls, not quick everyday messages." },
  { name: "Early Messenger", good: "Connected millions of people.", catch: "Only if they had a Facebook account." },
];

const rules = [
  { title: "Keep it simple", text: "No complicated menus, no dashboard, no tutorial before your first message. Every new feature has to earn its place." },
  { title: "Privacy is the foundation", text: "End-to-end encryption, disappearing messages, chat locks, encrypted backups. Private by default, whoever you're talking to." },
  { title: "Reliability beats novelty", text: "People don't open WhatsApp to be surprised. They open it expecting it to work, especially in an emergency." },
  { title: "Reduce thinking", text: "The fewer decisions users have to make, the easier it is to communicate. It simply feels effortless." },
  { title: "Trust is built in small moments", text: "Double check marks, typing indicators, timestamps, delivery. Tiny details that add up to trust." },
];

const lives = [
  { who: "Students", text: "Class groups share deadlines, notes and last-minute exam questions. WhatsApp keeps them connected to their education." },
  { who: "Families", text: "Did you arrive safely? Birthday wishes, photos, voice notes for grandparents who'd rather speak than type." },
  { who: "Small businesses", text: "Prices, orders, locations, payment confirmations. For many entrepreneurs, the first point of contact is a chat, not a website." },
  { who: "Professionals", text: "A changed meeting time or an urgent client reply, without a long email thread." },
  { who: "Communities", text: "Schools, churches, neighbourhood associations and sports teams organized around a shared purpose." },
  { who: "People far from home", text: "A parent abroad watching a child's birthday on video. Distance hasn't disappeared, but it feels smaller." },
];

// Nir Eyal's Hook model, in WhatsApp's terms
const hook = [
  { stage: "Trigger", text: "It almost always comes from another person: a message, an active family group, a customer's question." },
  { stage: "Action", text: "Chats are right there and replying takes seconds. Every extra step would break the habit." },
  { stage: "Variable reward", text: "A laugh, big news, your manager, someone you love. You don't know what's there, but it probably matters." },
  { stage: "Investment", text: "Groups, years of history, photos and documents. Leaving means walking away from relationships, not an app." },
];

const decisions = [
  {
    title: "Why does WhatsApp always open to Chats?",
    text: "Instagram opens to content, TikTok to a video, LinkedIn to a feed. WhatsApp opens to your conversations, because conversations are the product. Communities, Channels, AI and business tools never get to compete with that.",
    tradeoff: "Newer features will always feel less discoverable.",
  },
  {
    title: "Why phone numbers instead of usernames?",
    text: "Possibly its most underrated decision. Verify your number and your network already exists: no friend requests, no usernames, no searching. WhatsApp borrowed a social graph that already existed in real life.",
    tradeoff: "Less flexibility, privacy concerns, and changing numbers is disruptive.",
  },
  {
    title: "Why did voice notes change how we communicate?",
    text: "Some messages are too long to type, and a call can feel intrusive. Voice notes sit in between: asynchronous like text, expressive like a call. When long recordings became hard to consume, the team added playback speed and transcripts instead of replacing them.",
    tradeoff: "Richer than text, but much harder to skim.",
  },
  {
    title: "When Groups stopped being enough",
    text: "Schools, churches, businesses and neighbourhoods turned Groups into infrastructure. Communities weren't built because Groups failed, but because usage outgrew them. Let users shape the product, then build where the need is obvious.",
    tradeoff: "Better organization brings complexity, the enemy of simplicity.",
  },
  {
    title: "Why has WhatsApp stayed so simple?",
    text: "Disappearing messages, Channels, Communities, AI and business tools arrived, yet the app rarely feels overwhelming. New ideas get tucked into existing experiences instead of demanding new ones.",
    tradeoff: "Moving slowly protects the experience but makes innovation less visible.",
  },
  {
    title: "Why a separate WhatsApp Business app?",
    text: "Catalogues, automated replies, labels and analytics could have gone into the main app. Instead, consumers and businesses got different products for different jobs, so neither has to carry the other's complexity.",
    tradeoff: "Clearer experiences, but split development and two apps to understand.",
  },
  {
    title: "Can WhatsApp add AI without losing what makes it special?",
    text: "The one decision that still feels unfinished. Too much AI and conversations stop feeling personal; too little and the product falls behind. So far, AI sits inside conversations rather than redesigning the product around it.",
    tradeoff: "Every AI capability adds power, and a risk of complexity.",
  },
];

const pattern = [
  "Open Chats first",
  "Phone numbers, not usernames",
  "Speak instead of type",
  "Grow Groups instead of replacing them",
  "Keep the interface simple",
  "Separate business from personal",
  "Introduce AI carefully",
];

// Opportunity solution tree for the ideas I'd bring to the team
const tree = {
  outcome: "Make everyday moments more forgiving, without adding complexity",
  branches: [
    {
      opportunity: "A typo in a Status means deleting and re-posting it",
      solution: "Edit the caption only, within about 15 minutes",
      pick: true,
    },
    {
      opportunity: "Long voice notes are hard to keep up with when you're busy",
      solution: "An optional, privacy-respecting AI summary",
    },
    {
      opportunity: "Status photos get compressed; people use third-party apps to avoid it",
      solution: "An HD option for Status, like chats already have",
    },
  ],
};

const moreIdeas = [
  {
    title: "Make Status ordering predictable",
    text: "I've seen older unseen Statuses appear above newer ones. If users expect chronological order, breaking it should bring a clear benefit. Otherwise, predictability wins.",
  },
  {
    title: "Separate read receipts from Status views",
    text: "Turning off read receipts also hides who viewed your Status. Reading a private message and viewing a public Status are different privacy decisions.",
  },
  {
    title: "Make “Delete for everyone” more discreet",
    text: "“This message was deleted” can create more curiosity than clarity. If a message is deleted before anyone has seen it, it could simply disappear.",
  },
  {
    title: "Rethink recovery for trusted accounts",
    text: "When I lost my SIM, recovery still depended on my number. Long-standing accounts could add trust signals like verified email, device history and 2FA, without weakening security.",
  },
];

const keep = ["I wouldn't redesign Chats.", "I wouldn't turn WhatsApp into another social network.", "I wouldn't chase every trend."];

const questions = [
  { icon: "grid", title: "More utility around conversations", text: "How can conversation become a starting point for useful actions without making the product feel overloaded?" },
  { icon: "case", title: "Business communication", text: "How can businesses take part in conversations while keeping the simplicity users expect?" },
  { icon: "spark", title: "AI as a quiet assistant", text: "How do we make AI feel like a helpful assistant rather than another feature competing for attention?" },
];

const inputs = [
  { name: "Activation", text: "How quickly does a new user reach a meaningful conversation?" },
  { name: "Conversation frequency", text: "How often do users come back to existing conversations?" },
  { name: "Retention", text: "Which behaviours go with sustained, long-term use?" },
  { name: "Feature adoption", text: "Which new capabilities create repeat value, not one-time curiosity?" },
];

const lessons = [
  { title: "Great products don't try to do everything", text: "Saying yes is easy. Protecting the core while the product grows is much harder." },
  { title: "Every feature is really a decision", text: "Why was it built? What problem did it solve? What alternatives were considered?" },
  { title: "Small frictions deserve big attention", text: "Product excellence is often removing the tiny frustrations users have quietly accepted." },
  { title: "User behaviour is the best source of ideas", text: "Groups became Communities. Voice notes got speed controls. The product adapted to what people already did." },
  { title: "Simplicity is harder than complexity", text: "Simplicity isn't the absence of features. It's the result of careful decisions." },
  { title: "The best PMs stay curious", text: "Product management isn't about having all the answers. It's about asking better questions." },
];

const iconPaths = {
  chat: "M4 5h16v11H8l-4 4z",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z",
  lock: "M6 11h12v10H6zM8 11V8a4 4 0 0 1 8 0v3",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  case: "M4 8h16v11H4zM9 8V5h6v3M4 13h16",
  spark: "M12 3l1.8 5.6L19.5 10l-5.7 1.4L12 17l-1.8-5.6L4.5 10l5.7-1.4z",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z",
  phone: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2",
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="kora-svg">
      <path d={iconPaths[name]} />
    </svg>
  );
}

// A generic chat app illustration (used if no screenshot is set)
function ChatPhone() {
  const chats = [
    { name: "Family", text: "Mum: Voice message (0:24)", time: "09:12", unread: 3, ring: true },
    { name: "Ruth", text: "See you at 6!", time: "08:47", unread: 1 },
    { name: "Class of 2025", text: "Paul: Who has the notes?", time: "08:30", unread: 12 },
    { name: "Bella's Boutique", text: "Your order is ready", time: "Yesterday" },
    { name: "Dad", text: "Call me when you're free", time: "Yesterday" },
  ];
  return (
    <div className="wa-phone" role="img" aria-label="Illustration of a chat app inbox with unread conversations">
      <div className="wa-screen">
        <div className="wa-top">
          <strong>Chats</strong>
          <span className="wa-search" aria-hidden="true"></span>
        </div>
        <ul className="wa-list">
          {chats.map((chat) => (
            <li key={chat.name}>
              <span className={`wa-avatar ${chat.ring ? "has-ring" : ""}`}>{chat.name[0]}</span>
              <div className="wa-meta">
                <strong>{chat.name}</strong>
                <small>{chat.text}</small>
              </div>
              <div className="wa-side">
                <small>{chat.time}</small>
                {chat.unread && <span className="wa-unread">{chat.unread}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// The moment that started it all: a Status with a typo and no Edit button
function StatusMoment() {
  return (
    <div className="wa-status" role="img" aria-label="A Status with a typo in its caption, and a menu with no edit option">
      <div className="wa-status-card">
        <div className="wa-status-bar" aria-hidden="true">
          <i></i>
        </div>
        <p className="wa-status-caption">
          Graduation day with the best <span className="wa-typo">freinds</span> 🎓
        </p>
      </div>
      <ul className="wa-status-menu" aria-hidden="true">
        <li>Forward</li>
        <li>Share</li>
        <li>Delete</li>
        <li className="is-missing">Edit</li>
      </ul>
    </div>
  );
}

function WhatsApp() {
  useScrollReveal();
  const index = teardowns.findIndex((item) => item.slug === "whatsapp");
  const next = teardowns[(index + 1) % teardowns.length];

  return (
    <main className="kora wa">
      {/* ---------- Hero ---------- */}
      <section className="kora-hero">
        <div className="container">
          <Link to="/teardowns" className="detail-back">
            <ArrowLeft />
            Product teardowns
          </Link>

          <div className="kora-hero-grid">
            <div className="kora-hero-text">
              <p className="kora-kicker">Reverse engineering · Consumer communication</p>
              <div className="kora-brand">
                <CaseLogo src={wa.logo} name="WhatsApp" hideFallback />
                <h1 className="kora-name wa-name">WhatsApp</h1>
              </div>
              <p className="kora-tagline">
                <Typewriter text="What makes people come back to a chat app every single day?" />
              </p>
              <p className="kora-summary">
                A product manager's deep dive into WhatsApp's strategy, product philosophy, user experience and the
                trade-offs behind one of the world's most successful consumer products.
              </p>
              {wa.articleUrl && (
                <a className="btn btn-secondary" href={wa.articleUrl} target="_blank" rel="noreferrer">
                  Read the full article
                </a>
              )}
            </div>
            <div className="wa-hero-visual">
              {wa.heroImage ? (
                <div className="wa-phone wa-phone-img">
                  <img src={wa.heroImage} alt="WhatsApp's chat list on Android" />
                </div>
              ) : (
                <ChatPhone />
              )}
              <div className="wa-float is-a kr">
                <span className="wa-float-dot"></span>
                <div>
                  <small>Engagement loop</small>
                  <strong>Active conversation</strong>
                </div>
              </div>
              <div className="wa-float is-b kr" style={{ "--i": 1 }}>
                <span className="wa-float-icon">
                  <Icon name="lock" />
                </span>
                <div>
                  <small>Trust layer</small>
                  <strong>Private by design</strong>
                </div>
              </div>
            </div>
          </div>

          <dl className="kora-facts">
            <div>
              <dt>Lens</dt>
              <dd>Product strategy</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>Consumer, communication</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Philosophy, habits, trade-offs</dd>
            </div>
            <div>
              <dt>Published</dt>
              <dd>July 2026</dd>
            </div>
          </dl>
          <p className="wa-disclaimer">
            Based on public information, firsthand product observation and my own reasoning as a product manager. Not
            a reflection of internal decisions at WhatsApp or Meta.
          </p>
        </div>
      </section>

      {/* ---------- The product I thought I knew ---------- */}
      <section className="section">
        <div className="container">
          <h2 className="kora-big-title kr">The product I thought I already knew.</h2>
          <div className="wa-origin">
            <div className="kora-context-text kr">
              <p className="kora-lead">
                For years I used WhatsApp like everyone else. Then I became a product manager, and the app I'd used for
                years stopped looking like a chat screen. It started looking like a series of decisions.
              </p>
              <p>
                One small moment made it real. I posted a Status, noticed a typo in the caption a few seconds later,
                and looked for an Edit button. There wasn't one.
              </p>
              <p>
                That wasn't an oversight. It was a decision. Somewhere, a product team had weighed that exact
                experience and decided that not allowing edits was the better choice. What fascinated me wasn't
                whether they were right. It was the thinking behind it.
              </p>
              <ul className="wa-first-questions">
                {firstQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
            <div className="kr" style={{ "--i": 1 }}>
              <StatusMoment />
              <p className="wa-origin-quote">
                Great products are defined by the features they include, and equally by the decisions they choose not
                to make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- More than messaging ---------- */}
      <section className="kora-product">
        <div className="container">
          <div className="wa-more">
            <div className="kr">
              <h2 className="section-title">More than a messaging app.</h2>
              <p className="lead wa-more-lead">
                Think about the last message you sent. Did you wonder whether it would arrive, how fast, or whether it
                was private? Probably not. You tapped Send and expected it to work.
              </p>
              <p className="wa-more-text">
                That expectation is one of WhatsApp's biggest achievements. The best products don't make you think
                about the technology. They make it disappear.
              </p>
            </div>
            <div className="wa-job kr" style={{ "--i": 1 }}>
              <p className="wa-job-label">The real job to be done</p>
              <p className="wa-job-main">
                People don't wake up wanting to send messages. They want to check on their parents, coordinate with
                colleagues, share good news, or ask "have you arrived safely?"
              </p>
              <p className="wa-job-punch">Messaging is the medium. Connection is the job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Before WhatsApp ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Before WhatsApp, staying connected was surprisingly hard.</h2>
            <p className="lead">Each product solved part of the problem. None of them solved it completely.</p>
          </div>
          <ul className="wa-before">
            {before.map((item, i) => (
              <li key={item.name} className="kr" style={{ "--i": i }}>
                <h3>{item.name}</h3>
                <p className="wa-before-good">
                  <Check />
                  {item.good}
                </p>
                <p className="wa-before-catch">
                  <Cross />
                  {item.catch}
                </p>
              </li>
            ))}
          </ul>
          <div className="wa-insight kr">
            <span className="wa-insight-icon">
              <Icon name="phone" />
            </span>
            <div>
              <h3>WhatsApp started with something everyone already had: a phone number.</h3>
              <p>
                No usernames, no friend requests, no convincing people to join a new network. If someone was in your
                contacts, they were already part of yours. And it arrived exactly when smartphones and mobile internet
                were ready for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Five rules ---------- */}
      <section className="kora-decisions">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">The invisible rules behind WhatsApp.</h2>
            <p className="lead kora-on-dark">
              Great products are built principle by principle, not feature by feature. Features can be copied.
              Principles are much harder to imitate.
            </p>
          </div>
          <ol className="wa-rules">
            {rules.map((rule, i) => (
              <li key={rule.title} className="kr" style={{ "--i": i }}>
                <span className="wa-rule-num">Rule {i + 1}</span>
                <h3>{rule.title}</h3>
                <p>{rule.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Millions of lives ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">One product. Millions of different lives.</h2>
            <p className="lead">
              The users are different, but the reason they come back is the same: something important is waiting on
              the other side of the conversation.
            </p>
          </div>
          <div className="wa-lives">
            <ul className="wa-lives-grid">
              {lives.map((item, i) => (
                <li key={item.who} className="kr" style={{ "--i": i % 2 }}>
                  <h3>{item.who}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="wa-lives-visual kr">
              {wa.screens && wa.screens.length > 0 ? (
                <img src={wa.screens[0]} alt="WhatsApp screen captured for this teardown" className="wa-shot" />
              ) : (
                <div className="wa-chatview" role="img" aria-label="Illustration of a family group chat with a voice note">
                  <p className="wa-chat-head">
                    <strong>Family</strong>
                    <small>Mum, Dad, Ruth, you and 4 others</small>
                  </p>
                  <p className="wa-bubble in">Did you arrive safely?</p>
                  <p className="wa-bubble in wa-voice">
                    <span className="wa-play"></span>
                    <span className="wa-wave"></span>
                    <small>0:24</small>
                  </p>
                  <p className="wa-bubble out">Yes Mum, just landed!</p>
                  <p className="wa-typing" aria-hidden="true">
                    <i></i>
                    <i></i>
                    <i></i>
                  </p>
                </div>
              )}
            </div>
          </div>
          <p className="wa-lives-close kr">
            A student in Douala, a shop owner in Lagos, a family in São Paulo, a doctor in Mumbai. Their lives are
            completely different. The product isn't.
          </p>
        </div>
      </section>

      {/* ---------- Hook model ---------- */}
      <section className="kora-prioritize">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">From the first download to a daily habit.</h2>
            <p className="lead">
              Through Nir Eyal's Hook model, the pattern is clear. And it isn't built on algorithms. It's built on
              relationships.
            </p>
          </div>
          <ol className="wa-hook">
            {hook.map((item, i) => (
              <li key={item.stage} className="kr" style={{ "--i": i }}>
                <span className="wa-hook-num">{i + 1}</span>
                <h3>{item.stage}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
          <div className="wa-loop-grid wa-loop-after">
            <div className="kr">
              <p className="wa-loop-steps">
                Someone reaches out. You open WhatsApp. You have a meaningful conversation. You leave behind another
                message or memory. The product is more valuable the next time you return.
              </p>
              <p className="wa-loop-punch">
                WhatsApp isn't trying to maximize screen time. It helps people do what they came to do, quickly. That's
                exactly why they come back.
              </p>
            </div>
            <div className="wa-network kr" style={{ "--i": 1 }} aria-hidden="true">
              <span className="wa-ring r1"></span>
              <span className="wa-ring r2"></span>
              <span className="wa-ring r3"></span>
              {["M", "D", "R", "P", "B", "A"].map((letter, i) => (
                <span key={letter} className={`wa-person p${i}`}>
                  {letter}
                </span>
              ))}
              <span className="wa-core">
                <Icon name="chat" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Feature decisions ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">The thinking behind WhatsApp's biggest features.</h2>
            <p className="lead">The most valuable lessons aren't in the features. They're in the decisions behind them.</p>
          </div>
          <div className="wa-decisions">
            {decisions.map((item, i) => (
              <article key={item.title} className={`wa-decision kr ${i === decisions.length - 1 ? "is-open" : ""}`} style={{ "--i": i % 2 }}>
                <p className="wa-decision-num mono">Decision {i + 1}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <p className="wa-tradeoff-tag">
                  <span>Trade-off</span>
                  {item.tradeoff}
                </p>
              </article>
            ))}
          </div>
          <div className="wa-pattern kr">
            <p className="wa-pattern-label">One pattern behind all seven</p>
            <ul>
              {pattern.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="wa-pattern-question">
              How can we make communication easier without making the product more complicated?
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Works / breaks ---------- */}
      <section className="kora-product">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">What works, and where it breaks.</h2>
          </div>
          <div className="teardown-columns kr">
            <div>
              <h3>What works</h3>
              <ul className="teardown-list is-good">
                {wa.works.map((point) => (
                  <li key={point}>
                    <span className="teardown-icon">
                      <Check />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Where it breaks</h3>
              <ul className="teardown-list is-bad">
                {wa.breaks.map((point) => (
                  <li key={point}>
                    <span className="teardown-icon">
                      <Cross />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- If I joined: opportunity tree ---------- */}
      <section className="kora-decisions">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">If I joined the WhatsApp product team tomorrow.</h2>
            <p className="lead kora-on-dark">
              Not criticisms, but conversations I'd love to have, each starting with one question: could we make this
              experience just a little better? I mapped the first three with an opportunity solution tree.
            </p>
          </div>
          <div className="wa-tree">
            <div className="wa-tree-outcome kr">
              <small>Outcome</small>
              <strong>{tree.outcome}</strong>
            </div>
            <div className="wa-tree-branches">
              {tree.branches.map((branch, i) => (
                <div key={branch.opportunity} className={`wa-branch kr ${branch.pick ? "is-pick" : ""}`} style={{ "--i": i }}>
                  <div className="wa-branch-opp">
                    <small>Opportunity</small>
                    <p>{branch.opportunity}</p>
                  </div>
                  <div className="wa-branch-sol">
                    <small>{branch.pick ? "Solution I'd test first" : "Solution"}</small>
                    <p>{branch.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="wa-voice-demo kr">
            <div className="wa-voice-msg">
              <span className="wa-play"></span>
              <span className="wa-wave"></span>
              <small>7:42</small>
            </div>
            <div className="wa-voice-summary">
              <p className="wa-voice-label">
                <Icon name="spark" /> Summary
              </p>
              <ul>
                <li>The meeting has moved to 10:00 AM.</li>
                <li>Please review the presentation before tonight.</li>
                <li>Updated slides will be shared later today.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Recommendation + more ideas ---------- */}
      <section className="section">
        <div className="container">
          <div className="detail-highlight teardown-rec kr">
            <h2>What I'd build first</h2>
            <p>{wa.recommendation.title}</p>
            <p className="teardown-rec-body">{wa.recommendation.body}</p>
          </div>
          <div className="wa-experiment kr">
            <p className="wa-experiment-label">How I'd measure it</p>
            <ol className="teardown-metrics">
              {wa.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ol>
          </div>

          <h3 className="kora-framework kr wa-more-ideas-title">Other conversations I'd want to have</h3>
          <ul className="wa-ideas">
            {moreIdeas.map((item, i) => (
              <li key={item.title} className="kr" style={{ "--i": i % 2 }}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>

          <div className="wa-keep kr">
            <div>
              <p className="wa-keep-label">One thing I wouldn't change</p>
              <ul>
                {keep.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="wa-keep-punch">Not building more. Building thoughtfully.</p>
          </div>
        </div>
      </section>

      {/* ---------- Bigger questions ---------- */}
      <section className="kora-product">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Where could the product go from here?</h2>
            <p className="lead">Product questions I'd investigate, not claims about what WhatsApp should definitely build.</p>
          </div>
          <ul className="wa-pillars">
            {questions.map((item, i) => (
              <li key={item.title} className="kr" style={{ "--i": i }}>
                <span className="kora-icon">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="wa-tradeoff kr">
            <div className="agri-compare">
              <div>
                <p className="agri-compare-label">More utility</p>
                <h3>Payments, business tools, communities, AI</h3>
              </div>
              <span className="agri-compare-vs" aria-hidden="true">
                vs
              </span>
              <div>
                <p className="agri-compare-label">More complexity</p>
                <h3>A harder path to the one thing people come for</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Metrics ---------- */}
      <section className="kora-measure">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">From intuition to measurable behaviour.</h2>
            <p className="lead">
              A north star metric and the inputs that drive it. These are measurement directions, not claimed results.
            </p>
          </div>
          <div className="wa-northstar kr">
            <span className="kora-callout-icon">
              <Icon name="star" />
            </span>
            <div>
              <small>North star metric</small>
              <strong>Daily active users who send at least one message</strong>
            </div>
          </div>
          <ul className="wa-inputs">
            {inputs.map((item, i) => (
              <li key={item.name} className="kr" style={{ "--i": i }}>
                <strong>{item.name}</strong>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Lessons ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Lessons I took away from reverse engineering WhatsApp.</h2>
          </div>
          <ul className="wa-lessons">
            {lessons.map((item, i) => (
              <li key={item.title} className="kr" style={{ "--i": i % 3 }}>
                <span className="wa-lesson-num">{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Reflection ---------- */}
      <section className="kora-reflection">
        <div className="container">
          <h2 className="kr">
            The products people love most aren't the ones that do the most, but the ones that make what people already
            do feel effortless.
          </h2>
          <p className="kr">
            I started this teardown trying to understand WhatsApp. I finished it with a deeper understanding of what
            great product management looks like.
          </p>
        </div>
      </section>

      <div className="container">
        <nav className="detail-next" aria-label="Next teardown">
          <p>Next teardown</p>
          <Link to={`/teardowns/${next.slug}`}>
            {next.name}
            <ArrowRight />
          </Link>
        </nav>
      </div>
    </main>
  );
}

export default WhatsApp;
