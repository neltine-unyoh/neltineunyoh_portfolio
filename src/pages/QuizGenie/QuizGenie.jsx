import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/site";
import { ArrowLeft, ArrowRight } from "../../components/Icons/Icons";
import { CaseLogo, Typewriter, CountUp, useScrollReveal } from "../../components/CaseKit/CaseKit";
import { Phone } from "./Screens";
import "../../styles/detail.css";
import "../Kora/Kora.css";
import "./QuizGenie.css";

// ---------------------------------------------------------------
// QuizGenie case study content, from your write-up.
// ---------------------------------------------------------------

const quiz = products.find((item) => item.slug === "quizgenie");

const problems = [
  { title: "Time-consuming revision", text: "Writing practice questions by hand from long documents takes hours." },
  { title: "Passive learning", text: "Reading and highlighting don't show whether you can recall or apply what you read." },
  { title: "Hidden knowledge gaps", text: "Students think they understand a topic until they try to answer questions on it." },
  { title: "Not enough practice", text: "Notes and textbooks rarely offer enough questions at the right difficulty." },
  { title: "No exam conditions", text: "It's hard to practise answering under time pressure before the real thing." },
  { title: "Scattered study", text: "Keeping track of documents, sessions and results gets messy fast." },
];

const steps = [
  {
    screen: "upload",
    title: "Upload",
    text: "Upload a PDF or DOCX of lecture notes or course material. QuizGenie validates the file, stores it securely and extracts the text.",
  },
  {
    screen: "settings",
    title: "Customize",
    text: "Choose multiple choice or open-ended, a difficulty from Easy to Hard, 5 to 40 questions, and whether to use a timer.",
  },
  {
    screen: "generating",
    title: "Generate",
    text: "The extracted text and the learner's settings go to an AI model through a secure backend, which writes questions and answers from the material.",
  },
  {
    screen: "quiz",
    title: "Practise",
    text: "Answer one question at a time, with 30 seconds each in timed mode. Unanswered questions move on when time runs out.",
  },
  {
    screen: "results",
    title: "Get feedback",
    text: "A score and feedback, from “Congratulations” to “Try again”, so learners know where they stand.",
  },
  {
    screen: "history",
    title: "Review",
    text: "Documents, question sets, attempts and scores stay together, so learners know what to practise again.",
  },
];

const features = [
  { title: "Smart document upload", text: "PDF and DOCX up to 5 MB, with the real text extracted so questions stay on topic." },
  { title: "AI question generation", text: "Relevant questions matched to the chosen format, difficulty and count." },
  { title: "Multiple formats", text: "Multiple choice with answers, and open-ended questions that make learners explain in their own words." },
  { title: "Timed and untimed", text: "Self-study with a Show Answers toggle, or exam practice with a 30-second timer per question." },
  { title: "Performance feedback", text: "Scores, completion history and encouraging feedback after every timed session." },
  { title: "Learning history", text: "Every document keeps its questions, attempts and results for future revision." },
];

const audiences = [
  { title: "University students", text: "Practice questions from lecture notes and handouts before exams." },
  { title: "Secondary school students", text: "Reinforce classroom learning on specific subjects and topics." },
  { title: "Professionals", text: "Revise training material and certification study guides." },
  { title: "Teachers and tutors", text: "Turn their own material into practice exercises for learners." },
];

const compare = [
  ["Read notes repeatedly", "Read, then actively test understanding"],
  ["Write questions by hand", "Generate questions with AI"],
  ["Use whatever difficulty exists", "Choose the difficulty"],
  ["Practise without structured timing", "Choose timed or untimed practice"],
  ["Track results somewhere else", "Results and history in one place"],
  ["Search for outside questions", "Questions from your own material"],
];

const role = [
  { title: "Validation", text: "Tested the problem with learners, market and competitive research before writing product code." },
  { title: "Definition", text: "Set the vision, target users, MVP scope and roadmap, and wrote the PRDs and specs." },
  { title: "Building", text: "Built features as the full-stack developer, including the AI integration and document processing." },
  { title: "Launch", text: "Ran priorities in Jira and launched to a pilot group of early users within eight months." },
];

const moscow = [
  { label: "Must have", tone: "must", items: ["Document upload and text extraction", "AI question generation", "Multiple choice and open-ended", "Scoring and feedback"] },
  { label: "Should have", tone: "should", items: ["Timed mode, 30s per question", "Learning history"] },
  { label: "Could have", tone: "could", items: ["Google and Apple sign-in", "Subscription management"] },
  { label: "Won't have yet", tone: "wont", items: ["Adaptive difficulty", "Flashcards", "Weak-topic analytics"] },
];

