import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container page-top" style={{ paddingBottom: "var(--section)" }}>
      <h1 className="page-title">This page doesn't exist.</h1>
      <p className="lead" style={{ margin: "24px 0 32px" }}>
        The link may be old or mistyped. Try the homepage or my work instead.
      </p>
      <div className="btn-row">
        <Link to="/" className="btn btn-primary">
          Go to the homepage
        </Link>
        <Link to="/work" className="btn btn-secondary">
          See my work
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
