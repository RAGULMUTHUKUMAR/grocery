import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAppState from "../../../shared/hooks/useAppState";

function validateLogin(values) {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.password.trim()) {
    errors.password = "Password is required.";
  } else if (values.password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  return errors;
}

function LoginPage() {
  const navigate = useNavigate();
  const { dispatch } = useAppState();
  const [values, setValues] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const errors = useMemo(() => validateLogin(values), [values]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setValues((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleBlur(event) {
    const { name } = event.target;
    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length > 0) {
      setTouched({ email: true, password: true });
      return;
    }

    dispatch({
      type: "LOGIN",
      user: {
        name: values.email.split("@")[0],
        email: values.email,
        remember: values.remember
      }
    });

    navigate("/");
  }

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

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean((submitted || touched.email) && errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {(submitted || touched.email) && errors.email ? (
            <p className="form-error" id="email-error" role="alert">
              {errors.email}
            </p>
          ) : null}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean((submitted || touched.password) && errors.password)}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          {(submitted || touched.password) && errors.password ? (
            <p className="form-error" id="password-error" role="alert">
              {errors.password}
            </p>
          ) : null}

          <div className="login-row">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={values.remember}
                onChange={handleChange}
              />
              Remember me
            </label>
            <a href="#home">Forgot password?</a>
          </div>

          <button className="btn btn-solid" type="submit">
            Sign In
          </button>
          {submitted && Object.keys(errors).length === 0 ? (
            <p className="form-success" role="status" aria-live="polite">
              Signing you in and restoring your shopping session.
            </p>
          ) : null}
        </form>

        <p className="login-back">
          <Link to="/">Back to Home</Link>
        </p>
      </section>
    </main>
  );
}

export default LoginPage;
