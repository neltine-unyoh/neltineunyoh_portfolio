import { Link } from "react-router-dom";
import { products } from "../../data/site";
import ProductVisual from "../../components/ProductVisual/ProductVisual";
import { ArrowLeft, ArrowRight } from "../../components/Icons/Icons";
import { CaseLogo, Typewriter, CountUp, useScrollReveal } from "../../components/CaseKit/CaseKit";
import "../../styles/detail.css";
import "../Kora/Kora.css";
import "./AgriLock.css";

// ---------------------------------------------------------------
// AgriLock case study content, from your notes.
// ---------------------------------------------------------------

const base = import.meta.env.BASE_URL;
const agri = products.find((item) => item.slug === "agrilock");

const ecosystem = [
  { icon: "farmer", title: "Farmers", text: "Access financing tied to agricultural activity and repayment conditions." },
  { icon: "bank", title: "Financiers", text: "Fund agricultural activity through a more structured and transparent mechanism." },
  { icon: "cart", title: "Buyers", text: "Create a clearer path between agricultural output and agreed transactions." },
  { icon: "shield", title: "Verification", text: "Introduce rules and records that help establish trust between participants." },
];

const flow = [
  { icon: "doc", title: "Agreement", text: "Define conditions" },
  { icon: "lock", title: "Lock", text: "Secure funding" },
  { icon: "farmer", title: "Activity", text: "Track progress" },
  { icon: "check", title: "Verify", text: "Confirm conditions" },
  { icon: "coins", title: "Settle", text: "Complete transaction" },
];

const journey = [
  { title: "Define", text: "A farmer enters the financing process and the agricultural activity is defined." },
  { title: "Fund", text: "Financing is committed against agreed conditions, not handled as an isolated transaction." },
  { title: "Execute", text: "The agricultural activity progresses according to the conditions set in the product." },
  { title: "Settle", text: "The product creates a structured path to verification, repayment and settlement." },
];

const role = [
  { icon: "compass", title: "Product definition", text: "Framed the opportunity, product scope, participants and core workflow." },
  { icon: "route", title: "User flows", text: "Mapped the movement from financing request through verification and settlement." },
  { icon: "rules", title: "Requirements", text: "Translated product behaviour into requirements and system logic." },
  { icon: "code", title: "Development", text: "Contributed to the technical build and used engineering context to inform product decisions." },
];

const decisions = [
  {
    icon: "lock",
    title: "Trust before complexity",
    text: "The concept starts with the trust problem. Technology only matters if it makes the underlying transaction easier to understand and verify.",
  },
  {
    icon: "network",
    title: "Design the system, not just the screen",
    text: "The experience depends on several participants, so the product has to account for relationships and responsibilities across the ecosystem.",
  },
  {
    icon: "code",
    title: "Technical feasibility matters",
    text: "Because I was also involved in development, product decisions were weighed against implementation constraints and system behaviour.",
  },
];

const mvp = [
  "Farmer onboarding",
  "Financing request",
  "Funding workflow",
  "Agricultural activity tracking",
  "Verification states",
  "Repayment and settlement logic",
];

// Marty Cagan's four product risks, applied to AgriLock
const risks = [
  {
    risk: "Value",
    question: "Does the system actually increase confidence in the financing process?",
    test: "Interview farmers and financiers with the agreement flow in front of them.",
  },
  {
    risk: "Usability",
    question: "Do users understand who is responsible for each step, and which stages cause friction?",
    test: "Walk participants through a prototype and watch where they hesitate.",
  },
  {
    risk: "Feasibility",
    question: "Can verification and settlement work in real agricultural contexts?",
    test: "Pilot one crop cycle with a cooperative that can confirm activity on the ground.",
  },
  {
    risk: "Viability",
    question: "Is the model worth it for every side, and who pays for verification?",
    test: "Model the economics with a small group of financiers before building further.",
  },
];

const iconPaths = {
  farmer: "M12 21v-8M12 13c0-4 3-7 7-7 0 4-3 7-7 7zM12 15c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5z",
  bank: "M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18",
  cart: "M3 4h2l2.5 11h11L21 7H6.5M10 20h.01M17 20h.01",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  lock: "M6 11h12v10H6zM8 11V8a4 4 0 0 1 8 0v3",
  check: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 12.5l2.5 2.5L16 9.5",
  coins: "M9 8a6 3 0 1 0 0 .01M3 8v4c0 1.7 2.7 3 6 3M3 12v4c0 1.7 2.7 3 6 3M15 11a6 3 0 1 0 0 .01M9 11v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z",
  route: "M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 17h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7",
  rules: "M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2",
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14",
  network: "M12 5a2 2 0 1 0 0-.01M5 19a2 2 0 1 0 0-.01M19 19a2 2 0 1 0 0-.01M12 7v5M12 12l-6 5M12 12l6 5",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z",
  help: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.5V14M12 17h.01",
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="kora-svg">
      <path d={iconPaths[name]} />
    </svg>
  );
}

