import React from "react";
import { Link } from "react-router-dom";

function Loginpage() {
  return (
    <main className="login-shell">
      <section className="login-card">
        <div className="login-copy">
          <p className="eyebrow">Welcome Back</p>
          <h1>Sign In To Continue Shopping</h1>
          <p>
            Access your saved cart, favorite products, and express checkout.
          </p>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="name@example.com" required />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter your password" required />

          <div className="login-row">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#home">Forgot password?</a>
          </div>

          <button className="btn btn-solid" type="submit">
            Sign In
          </button>
        </form>

        <p className="login-back">
          <Link to="/">Back to Home</Link>
        </p>
      </section>
    </main>
  );
}

export default Loginpage;
