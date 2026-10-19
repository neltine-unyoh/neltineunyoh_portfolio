import { useState } from "react";
import { Link } from "react-router-dom";
import { profile, certifications, languages, skills, tools } from "../../data/site";
import "./About.css";

const strengths = [
  {
    icon: "code",
    title: "I speak engineer",
    body: "I've shipped production code, so I can talk APIs, data and trade-offs with engineers and bring feasibility in before the spec is written.",
  },
  {
    icon: "route",
    title: "I own the whole journey",
    body: "On Kora I went from customer interviews and PRDs to running sales demos and onboarding clients. A product doesn't stop at the release.",
  },
  {
    icon: "chart",
    title: "I decide with data",
    body: "I use Mixpanel, SQL and funnel analysis to find where users drop off, then turn that into clear priorities.",
  },
  {
    icon: "doc",
    title: "I write specs people can build from",
    body: "PRDs, user stories and acceptance criteria that answer the team's questions before they ask them.",
  },
  {
    icon: "people",
    title: "I stay close to customers",
    body: "Interviews, demos and onboarding calls keep me honest about what users need, not just what they ask for.",
  },
  {
    icon: "globe",
    title: "I work well remotely",
    body: "I've worked with teams in Cameroon and Nigeria, mostly remote, with daily overlap across European and US hours.",
  },
];

const sides = {
  engineer: ["JavaScript", "TypeScript", "React", "Node.js", "REST APIs", "Supabase", "GitHub"],
  product: ["Discovery", "PRDs & user stories", "Roadmapping", "Prioritization", "Mixpanel & SQL", "Jira", "Figma", "Notion"],
};

function Icon({ name }) {
  const paths = {
    code: "M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14",
    route: "M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 17h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7",
    chart: "M4 20h16M7 16v-4M12 16V7M17 16v-7",
    doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
    people: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.5M18 14.5a5 5 0 0 1 3 5.5",
    globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18",
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

// Shows the tool's logo if a file exists in public/logos, otherwise just its name
function ToolLogo({ tool }) {
  const [attempt, setAttempt] = useState(0);
  if (attempt >= tool.logos.length) return null;
  return (
    <img
      src={tool.logos[attempt]}
      alt=""
      className="tool-logo"
      onError={() => setAttempt((value) => value + 1)}
    />
  );
}

function ToolRow({ items }) {
  // Repeat enough times that each half is wider than the screen, so the loop never shows a gap
  const set = [...items, ...items];
  const loop = [...set, ...set];
  return (
    <div className="tools-viewport">
      <ul className="tools-track">
        {loop.map((tool, index) => (
          <li key={`${tool.name}-${index}`} className="tool" aria-hidden={index >= items.length}>
            <ToolLogo tool={tool} />
            <span>{tool.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  const skillGroups = skills.filter((group) => group.group !== "Tools & tech");

  return (
    <main>
      {/* Hero */}
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-text">
            <h1 className="about-title">
              <span>I love writing code.</span> <span>I love shaping products.</span>
            </h1>
            <p className="lead about-lead">{profile.story}</p>
            <p className="about-body">
              Today I'm a technical product manager working on B2B SaaS, fintech and AI products. I've owned a platform
              used by 20+ small businesses, taken my own AI product from idea to launch, and worked with teams in
              Douala, Yaoundé and Lagos. I still think like an engineer: I want to know how things work, and why
              they should exist at all.
            </p>
          </div>
          <div className="about-photo-wrap">
            <img
              className="about-photo"
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="900"
              height="1125"
            />
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section about-strengths-section" aria-labelledby="strengths-title">
        <div className="container">
          <div className="about-head">
            <h2 id="strengths-title" className="section-title">
              What I bring to a team
            </h2>
            <p className="lead">Six things teams can count on when I'm the product manager.</p>
          </div>
          <ul className="about-strengths">
            {strengths.map((item) => (
              <li key={item.title} className="reveal">
                <span className="about-icon">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills and tools */}
      <section className="about-skills" aria-labelledby="skills-title">
        <div className="container">
          <div className="about-head">
            <h2 id="skills-title" className="section-title">
              Skills and tools
            </h2>
            <p className="lead">What I do as a product manager, and the tools I do it with.</p>
          </div>
          <dl className="about-skill-groups">
            {skillGroups.map((group) => (
              <div key={group.group} className="about-skill-group">
                <dt>{group.group}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about-tools" aria-label="Tools I use">
          <ToolRow items={tools} />
        </div>
      </section>

      {/* Two sides */}
      <section className="about-sides" aria-labelledby="sides-title">
        <div className="container">
          <h2 id="sides-title" className="section-title about-sides-title">
            Two sides, one way of working
          </h2>
          <div className="about-sides-grid">
            <div className="about-side-card is-engineer">
              <p className="about-side-code mono" aria-hidden="true">
                {"</>"}
              </p>
              <h3>The engineer in me</h3>
              <p>Wants to know how it works, what it costs to build and what could break.</p>
              <ul className="about-side-tags">
                {sides.engineer.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about-side-card is-product">
              <p className="about-side-code" aria-hidden="true">
                ?
              </p>
              <h3>The product manager in me</h3>
              <p>Wants to know who it's for, why it matters and how we'll know it worked.</p>
              <ul className="about-side-tags">
                {sides.product.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="section" aria-labelledby="learning-title">
        <div className="container about-learning">
          <div>
            <h2 id="learning-title" className="section-title about-learning-title">
              Always learning
            </h2>
            <ul className="about-certs">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <span>{cert.name}</span>
                  <span className="mono">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-aside">
            <h3>Languages</h3>
            <p>{languages.join(" and ")}</p>
            <div className="btn-row">
              <Link to="/resume" className="btn btn-secondary">
                View resume
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
