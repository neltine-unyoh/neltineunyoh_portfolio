import { Link } from "react-router-dom";
import { teardowns } from "../../data/site";
import { ArrowLeft, ArrowRight, Check } from "../../components/Icons/Icons";
import { CaseLogo, Typewriter, CountUp, useScrollReveal } from "../../components/CaseKit/CaseKit";
import "../../styles/detail.css";
import "../Kora/Kora.css";
import "../AgriLock/AgriLock.css";
import "../Teardown/Teardown.css";
import "./MoMo.css";

// ---------------------------------------------------------------
// MTN MoMo teardown, combining "Reverse Engineering MTN MoMo
// Cameroon" (your article) with the product-system analysis.
// ---------------------------------------------------------------

const momo = teardowns.find((item) => item.slug === "mtn-momo");

const stats = [
  { value: "6", label: "product decisions reverse engineered" },
  { value: "2", label: "channels: app and USSD" },
  { value: "4", label: "lessons for fintech PMs" },
];

const expectations = [
  "Their money arrives.",
  "Their balance is accurate.",
  "Their account is safe if the phone is lost.",
  "There's clear proof when something goes wrong.",
];

// Jobs to be done for the people MoMo serves
const jobs = [
  { who: "A university student", when: "it's late and my data runs out", want: "buy a bundle in seconds", so: "I can keep studying" },
  { who: "A parent", when: "my family back home needs support", want: "send money that arrives in full", so: "they don't have to call me about it" },
  { who: "A small business", when: "a customer wants to pay", want: "accept payment instantly", so: "I don't lose the sale over cash" },
  { who: "A household", when: "the electricity bill is due", want: "pay it from my phone", so: "I don't spend a morning at the agency" },
];

const pillars = [
  { icon: "phone", title: "Access", text: "Financial services become useful when people can reach them through familiar, practical channels." },
  { icon: "shield", title: "Trust", text: "Moving money needs confidence about identity, confirmation, security and outcomes." },
  { icon: "network", title: "Ecosystem", text: "A payment network gets more valuable as consumers, merchants, agents and businesses join it." },
];

const decisions = [
  {
    id: "auth",
    title: "Why does it ask for my PIN, then an OTP?",
    noticed:
      "Every time I open the app I enter my PIN, then a one-time code sent to my number. Leave the app for a few seconds and I often have to do it all again.",
    why:
      "It's two-factor authentication: something you know (your PIN) and something you have (your SIM). Someone with your PIN still can't get in without your phone.",
    lesson: "Great fintech products aren't designed to feel effortless at all costs. Sometimes trust is built by slowing users down.",
  },
  {
    id: "fees",
    title: "Why does it ask if I want to include withdrawal charges?",
    noticed: "Before sending money, the app asks whether to add the withdrawal fee to the amount I send.",
    why:
      "If I send 10,000 FCFA, the recipient may get less after withdrawing and call to say I didn't send it all. Including the fee means they receive exactly what I intended.",
    lesson: "The best experience sometimes comes from anticipating what could go wrong next. It turns a future complaint into a choice made upfront.",
  },
  {
    id: "ussd",
    title: "Why does it still support USSD?",
    noticed: "MoMo has a rich smartphone app, yet *126# still works on any phone.",
    why:
      "Not everyone has a smartphone or reliable data, and even smartphone users lose connection. USSD keeps the service available whatever the device or network.",
    lesson: "Innovation isn't always replacing the old with the new. Different users have different realities.",
  },
  {
    id: "card",
    title: "Why was getting a Virtual Card so easy?",
    noticed: "I expected ID uploads and a selfie. Instead, the Virtual Card took a few quick steps.",
    why:
      "MTN already verified my identity when I registered for Mobile Money. Repeating it would add friction without adding value, so the product builds on trust it already has.",
    lesson: "Great onboarding doesn't always start at 'Get started'. Sometimes it started years earlier.",
  },
  {
    id: "receipt",
    title: "Why does every transaction end with a receipt?",
    noticed: "Every completed transaction immediately produces a receipt. Most of us glance at it and move on.",
    why:
      "It records who was paid, how much, when, and a reference for support. People don't just want money to move, they want proof that it moved.",
    lesson: "Trust isn't only built by moving money quickly. It's built by giving users confidence long after the transaction.",
  },
  {
    id: "simple",
    title: "Why does it feel so simple?",
    noticed: "A clean interface, straightforward navigation, most tasks done in a few steps.",
    why:
      "That simplicity isn't an accident. Each decision above has a clear purpose, and together they serve one job: moving money safely and confidently.",
    lesson: "Great products aren't the ones with the most features. They're the ones where every feature has a clear purpose.",
  },
];

