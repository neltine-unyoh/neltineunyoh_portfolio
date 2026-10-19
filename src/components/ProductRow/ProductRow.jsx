import { Link } from "react-router-dom";
import ProductVisual from "../ProductVisual/ProductVisual";
import "./ProductRow.css";

// One built product, shown as a large row. `featured` gives Kora its stats.
function ProductRow({ product, featured = false, reverse = false }) {
  const link = `/work/${product.slug}`;

  return (
    <article className={`product-row ${featured ? "is-featured" : ""} ${reverse ? "is-reverse" : ""}`}>
      <Link to={link} className="product-row-visual" tabIndex={-1} aria-hidden="true">
        <ProductVisual
          type={product.visual}
          tint={product.tint}
          image={product.image}
          alt={`${product.name} interface`}
          size={featured ? "large" : "default"}
        />
      </Link>

      <div className="product-row-text">
        <p className="product-row-meta">
          {product.role}, {product.company}
        </p>
        <h3 className="product-row-name">
          <Link to={link}>{product.name}</Link>
        </h3>

        {product.stats && (
          <dl className="product-row-stats">
            {product.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <Link to={link} className="text-link">
          Read the case study
        </Link>
      </div>
    </article>
  );
}

export default ProductRow;