const decisions = [
  {
    title: "Start from the learner's own material",
    context: "Quiz apps already offer ready-made questions by subject, but rarely on what a student's own course covers.",
    decision: "Generate every question from the document the learner uploads, so practice matches what they'll be examined on.",
    tradeoff: "Quality depends on the document. We had to validate files and handle empty or unreadable ones gracefully.",
  },
  {
    title: "Don't present AI answers as always right",
    context: "AI-generated content can contain mistakes, and students trust what looks official.",
    decision: "Keep questions grounded in the document and let learners inspect answers and check them against their notes.",
    tradeoff: "Less 'magic' in the experience, in exchange for learners who can trust what they practise.",
  },
  {
    title: "Simulate exam pressure, optionally",
    context: "Students struggle to practise under time pressure, but not every session should feel like an exam.",
    decision: "Offer a 30-second timer per question that auto-advances, alongside an untimed mode with a Show Answers toggle.",
    tradeoff: "Two modes to design, build and explain instead of one.",
  },
];

const architecture = [
  { layer: "Frontend", text: "Upload, configure, take quizzes, see results, manage the account", tech: "Next.js, React" },
  { layer: "Backend", text: "Authentication, file validation, document processing, quiz generation, scoring, API security", tech: "Node.js" },
  { layer: "Database", text: "Users, documents, preferences, questions, attempts and scores", tech: "PostgreSQL or MongoDB" },
  { layer: "AI service", text: "Reads the extracted text and returns structured questions and answers", tech: "OpenAI API, key kept on the server" },
];

const plans = [
  { name: "Free", text: "Limited uploads and question generations" },
  { name: "Student", text: "Affordable access for individual learners" },
  { name: "Premium", text: "Higher limits, more quizzes, longer history" },
  { name: "Institutional", text: "Group access and educator features" },
];

// Google's HEART framework, applied to QuizGenie
const heart = [
  { letter: "H", name: "Happiness", metric: "Rating after each quiz session" },
  { letter: "E", name: "Engagement", metric: "Quizzes completed per active learner each week" },
  { letter: "A", name: "Adoption", metric: "New users who generate their first quiz" },
  { letter: "R", name: "Retention", metric: "Learners who come back to practise within 7 days" },
  { letter: "T", name: "Task success", metric: "Uploads that turn into a quiz without errors" },
];

const roadmap = [
  { stage: "Now", items: ["Document uploads", "AI-generated questions", "Timed quizzes", "Learning history"] },
  { stage: "Next", items: ["Adaptive difficulty", "Weak-topic identification", "Flashcards"] },
  { stage: "Later", items: ["Learning analytics over time", "Study recommendations", "Institutional plans"] },
];

