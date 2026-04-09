import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <p className="eyebrow">404 Error</p>
        <h1>We could not find that page.</h1>
        <p>The page may have moved or the URL may be incorrect.</p>
        <Link className="btn btn-solid" to="/">
          Return Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