// Friction map: how much effort a decision costs vs how much trust it builds
const friction = [
  { label: "PIN + OTP", x: 82, y: 88 },
  { label: "Receipts", x: 14, y: 76 },
  { label: "Include fees", x: 30, y: 62 },
  { label: "USSD access", x: 40, y: 40 },
  { label: "Easy Virtual Card", x: 12, y: 54 },
];

const journey = [
  { title: "Initiate", text: "The user decides what financial action they need." },
  { title: "Authenticate", text: "The system confirms the person is authorised to act." },
  { title: "Transact", text: "Value moves between the right participants." },
  { title: "Confirm", text: "The user gets enough feedback to know what happened." },
];

const chain = [
  { title: "Identity", text: "Confidence that the account and the recipient are the intended parties.", decision: "Verified once at registration" },
  { title: "Authentication", text: "Protection before value can move.", decision: "PIN + OTP" },
  { title: "Confirmation", text: "Clear feedback on whether an action succeeded.", decision: "Receipt with reference" },
  { title: "Recovery", text: "A clear path when something goes wrong.", decision: "The weakest link today" },
];

const ecosystem = [
  { title: "Customers", text: "Send, receive, store and use digital value." },
  { title: "Merchants", text: "Accept digital payments from customers." },
  { title: "Agents", text: "Bridge digital money and physical cash." },
  { title: "Businesses", text: "Build commerce on the payment infrastructure." },
];

const lessons = [
  {
    title: "Trust is the product",
    text: "In fintech, trust is designed: hundreds of small decisions, from authentication to receipts, that users never notice individually.",
  },
  {
    title: "Convenience should never compromise security",
    text: "The PM's job isn't removing every extra step. It's knowing which ones should stay.",
  },
  {
    title: "Solve problems before users have them",
    text: "Including withdrawal fees doesn't fix a problem after it happens. It stops it happening at all.",
  },
  {
    title: "Every decision needs a purpose",
    text: "Great products aren't built by adding features, but by making intentional decisions that solve real problems.",
  },
];

// Hypotheses, written the way I'd bring them to the team
const hypotheses = [
  {
    title: "A short grace period for authentication",
    believe: "letting users who leave the app for under a minute return without repeating PIN + OTP",
    result: "will reduce drop-off in the middle of transactions",
    measure: "fewer abandoned transactions after an app switch",
    guardrail: "no increase in fraud or account takeover reports",
  },
  {
    title: "A clear status for every transaction",
    believe: "showing each pending or failed transaction with a plain status and an expected time",
    result: "will reduce anxiety and support calls when things go wrong",
    measure: "fewer support contacts about pending or failed transactions",
    guardrail: "status shown must match the real ledger state every time",
  },
  {
    title: "Building on existing trust",
    believe: "offering new services to verified users with the same light onboarding as the Virtual Card",
    result: "will grow adoption of new products quickly",
    measure: "activation of new services among existing users",
    guardrail: "verification standards stay the same for higher-risk products",
  },
];

const metrics = [
  { name: "Transaction success", text: "How reliably do intended transactions reach a completed state?" },
  { name: "Repeat usage", text: "Which payment behaviours drive recurring use?" },
  { name: "Failure recovery", text: "How quickly can users understand and resolve failed or uncertain transactions?" },
  { name: "Ecosystem adoption", text: "How does usage grow across customers, merchants, agents and businesses?" },
];

