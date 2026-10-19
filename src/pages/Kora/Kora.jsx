import { Link } from "react-router-dom";
import { products } from "../../data/site";
import ProductVisual from "../../components/ProductVisual/ProductVisual";
import { CaseLogo, Typewriter, CountUp, useScrollReveal } from "../../components/CaseKit/CaseKit";
import { ArrowLeft, ArrowRight } from "../../components/Icons/Icons";
import "../../styles/detail.css";
import "./Kora.css";

// ---------------------------------------------------------------
// Kora case study content.
// Sections marked CHECK are framed from your notes and CV:
// read them and adjust anything that doesn't match what happened.
// ---------------------------------------------------------------

const kora = products.find((item) => item.slug === "kora");

const capabilities = [
  { icon: "sales", title: "Sales", text: "Record sales at the counter or on the go, and issue sales invoices." },
  { icon: "box", title: "Inventory", text: "Track stock levels across products and branches." },
  { icon: "card", title: "Payments", text: "See who has paid, who owes, and keep payments tied to each sale." },
  { icon: "receipt", title: "Expenses", text: "Log spending and purchase invoices to understand where money goes." },
];

const role = [
  {
    icon: "target",
    title: "Product direction",
    text: "Defined which problems Kora should solve first and the value each module had to create for business owners.",
  },
  {
    icon: "doc",
    title: "Requirements",
    text: "Turned interviews and research into PRDs, user stories, acceptance criteria and user flows in Notion and Figma.",
  },
  {
    icon: "sort",
    title: "Prioritization",
    text: "Owned the Jira backlog and ranked work by customer value, business impact and feasibility.",
  },
  {
    icon: "people",
    title: "Go-to-market",
    text: "Ran 10+ client demos, supported sales conversations and helped onboard 5+ businesses with training guides.",
  },
];

// CHECK: MoSCoW for the first release
const moscow = [
  { label: "Must have", tone: "must", items: ["Sales and point of sale", "Inventory", "Sales invoicing"] },
  { label: "Should have", tone: "should", items: ["Payments tracking", "Expenses and purchase invoices"] },
  { label: "Could have", tone: "could", items: ["Staff roles", "Multi-branch view"] },
  { label: "Won't have yet", tone: "wont", items: ["Full accounting", "Online storefront"] },
];

const rice = [
  { letter: "R", title: "Reach", text: "How many client businesses run into this every week?" },
  { letter: "I", title: "Impact", text: "How much does it change the owner's day: saved time, fewer errors, clearer money?" },
  { letter: "C", title: "Confidence", text: "Did we hear it in interviews and demos, or is it still an assumption?" },
  { letter: "E", title: "Effort", text: "What will it cost engineering and design, agreed with the team before committing?" },
];

// CHECK: decision records
const decisions = [
  {
    title: "One operating view",
    context: "Owners were moving between notebooks, spreadsheets and separate apps for sales, stock and spending.",
    decision:
      "Build one connected system where a sale updates stock, payments and reports automatically, instead of perfecting a single module first.",
    tradeoff: "Each module started simpler than a dedicated tool. We accepted that to win on the connections between them.",
  },
  {
    title: "Designed for teams",
    context: "Clients had staff at the counter and, in some cases, more than one branch.",
    decision: "Support multiple employees and branches early, while keeping the owner informed about everything that happens.",
    tradeoff: "More setup during onboarding. We covered it with training guides and hands-on onboarding.",
  },
  {
    title: "Make information actionable",
    context: "Reports that only list numbers were rarely opened by busy owners.",
    decision: "Shape reporting around the questions owners ask: what sold, what needs restocking, and who still owes us.",
    tradeoff: "Fewer custom report options, in exchange for answers owners use every day.",
  },
];

const journey = [
  { icon: "sales", title: "Record", text: "Capture sales and business activity." },
  { icon: "box", title: "Track", text: "Keep inventory, expenses and operations visible." },
  { icon: "chart", title: "Understand", text: "Turn activity into useful business information." },
  { icon: "trend", title: "Act", text: "Use the information to make better decisions." },
];

// AARRR: what I would measure at each stage
const aarrr = [
  { stage: "Acquisition", question: "Which channels bring businesses to a demo?", metric: "Demo-to-signup rate" },
  { stage: "Activation", question: "Do new businesses finish setup and record their first sale?", metric: "First sale within 7 days" },
  { stage: "Retention", question: "Do they keep running daily operations in Kora?", metric: "Weekly active businesses" },
  { stage: "Referral", question: "Do owners recommend Kora to other businesses?", metric: "Referred signups" },
  { stage: "Revenue", question: "Do businesses pay, and grow into more modules or branches?", metric: "Paid conversion and expansion" },
];

