import logo from "../../../assets/images/logo.png";
import heroMain from "../../../assets/images/1.png";
import heroFresh from "../../../assets/images/35.png";
import heroFruit from "../../../assets/images/36.png";
import { MdAccountCircle, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoLeafOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAppState from "../../../shared/hooks/useAppState";

function Header() {
  const { state, dispatch } = useAppState();
  const totalItems = Object.values(state.cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="hero-wrap" id="home">
      <nav className="site-nav">
        <Link to="/" className="brand" aria-label="GreenBasket Home">
          <img className="brand-logo" src={logo} alt="GreenBasket logo" />
          <span className="brand-text">GreenBasket</span>
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#offers">Offers</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav-actions">
          <button
            className="btn btn-outline cart-trigger"
            type="button"
            onClick={() => dispatch({ type: "TOGGLE_CART", value: true })}
            aria-haspopup="dialog"
            aria-expanded={state.isCartOpen}
            aria-controls="cart-drawer-title"
          >
            <MdOutlineShoppingCartCheckout />
            Cart
            <span className="cart-badge">{totalItems}</span>
            <span className="visually-hidden">{totalItems} items in cart</span>
          </button>
          {state.user ? (
            <button
              type="button"
              className="account-pill"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              <MdAccountCircle />
              {state.user.name}
            </button>
          ) : (
            <Link to="/login" className="account-link" aria-label="Login page">
              <MdAccountCircle />
            </Link>
          )}
        </div>
      </nav>

      <header className="hero-area">
        <div className="hero-copy">
          <p className="hero-kicker">
            <IoLeafOutline />
            Freshly Packed Every Morning
          </p>
          <h1>Healthy Groceries. Fast Delivery. Better Life.</h1>
          <p>
            Discover curated fruits, vegetables, dairy, and pantry essentials
            with same-day delivery and handpicked quality.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="#products">
              Shop Now
            </a>
            <a className="btn btn-outline" href="#offers">
              View Deals
            </a>
          </div>
        </div>

        <div className="hero-stat-panel">
          <article>
            <h3>18K+</h3>
            <p>Happy Families</p>
          </article>
          <article>
            <h3>30 Min</h3>
            <p>Average Delivery</p>
          </article>
          <article>
            <h3>120+</h3>
            <p>Farm Partners</p>
          </article>
        </div>

        <div className="hero-media" aria-hidden="true">
          <img className="hero-image-main" src={heroMain} alt="" />
          <article className="hero-media-card hero-media-card-top">
            <img src={heroFresh} alt="" />
            <div>
              <p>Fresh Picks</p>
              <strong>Picked today</strong>
            </div>
          </article>
          <article className="hero-media-card hero-media-card-bottom">
            <img src={heroFruit} alt="" />
            <div>
              <p>Top Rated Fruit</p>
              <strong>4.9 Avg Rating</strong>
            </div>
          </article>
        </div>
      </header>
    </div>
  );
}

export default Header;
