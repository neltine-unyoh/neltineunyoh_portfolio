import { Link } from "react-router-dom";
import { products } from "../../data/site";
import ProductRow from "../../components/ProductRow/ProductRow";
import "./Work.css";

function Work() {
  return (
    <main>
      <section className="container page-top work-intro">
        <h1 className="page-title">Products I've built</h1>
        <p className="lead">
          A B2B platform used by real businesses, an AI product I took from idea to launch, and a fintech concept
          for farmers. Each case study covers the problem, my role, the decisions I made and what I learned.
        </p>
      </section>

      <section className="section work-list" aria-label="Case studies">
        <div className="container work-rows">
          {products.map((product, index) => (
            <ProductRow
              key={product.slug}
              product={product}
              featured={index === 0}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="work-more">
        <div className="container work-more-inner">
          <p>Want to see how I analyze products I didn't build?</p>
          <Link to="/teardowns" className="btn btn-secondary">
            Read my product teardowns
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Work;