const iconPaths = {
  sales: "M4 7h16v10H4zM4 11h16M8 15h3",
  box: "M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8",
  card: "M3 6h18v12H3zM3 10h18M7 15h4",
  receipt: "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6M9 16h3",
  chart: "M4 20h16M7 16v-4M12 16V7M17 16v-7",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  sort: "M4 6h16M4 12h10M4 18h5",
  people: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.5M18 14.5a5 5 0 0 1 3 5.5",
  trend: "M4 17l6-6 4 4 6-7M14 8h6v6",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z",
  scale: "M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 0 0 6 0zM18 7l-3 7a3 3 0 0 0 6 0z",
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="kora-svg">
      <path d={iconPaths[name]} />
    </svg>
  );
}

// The hero visual: a product brief, the way I document a product
function ProductBrief() {
  return (
    <figure className="brief" aria-label="Kora product brief: problem, users, goal, and first-release scope">
      <div className="brief-bar" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <p>Kora / Product brief</p>
      </div>
      <div className="brief-body">
        <div className="brief-title">
          <strong>Kora: first release</strong>
          <span className="brief-status">In delivery</span>
        </div>
        <dl className="brief-fields">
          <div>
            <dt>Problem</dt>
            <dd>SMEs run sales, stock and spending in separate places, so owners can't see the whole business.</dd>
          </div>
          <div>
            <dt>Users</dt>
            <dd>Owners, cashiers and branch managers</dd>
          </div>
          <div>
            <dt>North star</dt>
            <dd>Weekly active businesses</dd>
          </div>
        </dl>
        <div className="brief-backlog">
          <p>Backlog, ranked</p>
          <ul>
            <li>
              <span>Sales and POS</span>
              <em className="tag-must">Must</em>
            </li>
            <li>
              <span>Inventory</span>
              <em className="tag-must">Must</em>
            </li>
            <li>
              <span>Payments tracking</span>
              <em className="tag-should">Should</em>
            </li>
            <li>
              <span>Multi-branch view</span>
              <em className="tag-could">Could</em>
            </li>
          </ul>
        </div>
      </div>
    </figure>
  );
}

const base = import.meta.env.BASE_URL;

// Before and after: scattered tools vs one connected system
function BeforeAfter() {
  const scattered = ["Notebook", "Spreadsheet", "WhatsApp orders", "Calculator", "Paper receipts"];
  const connected = ["Sales", "Inventory", "Payments", "Expenses"];
  return (
    <div className="ba">
      <figure className="ba-panel is-before kr" style={{ "--i": 0 }}>
        <figcaption>Before Kora</figcaption>
        <div className="ba-scatter" aria-hidden="true">
          {scattered.map((item, index) => (
            <span key={item} className={`ba-chip c${index}`}>
              {item}
            </span>
          ))}
        </div>
        <p>Five places to check before the owner knows how the day went.</p>
      </figure>
      <figure className="ba-panel is-after kr" style={{ "--i": 1 }}>
        <figcaption>With Kora</figcaption>
        <div className="ba-hub" aria-hidden="true">
          <span className="ba-core">Kora</span>
          {connected.map((item, index) => (
            <span key={item} className={`ba-node n${index}`}>
              {item}
            </span>
          ))}
        </div>
        <p>One system where every sale updates stock, money and reports.</p>
      </figure>
    </div>
  );
}

// Screens: illustrations until real Kora screenshots are added
// (set `screens` on Kora in src/data/site.js, e.g. [`${base}images/kora-1.png`, ...])
function ScreenMock({ kind }) {
  if (kind === "invoice") {
    return (
      <div className="sm sm-invoice">
        <div className="sm-row">
          <strong>Sales invoice</strong>
          <span className="sm-pill">Paid</span>
        </div>
        <i className="sm-line w60"></i>
        <i className="sm-line w40"></i>
        <div className="sm-table">
          {[0, 1, 2].map((row) => (
            <div key={row} className="sm-row">
              <i className="sm-line w50"></i>
              <i className="sm-line w20"></i>
            </div>
          ))}
        </div>
        <div className="sm-row sm-total">
          <span>Total</span>
          <i className="sm-line w30 is-dark"></i>
        </div>
      </div>
    );
  }
  if (kind === "stock") {
    return (
      <div className="sm sm-stock">
        <strong>Inventory</strong>
        {[80, 45, 12, 64].map((level, row) => (
          <div key={row} className="sm-row">
            <i className="sm-line w40"></i>
            <span className="sm-bar">
              <b style={{ width: `${level}%` }} className={level < 20 ? "is-low" : ""}></b>
            </span>
          </div>
        ))}
        <span className="sm-alert">Low stock alert</span>
      </div>
    );
  }
  return (
    <div className="sm sm-overview">
      <strong>Business overview</strong>
      <div className="sm-tiles">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="sm-chart">
        {[40, 62, 48, 75, 58, 88].map((height, bar) => (
          <span key={bar} style={{ height: `${height}%` }}></span>
        ))}
      </div>
    </div>
  );
}

