import React from "react";
import logo from "./images/logo.png";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoLeafOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
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
          <button className="btn btn-outline" type="button">
            <MdOutlineShoppingCartCheckout />
            Cart
          </button>
          <Link to="/login" className="account-link" aria-label="Login page">
            <MdAccountCircle />
          </Link>
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
      </header>
    </div>
  );
}

export default Header;
