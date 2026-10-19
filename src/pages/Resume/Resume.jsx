import { Link } from "react-router-dom";
import { profile, experience, skills, education, certifications, languages, stats } from "../../data/site";
import { useScrollReveal } from "../../components/CaseKit/CaseKit";
import "../Kora/Kora.css";
import "./Resume.css";

function Resume() {
  useScrollReveal();
  const jobs = [...experience].reverse();

  return (
    <main className="kora resume-page">
      {/* ---------- Header ---------- */}
      <section className="resume-hero">
        <div className="container resume-hero-inner">
          <div className="resume-id">
            <img className="resume-avatar" src={profile.photo} alt={`Portrait of ${profile.name}`} width="900" height="1125" />
            <div>
              <h1 className="resume-name">{profile.name}</h1>
              <p className="resume-role">{profile.role} · B2B SaaS, fintech and AI</p>
              <ul className="resume-chips">
                <li>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>{profile.phone}</li>
                <li>
                  {profile.location} ({profile.timezone}), open to remote
                </li>
              </ul>
            </div>
          </div>
          <div className="btn-row resume-actions">
            <a href={profile.resumeUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
              Download PDF
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <div className="container resume-layout">
        {/* ---------- Main column ---------- */}
        <div className="resume-main">
          <section className="resume-block kr" aria-labelledby="r-summary">
            <h2 id="r-summary">Summary</h2>
            <p className="resume-summary">
              Product manager with a software engineering degree and nearly two years owning B2B SaaS, fintech and
              AI-powered products end to end: discovery, PRDs, roadmap, launch, adoption and sales support. A former
              full-stack developer who works closely with engineering, runs client demos and onboarding, and turns
              usage data into clear product decisions. Fluent in English and French.
            </p>
            <dl className="resume-glance">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd>{stat.value}</dd>
                  <dt>{stat.label}</dt>
                </div>
              ))}
            </dl>
          </section>

          <section className="resume-block" aria-labelledby="r-experience">
            <h2 id="r-experience" className="kr">
              Experience
            </h2>
            <ol className="resume-timeline">
              {jobs.map((job, index) => (
                <li key={job.company} className="kr">
                  <span className={`resume-dot ${index === 0 ? "is-current" : ""}`} aria-hidden="true"></span>
                  <div className="resume-job-head">
                    <div>
                      <h3>{job.company}</h3>
                      <p className="resume-job-role">{job.role}</p>
                    </div>
                    <div className="resume-job-when">
                      <span className="resume-period">{job.period}</span>
                      <span className="resume-place">{job.place}</span>
                    </div>
                  </div>
                  <ul className="resume-points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <section className="resume-block kr" aria-labelledby="r-projects">
            <h2 id="r-projects">Selected projects</h2>
            <ul className="resume-projects">
              <li>
                <Link to="/work/agrilock">
                  <strong>AgriLock</strong>
                  <span>Led product and development of a smart-contract agri-finance concept for farmers, financiers and buyers.</span>
                </Link>
              </li>
              <li>
                <Link to="/teardowns/whatsapp">
                  <strong>WhatsApp teardown</strong>
                  <span>Reverse engineered the product philosophy, habit loop and trade-offs behind WhatsApp.</span>
                </Link>
              </li>
              <li>
                <Link to="/teardowns/mtn-momo">
                  <strong>MTN MoMo teardown</strong>
                  <span>Reverse engineered the trust model and product decisions behind MTN MoMo Cameroon.</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>

        {/* ---------- Sidebar ---------- */}
        <aside className="resume-side">
          <section className="resume-card kr" aria-labelledby="r-skills">
            <h2 id="r-skills">Skills</h2>
            {skills.map((group) => (
              <div key={group.group} className="resume-skill-group">
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-card kr" aria-labelledby="r-education">
            <h2 id="r-education">Education</h2>
            <p className="resume-degree">{education.degree}</p>
            <p className="resume-school">
              {education.school} · {education.period}
            </p>
          </section>

          <section className="resume-card kr" aria-labelledby="r-certs">
            <h2 id="r-certs">Certifications</h2>
            <ul className="resume-certs">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <span>{cert.name}</span>
                  <span className="resume-year">{cert.year}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="resume-card kr" aria-labelledby="r-languages">
            <h2 id="r-languages">Languages</h2>
            <ul className="resume-langs">
              {languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}

export default Resume;