function Kora() {
  useScrollReveal();
  const index = products.findIndex((item) => item.slug === "kora");
  const next = products[(index + 1) % products.length];

  return (
    <main className="kora">
      {/* ---------- Hero ---------- */}
      <section className="kora-hero">
        <div className="container">
          <Link to="/work" className="detail-back">
            <ArrowLeft />
            All work
          </Link>

          <div className="kora-hero-grid">
            <div className="kora-hero-text">
              <p className="kora-kicker">Case study · B2B SaaS</p>
              <div className="kora-brand">
                <CaseLogo src={`${base}images/kora-logo.png`} name="Kora" />
                <h1 className="kora-name">Kora</h1>
              </div>
              <p className="kora-tagline">
                <Typewriter text="Turning fragmented SME operations into one operating system." />
              </p>
              <p className="kora-summary">
                A business management platform that helps small businesses run sales, inventory, payments and
                expenses in one place. I owned it as product manager, from discovery to launch and client onboarding.
              </p>
            </div>
            <ProductBrief />
          </div>

          <dl className="kora-facts">
            <div>
              <dt>Role</dt>
              <dd>Product Manager</dd>
            </div>
            <div>
              <dt>Company</dt>
              <dd>Mihma Corporation</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Strategy, discovery, delivery</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{kora.period}</dd>
            </div>
          </dl>

          <dl className="kora-stats">
            {kora.stats.map((stat, i) => (
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
          <h2 className="kora-big-title kr">Small businesses shouldn't need five tools to run one.</h2>
          <BeforeAfter />
          <div className="kora-context kr">
            <div className="kora-context-text">
              <p className="kora-lead">
                Kora was designed around a simple observation: many businesses need to manage the same connected
                activities every day, but those activities often live in disconnected places.
              </p>
              <p>
                Sales affect inventory. Inventory affects purchasing. Expenses affect profitability. Payments affect
                cash flow. Reporting should connect these pieces rather than treating them as isolated activities.
              </p>
              <p>
                The opportunity was bigger than building another sales or inventory tool. It was about creating a
                connected operating layer for the business.
              </p>
            </div>
            <aside className="kora-callout">
              <span className="kora-callout-icon">
                <Icon name="bulb" />
              </span>
              <strong>Product opportunity</strong>
              <p>Connect the operational activities that business owners already perform into one coherent system.</p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- Product ---------- */}
      <section className="kora-product">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">One platform. Multiple business workflows.</h2>
            <p className="lead">Four connected workflows, so one action updates the whole business.</p>
          </div>
          <div className="kr">
            <ProductVisual type="kora" tint={kora.tint} image={kora.image} alt="Kora interface" size="large" />
          </div>
          <ul className="kora-capabilities">
            {capabilities.map((item, i) => (
              <li key={item.title} className="kr" style={{ "--i": i }}>
                <span className="kora-icon">
                  <Icon name={item.icon} />
                </span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Role ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">My role, from problem to delivery.</h2>
            <p className="lead">
              My job was not to document features. It was to decide what Kora should solve, what mattered most, and
              make sure those decisions reached the product and the customer.
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

      {/* ---------- Prioritization: MoSCoW + RICE ---------- */}
      <section className="kora-prioritize">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">How I decided what came first.</h2>
            <p className="lead">
              With seven possible modules and a small team, scope was the most important decision. I used MoSCoW to
              set the first release, and RICE to rank the backlog inside it.
            </p>
          </div>

          <h3 className="kora-framework">MoSCoW: scope of the first release</h3>
          <div className="kora-moscow">
            {moscow.map((group) => (
              <div key={group.label} className={`moscow-col is-${group.tone} kr`} style={{ "--i": moscow.indexOf(group) }}>
                <p className="moscow-label">{group.label}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="kora-framework">RICE: ranking the backlog</h3>
          <div className="kora-rice kr">
            <p className="rice-formula" aria-label="Score equals reach times impact times confidence, divided by effort">
              <span>Score</span> = (<b>R</b> × <b>I</b> × <b>C</b>) ÷ <b>E</b>
            </p>
            <ul className="rice-grid">
              {rice.map((item) => (
                <li key={item.title}>
                  <span className="rice-letter">{item.letter}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Decision log ---------- */}
      <section className="kora-decisions">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Three decisions that shaped the product.</h2>
            <p className="lead kora-on-dark">Written the way I record decisions: the context, the call, and what it cost.</p>
          </div>
          <div className="kora-decision-list">
            {decisions.map((item, i) => (
              <article key={item.title} className="decision-record kr" style={{ "--i": i }}>
                <h3>{item.title}</h3>
                <dl>
                  <div>
                    <dt>Context</dt>
                    <dd>{item.context}</dd>
                  </div>
                  <div>
                    <dt>Decision</dt>
                    <dd>{item.decision}</dd>
                  </div>
                  <div>
                    <dt>Trade-off</dt>
                    <dd>{item.tradeoff}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Journey ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Connect activity to decision.</h2>
            <p className="lead">
              Kora is most valuable when the information it captures helps the owner understand what is happening and
              decide what to do next.
            </p>
          </div>
          <ol className="kora-journey">
            {journey.map((item, step) => (
              <li key={item.title} className="kr" style={{ "--i": step }}>
                <div className="kora-journey-top">
                  <span className="kora-icon">
                    <Icon name={item.icon} />
                  </span>
                  <span className="kora-journey-num mono">{step + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Inside Kora ---------- */}
      <section className="kora-gallery">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Designed around real workflows.</h2>
            <p className="lead">
              The interface should make complex business operations feel understandable, without hiding the
              information owners need.
            </p>
          </div>
          <div className="kora-screens">
            {[
              { kind: "overview", label: "Business overview" },
              { kind: "invoice", label: "Sales invoices" },
              { kind: "stock", label: "Inventory and stock alerts" },
            ].map((screen, i) => (
              <figure key={screen.kind} className={`kora-screen kr ${i === 0 ? "is-large" : ""}`} style={{ "--i": i }}>
                <div className="kora-screen-frame">
                  {kora.screens && kora.screens[i] ? (
                    <img src={kora.screens[i]} alt={`Kora: ${screen.label}`} />
                  ) : (
                    <ScreenMock kind={screen.kind} />
                  )}
                </div>
                <figcaption>{screen.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Trade-offs ---------- */}
      <section className="kora-tradeoff">
        <div className="container kora-tradeoff-grid">
          <h2 className="section-title">Product management is often deciding what not to build.</h2>
          <div className="kora-tradeoff-text kr">
            <p>
              A platform like Kora can quickly become overloaded with features. Every extra capability adds
              complexity for people who simply want to run their business.
            </p>
            <p>
              That creates a constant tension between breadth and usability: enough workflows to make the platform
              valuable, without turning it into a collection of disconnected tools.
            </p>
            <div className="kora-question">
              <span className="kora-callout-icon is-light">
                <Icon name="scale" />
              </span>
              <div>
                <strong>The question every feature had to pass</strong>
                <p>Does this meaningfully improve the owner's ability to run or understand their business?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AARRR ---------- */}
      <section className="kora-measure">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Shipping is not the outcome.</h2>
            <p className="lead">
              I measure a product like Kora across the AARRR funnel. These are the questions and metrics I would track
              at each stage, not claimed results.
            </p>
          </div>
          <ol className="aarrr">
            {aarrr.map((item, step) => (
              <li key={item.stage} className="kr" style={{ "--step": step, "--i": step }}>
                <span className="aarrr-letter" aria-hidden="true">
                  {item.stage[0]}
                </span>
                <div className="aarrr-text">
                  <h3>{item.stage}</h3>
                  <p>{item.question}</p>
                </div>
                <p className="aarrr-metric">{item.metric}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Reflection ---------- */}
      <section className="kora-reflection">
        <div className="container">
          <h2 className="kr">The hardest part isn't defining the feature. It's defining the problem.</h2>
          <p>
            Kora reinforced one of the principles I bring to product work: clarity at the problem level makes
            everything downstream easier. Better prioritization, better requirements, better conversations with design
            and engineering, and ultimately better products.
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

export default Kora;
