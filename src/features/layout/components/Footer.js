import { RiInstagramLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";
import useAppState from "../../../shared/hooks/useAppState";

function Footer() {
  const { state, dispatch } = useAppState();
  const [email, setEmail] = useState(state.subscribedEmail || "");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    dispatch({ type: "SUBSCRIBE", email });
  }

  return (
    <footer className="site-footer" id="contact">
      <section className="shell newsletter">
        <div>
          <p className="eyebrow">Stay Updated</p>
          <h2>Join Our Weekly Grocery Deals</h2>
          <p>
            Get fresh offers, seasonal picks, and healthy recipe ideas.
            {state.subscribedEmail ? ` Subscribed as ${state.subscribedEmail}.` : ""}
          </p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="Enter your email"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "newsletter-error" : "newsletter-success"}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error) {
                setError("");
              }
            }}
          />
          <button className="btn btn-solid" type="submit">
            {state.subscribedEmail ? "Update email" : "Subscribe"}
          </button>
        </form>
        <p className="newsletter-feedback" id="newsletter-error" role="alert">
          {error}
        </p>
        <p className="newsletter-feedback" id="newsletter-success" role="status" aria-live="polite">
          {!error && state.subscribedEmail
            ? `Subscribed successfully as ${state.subscribedEmail}.`
            : ""}
        </p>
      </section>

      <section className="shell footer-grid">
        <article>
          <h3>GreenBasket</h3>
          <p>
            Your trusted grocery partner for fresh food, daily essentials, and
            instant doorstep delivery.
          </p>
        </article>

        <article>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </article>

        <article>
          <h4>Categories</h4>
          <ul>
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Dairy</li>
            <li>Pantry</li>
          </ul>
        </article>

        <article>
          <h4>Connect With Us</h4>
          <div className="social-row">
            <a href="https://instagram.com" aria-label="Instagram">
              <RiInstagramLine />
            </a>
            <a href="https://web.whatsapp.com" aria-label="Whatsapp">
              <IoLogoWhatsapp />
            </a>
            <a href="https://google.com" aria-label="Google Plus">
              <TiSocialGooglePlus />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookSquare />
            </a>
          </div>
        </article>
      </section>

      <div className="footer-bottom">
        <p>© 2026 GreenBasket. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