const iconPaths = {
  phone: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  network: "M12 5a2 2 0 1 0 0-.01M5 19a2 2 0 1 0 0-.01M19 19a2 2 0 1 0 0-.01M12 7v5M12 12l-6 5M12 12l6 5",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z",
  lock: "M6 11h12v10H6zM8 11V8a4 4 0 0 1 8 0v3",
  check: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 12.5l2.5 2.5L16 9.5",
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="kora-svg">
      <path d={iconPaths[name]} />
    </svg>
  );
}

// ---------- Small illustrations for each decision ----------

function DecisionVisual({ id }) {
  if (id === "auth") {
    return (
      <div className="mv mv-auth">
        <p className="mv-step">Step 1 · Your MoMo PIN</p>
        <div className="mv-pin" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <p className="mv-step">Step 2 · Code sent to your number</p>
        <div className="mv-otp" aria-hidden="true">
          {["4", "8", "1", "", "", ""].map((digit, index) => (
            <span key={index} className={digit ? "is-filled" : index === 3 ? "is-active" : ""}>
              {digit}
            </span>
          ))}
        </div>
      </div>
    );
  }
  if (id === "fees") {
    return (
      <div className="mv mv-fees">
        <p className="mv-step">Send money</p>
        <p className="mv-amount">10,000 FCFA</p>
        <div className="mv-toggle-row">
          <span>Include withdrawal fees</span>
          <span className="mv-toggle" aria-hidden="true">
            <i></i>
          </span>
        </div>
        <p className="mv-receive">
          <Check />
          They receive exactly 10,000 FCFA
        </p>
      </div>
    );
  }
  if (id === "ussd") {
    return (
      <div className="mv mv-ussd">
        <div className="mv-feature-phone">
          <div className="mv-ussd-screen">
            <p className="mv-ussd-code">*126#</p>
            <p>1. Transfer money</p>
            <p>2. Buy airtime and bundles</p>
            <p>3. Pay bills</p>
            <p>4. My account</p>
          </div>
          <div className="mv-keys" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, index) => (
              <i key={index}></i>
            ))}
          </div>
        </div>
        <p className="mv-caption">No smartphone or data needed</p>
      </div>
    );
  }
  if (id === "card") {
    return (
      <div className="mv mv-card">
        <div className="mv-vcard" aria-hidden="true">
          <span className="mv-chip"></span>
          <p>Virtual card</p>
          <strong>•••• •••• •••• 2048</strong>
        </div>
        <ul className="mv-checks">
          <li>
            <Check />
            Identity verified at registration
          </li>
          <li>
            <Check />
            No new ID upload
          </li>
          <li>
            <Check />
            Ready in a few steps
          </li>
        </ul>
      </div>
    );
  }
  if (id === "receipt") {
    return (
      <div className="mv mv-receipt">
        <span className="mv-receipt-icon">
          <Check />
        </span>
        <p className="mv-receipt-title">Transaction successful</p>
        <dl>
          <div>
            <dt>Amount</dt>
            <dd>8,500 FCFA</dd>
          </div>
          <div>
            <dt>To</dt>
            <dd>Merchant •••• 4821</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>Today, 14:32</dd>
          </div>
          <div>
            <dt>Reference</dt>
            <dd className="mono">MP2607241432</dd>
          </div>
        </dl>
      </div>
    );
  }
  return (
    <div className="mv mv-simple">
      {["PIN + OTP", "Include fees", "USSD", "Virtual card", "Receipts"].map((item, index) => (
        <span key={item} className={`mv-feed f${index}`}>
          {item}
        </span>
      ))}
      <span className="mv-goal">Move money safely and confidently</span>
    </div>
  );
}

