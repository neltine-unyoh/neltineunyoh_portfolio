import { Link } from "react-router-dom";
import { principles, process, teardowns } from "../../data/site";
import ProductVisual from "../../components/ProductVisual/ProductVisual";
import "./HowIThink.css";

function HowIThink() {
  return (
    <main>
      <section className="container page-top think-intro">
        <h1 className="page-title">Product teardowns</h1>
        <p className="lead">
          Products people use every day, taken apart. Each one asks a single question, looks at what works and what
          breaks, and ends with a change I'd make and how I'd measure it.
        </p>
      </section>

      <section className="section think-teardown-section" aria-label="Teardowns">
        <div className="container think-teardowns">
          {teardowns.map((item) => (
            <Link key={item.slug} to={`/teardowns/${item.slug}`} className="think-teardown">
              <ProductVisual type={item.visual} tint={item.tint} alt={`${item.name} illustration`} />
              <p className="think-teardown-meta">
                {item.name}, {item.category.toLowerCase()}
              </p>
              <h2>{item.question}</h2>
              <span className="text-link">Read the teardown</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="think-process" aria-labelledby="process-title">
        <div className="container">
          <h2 id="process-title" className="section-title think-process-title">
            How a decision moves from fuzzy to shipped
          </h2>
          <ol className="think-steps">
            {process.map((step, index) => (
              <li key={step.title}>
                <span className="think-step-num mono">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="beliefs-title">
        <div className="container">
          <h2 id="beliefs-title" className="section-title think-beliefs-title">
            What I believe about building products
          </h2>
          <ul className="think-principles">
            {principles.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default HowIThink;
