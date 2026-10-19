import { Link, useParams } from "react-router-dom";
import { teardowns } from "../../data/site";
import ProductVisual from "../../components/ProductVisual/ProductVisual";
import { ArrowLeft, ArrowRight, Check, Cross } from "../../components/Icons/Icons";
import NotFound from "../NotFound/NotFound";
import "../../styles/detail.css";
import "./Teardown.css";

function Teardown() {
  const { slug } = useParams();
  const index = teardowns.findIndex((item) => item.slug === slug);

  if (index === -1) return <NotFound />;

  const item = teardowns[index];
  const next = teardowns[(index + 1) % teardowns.length];

  return (
    <main className="container page-top">
      <Link to="/teardowns" className="detail-back">
        <ArrowLeft />
        Product teardowns
      </Link>

      <header className="detail-hero">
        <p className="detail-category">
          Product teardown: {item.name}, {item.category.toLowerCase()}
        </p>
        <h1 className="detail-question">{item.question}</h1>
        <p className="lead">{item.summary}</p>
      </header>

      <ProductVisual type={item.visual} tint={item.tint} alt={`${item.name} illustration`} size="large" />

      <section className="detail-block" style={{ marginTop: "clamp(56px, 8vw, 104px)" }}>
        <h2 className="detail-block-title">Who it serves</h2>
        <ul className="detail-steps">
          {item.users.map((user) => (
            <li key={user.title}>
              <h3>{user.title}</h3>
              <p>{user.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="detail-block">
        <h2 className="detail-block-title">What works, and what breaks</h2>
        <div className="teardown-columns">
          <div>
            <h3>What works</h3>
            <ul className="teardown-list is-good">
              {item.works.map((point) => (
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
              {item.breaks.map((point) => (
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
      </section>

      <section className="detail-highlight teardown-rec">
        <h2>What I'd build</h2>
        <p>{item.recommendation.title}</p>
        <p className="teardown-rec-body">{item.recommendation.body}</p>
      </section>

      <section className="detail-block">
        <h2 className="detail-block-title">How I'd measure it</h2>
        <ol className="teardown-metrics">
          {item.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ol>
      </section>

      <nav className="detail-next" aria-label="Next teardown">
        <p>Next teardown</p>
        <Link to={`/teardowns/${next.slug}`}>
          {next.name}
          <ArrowRight />
        </Link>
      </nav>
    </main>
  );
}

export default Teardown;