// Hero illustration of a mobile money app (not MTN's actual design)
function WalletPhone() {
  return (
    <div className="momo-phone" role="img" aria-label="Illustration of a mobile money wallet with balance, quick actions and recent activity">
      <div className="momo-screen">
        <div className="momo-top">
          <div>
            <small>Good evening</small>
            <strong>My wallet</strong>
          </div>
          <span className="momo-avatar">N</span>
        </div>
        <div className="momo-balance">
          <small>Available balance</small>
          <strong>••••••</strong>
          <span>Tap to show</span>
        </div>
        <div className="momo-actions">
          {["Send", "Airtime", "Bills", "Card"].map((action) => (
            <span key={action}>
              <i></i>
              {action}
            </span>
          ))}
        </div>
        <p className="momo-recent">Recent activity</p>
        <ul className="momo-tx">
          <li>
            <span className="momo-tx-icon"></span>
            <div>
              <strong>Electricity bill</strong>
              <small>Today · 14:32</small>
            </div>
            <b>−8,500</b>
          </li>
          <li>
            <span className="momo-tx-icon is-in"></span>
            <div>
              <strong>Received</strong>
              <small>Today · 11:08</small>
            </div>
            <b className="is-in">+25,000</b>
          </li>
          <li>
            <span className="momo-tx-icon"></span>
            <div>
              <strong>Internet bundle</strong>
              <small>Yesterday</small>
            </div>
            <b>−1,000</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

function MoMo() {
  useScrollReveal();
  const index = teardowns.findIndex((item) => item.slug === "mtn-momo");
  const next = teardowns[(index + 1) % teardowns.length];

  return (
    <main className="kora momo">
      {/* ---------- Hero ---------- */}
      <section className="kora-hero">
        <div className="container">
          <Link to="/teardowns" className="detail-back">
            <ArrowLeft />
            Product teardowns
          </Link>

          <div className="kora-hero-grid">
            <div className="kora-hero-text">
              <p className="kora-kicker">Reverse engineering · Fintech · Cameroon</p>
              <div className="kora-brand">
                <CaseLogo src={momo.logo} name="MTN MoMo" hideFallback />
                <h1 className="kora-name momo-name">MTN MoMo</h1>
              </div>
              <p className="kora-tagline">
                <Typewriter text="In fintech, trust isn't a feature. It's the product." />
              </p>
              <p className="kora-summary">
                A product manager's deep dive into MTN MoMo Cameroon: the trust model, the user experience, and the
                product decisions behind one of Cameroon's most widely used financial products.
              </p>
              {momo.articleUrl && (
                <a className="btn btn-secondary" href={momo.articleUrl} target="_blank" rel="noreferrer">
                  Read the full article
                </a>
              )}
            </div>
            <div className="momo-hero-visual">
              <WalletPhone />
              <div className="wa-float momo-float is-a kr">
                <span className="momo-float-icon">
                  <Icon name="shield" />
                </span>
                <div>
                  <small>Trust layer</small>
                  <strong>Protected transaction</strong>
                </div>
              </div>
              <div className="wa-float momo-float is-b kr" style={{ "--i": 1 }}>
                <span className="momo-float-icon is-ok">
                  <Icon name="check" />
                </span>
                <div>
                  <small>Transaction</small>
                  <strong>Confirmed</strong>
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
              <dd>Fintech, payments</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Trust, UX, ecosystem</dd>
            </div>
            <div>
              <dt>Published</dt>
              <dd>July 2026</dd>
            </div>
          </dl>

          <dl className="kora-stats momo-stats">
            {stats.map((stat, i) => (
              <div key={stat.label} className="kr" style={{ "--i": i }}>
                <dd>
                  <CountUp value={stat.value} />
                </dd>
                <dt>{stat.label}</dt>
              </div>
            ))}
          </dl>
          <p className="momo-disclaimer">
            Based on public information, product observation and my own use of MTN MoMo over the years. These are my
            interpretations as a product manager, not MTN's internal decisions or roadmap.
          </p>
        </div>
      </section>

      {/* ---------- The wallet I thought I knew ---------- */}
      <section className="section">
        <div className="container">
          <h2 className="kora-big-title kr">The wallet I thought I already knew.</h2>
          <div className="kora-context kr">
            <div className="kora-context-text">
              <p className="kora-lead">
                Like millions of Cameroonians, I've used MTN MoMo for years to send money, buy bundles, recharge
                airtime and pay electricity bills. It worked, so I never thought about it.
              </p>
              <p>
                Then, after reverse engineering WhatsApp, I stopped asking "what does this app do?" and started asking
                "why was it designed this way?" Every interaction turned out to be a deliberate decision, and unlike
                most consumer apps, those decisions weren't about convenience. They were about trust.
              </p>
            </div>
            <aside className="kora-callout">
              <span className="kora-callout-icon">
                <Icon name="bulb" />
              </span>
              <strong>The questions that started it</strong>
              <ul className="momo-questions">
                <li>Why does it ask for my PIN almost every time?</li>
                <li>Why does it calculate withdrawal charges before I send?</li>
                <li>Why was getting a Virtual Card so effortless?</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- More than a wallet ---------- */}
      <section className="kora-product">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">More than a mobile wallet.</h2>
            <p className="lead">
              A messaging app competes on speed and fun. A financial product competes on trust, because every
              transaction carries expectations.
            </p>
          </div>
          <ul className="momo-expect">
            {expectations.map((item, i) => (
              <li key={item} className="kr" style={{ "--i": i }}>
                <span className="momo-expect-label">People expect</span>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="kora-framework kr">Jobs to be done: four very different users</h3>
          <ul className="momo-jobs">
            {jobs.map((job, i) => (
              <li key={job.who} className="kr" style={{ "--i": i }}>
                <strong>{job.who}</strong>
                <p>
                  <span>When</span> {job.when}, <span>I want to</span> {job.want}, <span>so</span> {job.so}.
                </p>
              </li>
            ))}
          </ul>
          <p className="momo-balance-note kr">
            Simple enough for a first-time user, secure enough for millions of transactions. That balance is why MoMo
            is worth studying.
          </p>

          <ul className="wa-pillars momo-pillars">
            {pillars.map((item, i) => (
              <li key={item.title} className="kr" style={{ "--i": i }}>
                <span className="kora-icon">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Six decisions ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">The product decisions behind MTN MoMo.</h2>
            <p className="lead">
              Every great product is a collection of deliberate decisions. These are the six that stood out most.
            </p>
          </div>
          <div className="momo-decisions">
            {decisions.map((item, i) => (
              <article key={item.id} className={`momo-decision ${i % 2 ? "is-flip" : ""}`}>
                <div className="momo-decision-visual kr">
                  <DecisionVisual id={item.id} />
                </div>
                <div className="momo-decision-text kr" style={{ "--i": 1 }}>
                  <p className="momo-decision-num mono">Decision {i + 1}</p>
                  <h3>{item.title}</h3>
                  <dl>
                    <div>
                      <dt>What I noticed</dt>
                      <dd>{item.noticed}</dd>
                    </div>
                    <div>
                      <dt>Why I think it exists</dt>
                      <dd>{item.why}</dd>
                    </div>
                  </dl>
                  <p className="momo-lesson">{item.lesson}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Friction map ---------- */}
      <section className="kora-decisions">
        <div className="container momo-friction">
          <div className="kr">
            <h2 className="section-title">Not all friction is bad friction.</h2>
            <p className="lead kora-on-dark momo-friction-lead">
              I mapped each decision by how much effort it asks of the user against how much trust it creates. MoMo
              spends friction only where it buys trust, and removes it everywhere else.
            </p>
            <p className="momo-friction-note">
              The one expensive decision, PIN + OTP, is also the one I'd revisit first.
            </p>
          </div>
          <div className="momo-map kr" style={{ "--i": 1 }} role="img" aria-label="Chart placing PIN plus OTP at high effort and high trust, and receipts, fee inclusion, Virtual Card and USSD at low effort with medium to high trust">
            <span className="momo-map-y">Trust created →</span>
            <span className="momo-map-x">Effort for the user →</span>
            <span className="momo-map-q q1">Protective friction</span>
            <span className="momo-map-q q2">Effortless trust</span>
            {friction.map((point) => (
              <span
                key={point.label}
                className={`momo-dot ${point.label === "PIN + OTP" ? "is-hot" : ""}`}
                style={{ left: `${point.x}%`, bottom: `${point.y}%` }}
              >
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Journey + trust chain ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">The happy path should feel almost invisible.</h2>
            <p className="lead">The ideal payment removes uncertainty between intention and confirmation.</p>
          </div>
          <ol className="kora-journey">
            {journey.map((item, step) => (
              <li key={item.title} className="kr" style={{ "--i": step }}>
                <div className="kora-journey-top">
                  <span className="kora-journey-num mono">{step + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>

          <div className="kora-head kr momo-chain-head">
            <h2 className="section-title">Trust isn't one feature. It's a chain.</h2>
            <p className="lead">
              Users don't experience trust on one screen. It's built before, during and after a transaction, and the
              chain is only as strong as its weakest link.
            </p>
          </div>
          <ol className="momo-chain">
            {chain.map((link, i) => (
              <li key={link.title} className={`kr ${i === chain.length - 1 ? "is-weak" : ""}`} style={{ "--i": i }}>
                <h3>{link.title}</h3>
                <p>{link.text}</p>
                <span className="momo-chain-tag">{link.decision}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Ecosystem ---------- */}
      <section className="kora-product">
        <div className="container momo-eco">
          <div className="kr">
            <h2 className="section-title">Payments get more valuable as the network grows.</h2>
            <p className="lead momo-eco-lead">
              Mobile money isn't just a consumer app. Its usefulness depends on the network around it.
            </p>
          </div>
          <div className="momo-eco-map kr" style={{ "--i": 1 }}>
            <span className="momo-eco-core">MoMo</span>
            {ecosystem.map((item, i) => (
              <div key={item.title} className={`momo-eco-node e${i}`}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Lessons ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">What MoMo taught me about building fintech products.</h2>
          </div>
          <ul className="momo-lessons">
            {lessons.map((item, i) => (
              <li key={item.title} className="kr" style={{ "--i": i }}>
                <span className="momo-lesson-num">{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- If I joined the team ---------- */}
      <section className="kora-prioritize">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">If I joined the MTN MoMo product team.</h2>
            <p className="lead">
              Not because the product is broken, but because every product can evolve. I'd bring each idea as a
              testable hypothesis, with a guardrail so we never trade away trust for speed.
            </p>
          </div>
          <div className="momo-hypotheses">
            {hypotheses.map((item, i) => (
              <article key={item.title} className="momo-hyp kr" style={{ "--i": i }}>
                <h3>{item.title}</h3>
                <p className="momo-hyp-line">
                  <span>We believe</span> {item.believe}
                </p>
                <p className="momo-hyp-line">
                  <span>will</span> {item.result.replace(/^will /, "")}.
                </p>
                <p className="momo-hyp-line">
                  <span>We'll know when</span> we see {item.measure}.
                </p>
                <p className="momo-guard">
                  <Icon name="lock" />
                  <span>
                    <b>Guardrail:</b> {item.guardrail}
                  </span>
                </p>
              </article>
            ))}
          </div>
          <div className="kora-question kr momo-tq">
            <span className="kora-callout-icon is-light">
              <Icon name="bulb" />
            </span>
            <div>
              <strong>The real question</strong>
              <p>
                Not whether security should be reduced, but whether the same security could be delivered with a little
                less friction. That answer depends on fraud data and regulation I don't have, so I'd start there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Metrics ---------- */}
      <section className="kora-measure">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Trust should show up in behaviour.</h2>
            <p className="lead">
              How I'd measure the health of the payment experience. These are measurement directions, not claimed
              results.
            </p>
          </div>
          <ul className="wa-inputs">
            {metrics.map((item, i) => (
              <li key={item.name} className="kr" style={{ "--i": i }}>
                <strong>{item.name}</strong>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Reflection ---------- */}
      <section className="kora-reflection">
        <div className="container">
          <p className="momo-reflect-kicker kr">When I started, I thought I was reverse engineering a payment app. I was reverse engineering trust.</p>
          <h2 className="kr">In fintech, trust isn't something users discover. It's something product managers design.</h2>
          <p className="kr">
            Great products aren't built through one brilliant idea. They're built through hundreds of thoughtful
            decisions, each solving a real problem for the user.
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

export default MoMo;