// Hero visual: the agreement as the product sees it
function ContractCard() {
  const rows = [
    { label: "Funding", value: "Locked", tone: "done" },
    { label: "Activity", value: "Verified", tone: "done" },
    { label: "Settlement", value: "Pending", tone: "wait" },
  ];
  return (
    <figure className="contract" aria-label="Example AgriLock agreement: funding locked, activity verified, settlement pending">
      <div className="contract-top">
        <span className="contract-icon">
          <Icon name="lock" />
        </span>
        <span className="contract-tag">Smart contract</span>
      </div>
      <p className="contract-title">Agricultural finance agreement</p>
      <ul className="contract-rows">
        {rows.map((row) => (
          <li key={row.label}>
            <span>{row.label}</span>
            <strong className={`is-${row.tone}`}>{row.value}</strong>
          </li>
        ))}
      </ul>
      <div className="contract-progress" aria-hidden="true">
        <span></span>
      </div>
      <p className="contract-foot">Step 4 of 5: waiting for settlement</p>
    </figure>
  );
}

// Product experience: the agreement on a phone
function AgreementPhone() {
  const steps = [
    { title: "Funding secured", text: "Agreement activated", done: true },
    { title: "Activity verified", text: "Conditions confirmed", done: true },
    { title: "Settlement", text: "Awaiting final condition", done: false },
  ];
  return (
    <div className="agri-phone" role="img" aria-label="Phone screen showing an AgriLock agreement and its status timeline">
      <div className="agri-phone-screen">
        <p className="agri-phone-head">Finance agreement</p>
        <div className="agri-phone-value">
          <span>Contract value (example)</span>
          <strong>850,000 FCFA</strong>
        </div>
        <div className="agri-phone-status">
          <span className="agri-phone-dot"></span>
          <div>
            <small>Current status</small>
            <strong>Activity verified</strong>
          </div>
        </div>
        <ul className="agri-phone-timeline">
          {steps.map((step) => (
            <li key={step.title} className={step.done ? "is-done" : ""}>
              <strong>{step.title}</strong>
              <small>{step.text}</small>
            </li>
          ))}
        </ul>
        <span className="agri-phone-btn">View agreement</span>
      </div>
    </div>
  );
}