function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="qg-how">
      <div className="qg-how-phone kr">
        <Phone key={step.screen} screen={step.screen} label={`QuizGenie concept screen: ${step.title}`} className="is-swap" />
      </div>
      <div className="qg-how-steps kr" style={{ "--i": 1 }}>
        <ol role="tablist" aria-label="How QuizGenie works">
          {steps.map((item, index) => (
            <li key={item.title}>
              <button
                type="button"
                role="tab"
                aria-selected={index === active}
                className={`qg-step ${index === active ? "is-active" : ""}`}
                onClick={() => setActive(index)}
              >
                <span className="qg-step-num">{index + 1}</span>
                <span className="qg-step-text">
                  <strong>{item.title}</strong>
                  {index === active && <small>{item.text}</small>}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function QuizGenie() {
  useScrollReveal();
  const index = products.findIndex((item) => item.slug === "quizgenie");
  const next = products[(index + 1) % products.length];

  return (
    <main className="kora qg">
      {/* ---------- Hero ---------- */}
      <section className="kora-hero">
        <div className="container">
          <Link to="/work" className="detail-back">
            <ArrowLeft />
            All work
          </Link>

          <div className="kora-hero-grid">
            <div className="kora-hero-text">
              <p className="kora-kicker">Case study · AI and EdTech · My own product</p>
              <div className="kora-brand">
                <CaseLogo src={quiz.logo} name="QuizGenie" />
                <h1 className="kora-name qg-name">QuizGenie</h1>
              </div>
              <p className="kora-tagline">
                <Typewriter text="Your study material. Your questions. Your progress." />
              </p>
              <p className="kora-summary">
                An AI-powered learning app that turns lecture notes and study documents into personalized practice
                questions and quizzes. I took it from idea to launch as product owner and full-stack developer.
              </p>
            </div>
            <div className="qg-hero-phones" aria-label="QuizGenie concept screens">
              <Phone screen="upload" label="Concept screen: uploading notes" className="p1" />
              <Phone screen="quiz" label="Concept screen: a timed quiz question" className="p2" />
              <Phone screen="results" label="Concept screen: quiz results" className="p3" />
            </div>
          </div>

          <dl className="kora-facts">
            <div>
              <dt>Role</dt>
              <dd>Product Owner and Full-Stack Developer</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>AI, EdTech, my own product</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Discovery, MVP, build, launch</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{quiz.period}</dd>
            </div>
          </dl>

          <dl className="kora-stats">
            {quiz.stats.map((stat, i) => (
              <div key={stat.label} className="kr" style={{ "--i": i }}>
                <dd>
                  <CountUp value={stat.value} />
                </dd>
                <dt>{stat.label}</dt>
              </div>
            ))}
          </dl>
          <p className="qg-note">Screens on this page are concept designs recreated for this case study.</p>
        </div>
      </section>

      {/* ---------- Problem ---------- */}
      <section className="section">
        <div className="container">
          <h2 className="kora-big-title kr">Reading your notes isn't the same as knowing them.</h2>
          <p className="lead qg-problem-lead kr">
            Students have mountains of material before an exam, but rereading it doesn't tell them how well they
            understand it. I found six problems that kept coming up.
          </p>
          <ul className="qg-problems">
            {problems.map((item, i) => (
              <li key={item.title} className="kr" style={{ "--i": i % 3 }}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="kora-product">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">How QuizGenie works.</h2>
            <p className="lead">Tap through the six steps to see each screen.</p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">What's in the product.</h2>
          </div>
          <ul className="qg-features">
            {features.map((item, i) => (
              <li key={item.title} className="kr" style={{ "--i": i % 3 }}>
                <span className="qg-feature-dot" aria-hidden="true"></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Audience + difference ---------- */}
      <section className="kora-prioritize">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Who it's for, and what makes it different.</h2>
            <p className="lead">The core value: QuizGenie starts with the learner's own study material.</p>
          </div>
          <ul className="qg-audience">
            {audiences.map((item, i) => (
              <li key={item.title} className="kr" style={{ "--i": i }}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="qg-compare kr">
            <table>
              <thead>
                <tr>
                  <th scope="col">Traditional studying</th>
                  <th scope="col">With QuizGenie</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([before, after]) => (
                  <tr key={before}>
                    <td>{before}</td>
                    <td>{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- Role ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Owner and builder.</h2>
            <p className="lead">
              Being the product owner and the developer at once meant every scope decision had a cost I'd personally
              pay. It made me a sharper PM.
            </p>
          </div>
          <ol className="kora-journey">
            {role.map((item, step) => (
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

      {/* ---------- MoSCoW ---------- */}
      <section className="kora-product">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Scoping the first version.</h2>
            <p className="lead">
              I used MoSCoW to keep the launch focused on the core loop: upload, generate, practise, get feedback.
            </p>
          </div>
          <div className="kora-moscow">
            {moscow.map((group, i) => (
              <div key={group.label} className={`moscow-col is-${group.tone} kr`} style={{ "--i": i }}>
                <p className="moscow-label">{group.label}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Decisions ---------- */}
      <section className="kora-decisions">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Three decisions that shaped QuizGenie.</h2>
            <p className="lead kora-on-dark">The context, the call, and what it cost.</p>
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

      {/* ---------- Architecture ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">A full-stack product, not a set of screens.</h2>
            <p className="lead">
              As the developer too, I designed how the pieces fit together. The AI key never touches the frontend.
            </p>
          </div>
          <ol className="qg-arch">
            {architecture.map((item, i) => (
              <li key={item.layer} className="kr" style={{ "--i": i }}>
                <strong>{item.layer}</strong>
                <p>{item.text}</p>
                <span>{item.tech}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Business model ---------- */}
      <section className="kora-tradeoff">
        <div className="container kora-tradeoff-grid">
          <div className="kr">
            <h2 className="section-title">A business model worth testing.</h2>
            <p className="lead qg-model-lead">
              A freemium subscription. Pricing and limits would come from user research and cost analysis, because AI
              usage, storage and document processing all cost money.
            </p>
          </div>
          <ul className="qg-plans">
            {plans.map((plan, i) => (
              <li key={plan.name} className="kr" style={{ "--i": i }}>
                <strong>{plan.name}</strong>
                <p>{plan.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- HEART ---------- */}
      <section className="kora-measure">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">How I'd measure success.</h2>
            <p className="lead">
              I'd use Google's HEART framework, because a learning product only works if people keep coming back to
              practise. These are measurement directions, not claimed results.
            </p>
          </div>
          <ul className="qg-heart">
            {heart.map((item, i) => (
              <li key={item.name} className="kr" style={{ "--i": i }}>
                <span className="qg-heart-letter">{item.letter}</span>
                <strong>{item.name}</strong>
                <p>{item.metric}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Roadmap ---------- */}
      <section className="section">
        <div className="container">
          <div className="kora-head kr">
            <h2 className="section-title">Where it could go next.</h2>
            <p className="lead">From a quiz generator to a personal learning companion. Only "Now" exists today.</p>
          </div>
          <div className="qg-roadmap">
            {roadmap.map((column, i) => (
              <div key={column.stage} className={`qg-road kr ${i === 0 ? "is-now" : ""}`} style={{ "--i": i }}>
                <p className="qg-road-stage">{column.stage}</p>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Reflection ---------- */}
      <section className="kora-reflection">
        <div className="container">
          <h2 className="kr">Upload what you need to learn. Practise what matters. Understand your progress.</h2>
          <p className="kr">
            QuizGenie taught me what every scope decision really costs, because I was the one building it. That's
            changed how I write requirements ever since.
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

export default QuizGenie;
