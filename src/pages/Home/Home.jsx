import { useState } from "react";
import { Link } from "react-router-dom";
import { profile, products, teardowns, stats } from "../../data/site";
import { CountUp, TypeOnView, useScrollReveal } from "../../components/CaseKit/CaseKit";
import CodeCard from "../../components/CodeCard/CodeCard";
import ProductRow from "../../components/ProductRow/ProductRow";
import "./Home.css";

// The questions I ask before anything gets built, with how I'd answer them in a planning review
const questions = [
  {
    q: "Why does this matter now?",
    a: "Timing is a product decision. I want to know what has changed: a customer signal, a competitor move, a cost we can no longer absorb. If nothing has changed, it can usually wait.",
  },
  {
    q: "Who feels this problem most, and how do we know?",
    a: "I start with the segment that feels the pain every day, and I want evidence: interviews, support tickets, usage data. Three loud anecdotes are not a pattern.",
  },
  {
    q: "What does success look like, and how will we measure it?",
    a: "We agree on one primary metric and a guardrail before we build. If we can't say what would make this a success, we're not ready to start.",
  },
  {
    q: "What happens if we don't build it?",
    a: "This question exposes opportunity cost. If nothing meaningful breaks without it, the team's time is probably better spent elsewhere.",
  },
  {
    q: "What's the smallest version we can learn from?",
    a: "Before committing a full sprint, I look for the cheapest test that could prove us wrong: a prototype, a manual workaround, five customer conversations.",
  },
  {
    q: "What are we saying no to?",
    a: "Every yes has a cost. I make the trade-off explicit and write down what's out of scope, so the team protects focus instead of renegotiating it every week.",
  },
  {
    q: "What could go wrong, and how would we notice?",
    a: "I map the value, usability, feasibility and viability risks, then agree on early signals and the point at which we'd stop or change course.",
  },
  {
    q: "How does this move the strategy forward?",
    a: "A good feature that doesn't serve the strategy still dilutes the product. I check that it strengthens the core experience and moves the metric we care about most.",
  },
];

function WhyQuestions() {
  const [open, setOpen] = useState(0);

  return (
    <ul className="why-list">
      {questions.map((item, index) => {
        const isOpen = open === index;
        return (
          <li key={item.q} className={`kr ${isOpen ? "is-open" : ""}`} style={{ "--i": index % 4 }}>
            <h3>
              <button
                type="button"
                className="why-q"
                aria-expanded={isOpen}
                aria-controls={`why-a-${index}`}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span>{item.q}</span>
                <span className="why-icon" aria-hidden="true"></span>
              </button>
            </h3>
            <div className="why-a" id={`why-a-${index}`}>
              <p>{item.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Home() {
  useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-text">
            <h1 className="home-title" aria-label="I turn why into products people use.">
              <TypeOnView text="I turn why into" immediate delay={300} speed={45} />
              <TypeOnView text="products people use." immediate delay={1100} speed={45} />
            </h1>
            <p className="lead home-intro home-fade" style={{ "--d": "1.9s" }}>
              {profile.intro}
            </p>
            <div className="btn-row home-fade" style={{ "--d": "2.15s" }}>
              <Link to="/work" className="btn btn-primary">
                See my work
              </Link>
              <a href={profile.resumeUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
                Download resume
              </a>
            </div>
          </div>

          <div className="home-hero-visual">
            <img
              className="home-photo"
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="900"
              height="1125"
            />
            <div className="home-code">
              <CodeCard />
            </div>
          </div>
        </div>
      </section>

      {/* Numbers band */}
      <section className="home-stats" aria-label="At a glance">
        <dl className="container home-stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} className="kr" style={{ "--i": i }}>
              <dd>
                <CountUp value={stat.value} />
              </dd>
              <dt>{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Built products */}
      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <div className="home-head kr">
            <h2 id="work-title" className="section-title">
              <TypeOnView text="Products I've built" />
            </h2>
            <p className="lead">
              Three products I owned from the first question to launch. On two of them, I also wrote the code.
            </p>
          </div>

          <div className="home-products">
            {products.map((product, index) => (
              <div className={`kr ${index % 2 ? "kr-right" : "kr-left"}`} key={product.slug}>
                <ProductRow product={product} featured={index === 0} reverse={index === 2} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="home-why" aria-labelledby="why-title">
        <div className="container">
          <div className="home-why-top">
            <h2 id="why-title" className="home-why-word kr kr-zoom">
              <span className="sr-only">The question I ask most is </span>
              Why?
            </h2>
            <div className="home-why-intro kr" style={{ "--i": 1 }}>
              <p>
                It's the question I ask most. Before anything gets built, I want the team to have clear answers to
                these eight.
              </p>
              <Link to="/teardowns" className="btn home-why-btn">
                See it in my teardowns
              </Link>
            </div>
          </div>
          <WhyQuestions />
        </div>
      </section>

      {/* Teardowns */}
      <section className="section" aria-labelledby="teardowns-title">
        <div className="container">
          <div className="home-head kr">
            <h2 id="teardowns-title" className="section-title">
              <TypeOnView text="Products I've taken apart" />
            </h2>
            <p className="lead">
              Teardowns of products people use every day: what works, what breaks, and what I would change.
            </p>
          </div>

          <ul className="home-teardowns">
            {teardowns.map((item, i) => (
              <li key={item.slug} className="kr" style={{ "--i": i }}>
                <Link to={`/teardowns/${item.slug}`} className="home-teardown">
                  <span className="home-teardown-name">{item.name}</span>
                  <span className="home-teardown-question">{item.question}</span>
                  <span className="home-teardown-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;
