import { Link, useParams } from "react-router-dom";
import { products } from "../../data/site";
import ProductVisual from "../../components/ProductVisual/ProductVisual";
import { ArrowLeft, ArrowRight } from "../../components/Icons/Icons";
import NotFound from "../NotFound/NotFound";
import "../../styles/detail.css";

function CaseStudy() {
  const { slug } = useParams();
  const index = products.findIndex((item) => item.slug === slug);

  if (index === -1) return <NotFound />;

  const product = products[index];
  const next = products[(index + 1) % products.length];
  const tags = product.modules || product.actors;

  return (
    <main className="container page-top">
      <Link to="/work" className="detail-back">
        <ArrowLeft />
        All work
      </Link>

      <header className="detail-hero">
        <p className="detail-category">{product.category}</p>
        <h1 className="detail-title">{product.name}</h1>
        <p className="lead">{product.summary}</p>
        <dl className="detail-facts">
          <div>
            <dt>My role</dt>
            <dd>{product.role}</dd>
          </div>
          <div>
            <dt>Company</dt>
            <dd>{product.company}</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>{product.period}</dd>
          </div>
        </dl>
      </header>

      <ProductVisual
        type={product.visual}
        tint={product.tint}
        image={product.image}
        alt={`${product.name} interface`}
        size="large"
      />

      <dl className="detail-stats">
        {product.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>

      <section className="detail-block" style={{ marginTop: "clamp(56px, 8vw, 104px)" }}>
        <h2 className="detail-block-title">The problem</h2>
        <div className="detail-block-body">
          <h3 style={{ fontSize: "var(--text-h3)", color: "var(--ink)" }}>{product.problem.title}</h3>
          {product.problem.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {tags && (
            <ul className="tags" aria-label={product.modules ? "Product modules" : "Who it connects"}>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="detail-block">
        <h2 className="detail-block-title">What I did</h2>
        <ul className="detail-steps">
          {product.work.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="detail-block">
        <h2 className="detail-block-title">Decisions I made</h2>
        <ul className="detail-decisions">
          {product.decisions.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="detail-highlight">
        <h2>Outcome</h2>
        <p>{product.outcome}</p>
      </section>

      <section className="detail-highlight is-quiet">
        <h2>What I learned</h2>
        <p>{product.learning}</p>
      </section>

      <nav className="detail-next" aria-label="Next case study">
        <p>Next case study</p>
        <Link to={`/work/${next.slug}`}>
          {next.name}
          <ArrowRight />
        </Link>
      </nav>
    </main>
  );
}

export default CaseStudy;
