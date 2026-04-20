// Navbar.jsx
import { useState, useEffect, useRef } from "react";
import logo from "../../../assets/images/logo.png";
import { MdAccountCircle, MdOutlineShoppingCartCheckout, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import useAppState from "../../../shared/hooks/useAppState";

function Navbar() {
  const { state, dispatch } = useAppState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const totalItems = Object.values(state.cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#offers", label: "Offers" },
    { href: "#contact", label: "Contact" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-white/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="GreenBasket Home"
          >
            <img
              className="h-8 w-auto sm:h-10 transition-transform duration-300 group-hover:scale-105"
              src={logo}
              alt="GreenBasket logo"
            />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              GreenBasket
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 text-gray-700 hover:from-green-100 hover:to-emerald-100 transition-all duration-200 shadow-sm hover:shadow-md"
              type="button"
              onClick={() => dispatch({ type: "TOGGLE_CART", value: true })}
              aria-haspopup="dialog"
              aria-expanded={state.isCartOpen}
              aria-controls="cart-drawer-title"
            >
              <MdOutlineShoppingCartCheckout className="text-xl" />
              <span className="font-medium">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                  {totalItems}
                </span>
              )}
            </button>

            {state.user ? (
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                <MdAccountCircle className="text-xl" />
                <span className="font-medium">{state.user.name}</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-green-500 text-green-600 hover:bg-green-50 transition-all duration-200"
                aria-label="Login page"
              >
                <MdAccountCircle className="text-xl" />
                <span className="font-medium">Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <MdClose className="text-2xl text-gray-700" />
            ) : (
              <MdMenu className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <img className="h-8 w-auto" src={logo} alt="GreenBasket logo" />
              <span className="text-xl font-bold text-green-600">GreenBasket</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <MdClose className="text-2xl text-gray-700" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex-1 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="block px-6 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Actions */}
          <div className="p-6 border-t border-gray-100 space-y-4">
            <button
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 text-gray-700 hover:from-green-100 hover:to-emerald-100 transition-all duration-200"
              type="button"
              onClick={() => {
                dispatch({ type: "TOGGLE_CART", value: true });
                setIsMobileMenuOpen(false);
              }}
            >
              <MdOutlineShoppingCartCheckout className="text-xl" />
              <span className="font-medium">Cart</span>
              {totalItems > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {totalItems}
                </span>
              )}
            </button>

            {state.user ? (
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all duration-200"
                onClick={() => {
                  dispatch({ type: "LOGOUT" });
                  setIsMobileMenuOpen(false);
                }}
              >
                <MdAccountCircle className="text-xl" />
                <span className="font-medium">{state.user.name}</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-green-500 text-green-600 hover:bg-green-50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MdAccountCircle className="text-xl" />
                <span className="font-medium">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;