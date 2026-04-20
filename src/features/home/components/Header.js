import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import heroMain from "../../../assets/images/1.png";
import heroFresh from "../../../assets/images/35.png";
import heroFruit from "../../../assets/images/36.png";
import heroSlide1 from "../../../assets/images/2.png";
import heroSlide2 from "../../../assets/images/3.png";
import heroSlide3 from "../../../assets/images/4.png";
import { IoLeafOutline } from "react-icons/io5";

const slides = [
  {
    image: heroMain,
    title: "Healthy Groceries.",
    subtitle: "Fast Delivery. Better Life.",
    description:
      "Discover curated fruits, vegetables, dairy, and pantry essentials with same-day delivery and handpicked quality.",
    cta: "Shop Now",
  },
  {
    image: heroSlide1,
    title: "Fresh Organic Produce",
    subtitle: "Delivered Daily.",
    description:
      "Farm-fresh vegetables and fruits delivered straight to your doorstep with guaranteed quality.",
    cta: "Explore Fresh",
  },
  {
    image: heroSlide2,
    title: "Premium Dairy Products",
    subtitle: "Creamy & Delicious.",
    description:
      "Creamy milk, yogurt, cheese and more from trusted local farms and cooperatives.",
    cta: "View Dairy",
  },
  {
    image: heroSlide3,
    title: "Pantry Essentials",
    subtitle: "Stock Your Kitchen.",
    description:
      "Complete your kitchen with our selection of grains, spices, oils and specialty items.",
    cta: "Shop Pantry",
  },
];

const heroStats = [
  { label: "Happy Families", value: "18K+" },
  { label: "Average Delivery", value: "30 Min" },
  { label: "Farm Partners", value: "120+" },
];

function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative" id="home">
      <Navbar />

      <header className="pt-20 md:pt-24 lg:pt-28 overflow-hidden relative bg-white">
        <div className="absolute inset-x-0 top-0 h-72 md:h-96 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center py-12 md:py-16 lg:py-20">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6 shadow-sm">
                <IoLeafOutline className="text-lg" />
                <span>Freshly Packed Every Morning</span>
              </div>

              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wide uppercase shadow-lg shadow-slate-900/10">
                  <span>Curated for your table</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                  {slide.title}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    {slide.subtitle}
                  </span>
                </h1>

                <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-600">
                  {slide.description}
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-7 py-3 text-white text-sm font-semibold shadow-xl shadow-green-500/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
                  href="#products"
                  onClick={(e) => handleSmoothScroll(e, "#products")}
                >
                  {slide.cta}
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border-2 border-green-500 px-7 py-3 text-green-700 text-sm font-semibold hover:bg-green-50 transition"
                  href="#offers"
                  onClick={(e) => handleSmoothScroll(e, "#offers")}
                >
                  View Deals
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
                {heroStats.map((item) => (
                  <div key={item.label} className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm text-center">
                    <p className="text-3xl font-bold text-slate-900">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] bg-slate-900">
                <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px]">
                  {slides.map((item, index) => (
                    <div
                      key={item.title}
                      className={`absolute inset-0 transition-opacity duration-700 ease-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 px-5 pb-6">
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="rounded-full bg-white/90 p-3 text-slate-900 shadow-md transition hover:bg-white"
                      aria-label="Previous slide"
                    >
                      ‹
                    </button>
                    <div className="rounded-full bg-white/95 p-4 shadow-lg text-center">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Current selection</p>
                      <p className="mt-2 text-base font-semibold text-slate-900">{slide.title}</p>
                    </div>
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="rounded-full bg-white/90 p-3 text-slate-900 shadow-md transition hover:bg-white"
                      aria-label="Next slide"
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div className="absolute left-1/2 bottom-6 flex -translate-x-1/2 gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => changeSlide(index)}
                      className={`h-3 w-3 rounded-full transition-all duration-200 ${index === currentSlide ? "bg-white shadow-lg scale-125" : "bg-white/40 hover:bg-white"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/95 p-4 shadow-sm border border-slate-200 flex items-center gap-3">
                  <img
                    className="h-12 w-12 rounded-2xl object-cover"
                    src={heroFresh}
                    alt="Fresh produce"
                  />
                  <div>
                    <p className="text-sm text-slate-500">Fresh Picks</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">Picked Today</p>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/95 p-4 shadow-sm border border-slate-200 flex items-center gap-3">
                  <img
                    className="h-12 w-12 rounded-2xl object-cover"
                    src={heroFruit}
                    alt="Fresh fruit"
                  />
                  <div>
                    <p className="text-sm text-slate-500">Top Rated Fruit</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">4.9 Avg Rating</p>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/95 p-4 shadow-sm border border-slate-200 hidden sm:flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 font-semibold">✓</div>
                  <div>
                    <p className="text-sm text-slate-500">Safe & Sustainable</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">Local Farms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