function AgriLock() {
  useScrollReveal();
  const index = products.findIndex((item) => item.slug === "agrilock");
  const next = products[(index + 1) % products.length];

  return (
    <main className="kora agri">
      {/* ---------- Hero ---------- */}
      <section className="kora-hero">
        <div className="container">
          <Link to="/work" className="detail-back">
            <ArrowLeft />
            All work
          </Link>

          <div className="kora-hero-grid">
            <div className="kora-hero-text">
              <p className="kora-kicker">Case study · 0 → 1 · Fintech and agriculture</p>
              <div className="kora-brand">
                <CaseLogo src={`${base}images/agrilock-logo.png`} name="AgriLock" />
                <h1 className="kora-name agri-name">AgriLock</h1>
              </div>
              <p className="kora-tagline">
                <Typewriter text="Designing a trust layer for agricultural finance." />
              </p>
              <p className="kora-summary">
                AgriLock explored how smart-contract infrastructure could structure agricultural financing around
                clearer conditions, verification and settlement. I led the product and worked on the build.
              </p>
            </div>
            <ContractCard />
          </div>

          <dl className="kora-facts">
            <div>
              <dt>Role</dt>
              <dd>Product Manager and Developer</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>Fintech, agriculture, 0 → 1</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Product definition, UX, technical design</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{agri.period}</dd>
            </div>
          </dl>

          <dl className="kora-stats">
            {agri.stats.map((stat, i) => (
              <div key={stat.label} className="kr" style={{ "--i": i }}>
                <dd>
                  <CountUp value={stat.value} />
                </dd>
                <dt>{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Context ---------- */}
      <section className="section">
        <div className="container">
          <h2 className="kora-big-title kr">Agricultural finance is not only a money problem. It's a trust problem.</h2>
          <div className="kora-context kr">
            <div className="kora-context-text">
              <p className="kora-lead">
                Agricultural financing involves multiple parties, uncertain outcomes, and transactions that unfold
                over a whole season.
              </p>
              <p>
                AgriLock was built around one question: what if the financing conditions could be encoded into the
                product itself?
              </p>
              <p>
                The concept explored smart contracts as infrastructure for clearer rules around funding,
                verification and settlement.
              </p>
            </div>
            <aside className="kora-callout">
              <span className="kora-callout-icon">
                <Icon name="help" />
              </span>
              <strong>How might we…</strong>
              <p>Make agricultural financing more structured, transparent and trustable across every participant?</p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- Ecosystem ---------- */}
      <section className="kora-product">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">One transaction. Multiple participants.</h2>
            <p className="lead">
              Instead of treating financing as a single interaction, I approached it as a system of connected
              participants, each with something to gain and something to lose.
            </p>
          </div>
          <div className="agri-system">
            <div className="kr">
              <ProductVisual type="agrilock" tint="var(--tint-blue)" alt="AgriLock participants around a locked agreement" />
            </div>
            <ul className="agri-ecosystem">
              {ecosystem.map((item, i) => (
                <li key={item.title} className="kr" style={{ "--i": i }}>
                  <span className="kora-icon">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Concept flow ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Make the agreement part of the product.</h2>
            <p className="lead">
              The core idea was to move financing conditions out of informal agreements and into a system that shows
              states, rules and transitions explicitly.
            </p>
          </div>
          <ol className="agri-flow">
            {flow.map((step, i) => (
              <li key={step.title} className="kr" style={{ "--i": i }}>
                <span className="agri-flow-icon">
                  <Icon name={step.icon} />
                </span>
                <span className="agri-flow-num mono">{i + 1}</span>
                <strong>{step.title}</strong>
                <small>{step.text}</small>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Product experience ---------- */}
      <section className="agri-experience">
        <div className="container">
          <div className="agri-shot kr">
            <img src={agri.image} alt="AgriLock landing page: Grow wealth, feed the world" />
          </div>
          <div className="agri-exp-grid">
            <div className="agri-exp-text kr">
              <h2 className="section-title">The interface should make the system easier to understand.</h2>
              <p className="lead">
                The product translates complex financial and contractual states into information participants can
                act on.
              </p>
              <ul className="agri-points">
                {["Clear transaction state", "Visible conditions", "Traceable activity"].map((point) => (
                  <li key={point}>
                    <span className="agri-point-icon">
                      <Icon name="check" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="kr" style={{ "--i": 1 }}>
              <AgreementPhone />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Journey ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">From financing request to settlement.</h2>
            <p className="lead">The journey was structured around the state of the agreement, not around isolated features.</p>
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
        </div>
      </section>

      {/* ---------- Role ---------- */}
      <section className="kora-product">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Close to both the product and the code.</h2>
            <p className="lead">
              AgriLock let me work across product definition and technical execution instead of treating them as
              separate disciplines.
            </p>
          </div>
          <ul className="kora-role">
            {role.map((item, i) => (
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

      {/* ---------- Decisions ---------- */}
      <section className="kora-decisions">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Three decisions shaped the concept.</h2>
            <p className="lead kora-on-dark">
              The interesting work wasn't choosing features. It was deciding what the product needed to make
              trustworthy.
            </p>
          </div>
          <div className="kora-decision-list">
            {decisions.map((item, i) => (
              <article key={item.title} className="decision-record kr" style={{ "--i": i }}>
                <span className="kora-icon agri-dark-icon">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p className="agri-decision-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MVP ---------- */}
      <section className="section">
        <div className="container agri-mvp">
          <div className="kr">
            <h2 className="section-title">Start with the smallest system that proves the idea.</h2>
            <p className="lead agri-mvp-lead">
              As a 0 → 1 concept, the MVP had to validate the core financing workflow before expanding into a wider
              agricultural ecosystem.
            </p>
          </div>
          <ol className="agri-mvp-list">
            {mvp.map((item, i) => (
              <li key={item} className="kr" style={{ "--i": i }}>
                <span className="mono">{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Trade-off ---------- */}
      <section className="kora-tradeoff">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">More technology doesn't automatically mean a better product.</h2>
            <p className="lead">
              The challenge is making the infrastructure useful without making the experience feel more complicated.
            </p>
          </div>
          <div className="agri-compare kr">
            <div>
              <p className="agri-compare-label">Complexity</p>
              <h3>Smart-contract infrastructure</h3>
              <p>Powerful for expressing rules and states, but potentially hard for users to understand.</p>
            </div>
            <span className="agri-compare-vs" aria-hidden="true">
              vs
            </span>
            <div>
              <p className="agri-compare-label">Experience</p>
              <h3>Simple product language</h3>
              <p>Users should understand what is happening without needing to understand the technology.</p>
            </div>
          </div>
          <div className="kora-question kr">
            <span className="kora-callout-icon is-light">
              <Icon name="bulb" />
            </span>
            <div>
              <strong>Product principle</strong>
              <p>Hide technical complexity behind clear states, actions and explanations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Four risks ---------- */}
      <section className="kora-measure">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Before building further, test the riskiest assumptions.</h2>
            <p className="lead">
              I mapped what I'd validate next against the four product risks: value, usability, feasibility and
              viability.
            </p>
          </div>
          <div className="agri-risks">
            {risks.map((item, i) => (
              <article key={item.risk} className="agri-risk kr" style={{ "--i": i }}>
                <p className="agri-risk-name">{item.risk} risk</p>
                <h3>{item.question}</h3>
                <p className="agri-risk-test">
                  <span>How I'd test it</span>
                  {item.test}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Reflection ---------- */}
      <section className="kora-reflection">
        <div className="container">
          <h2 className="kr">The interesting part of 0 → 1 work is not having all the answers.</h2>
          <p className="kr">
            It's knowing which assumptions are important enough to test before you build the rest of the system.
          </p>
        </div>
      </section>

      <div className="container">
        <nav className="detail-next" aria-label="Next case study">
          <p>Next case study</p>
          <Link to={`/work/${next.slug}`}>
            {next.name}
            <ArrowRight />
          </Link>
        </nav>
      </div>
    </main>
  );
}

export default AgriLock;
