import { useEffect, useMemo, useState } from "react";
import {
  CATEGORY_ALL,
  MAX_CART_QUANTITY,
  PRODUCT_CATEGORIES,
} from "../constants/catalog";
import ProductCard from "../../../shared/components/ProductCard";
import EmptyState from "../../../shared/components/EmptyState";
import SectionHeading from "../../../shared/components/SectionHeading";
import { listProducts } from "../services/productService";
import { createQuantityMap, filterProductsByCategory } from "../utils/catalog";

function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_ALL);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;

    async function loadProducts() {
      try {
        const items = await listProducts();

        if (!active) {
          return;
        }

        setProducts(items);
        setCounts(createQuantityMap(items));
        setStatus("ready");
      } catch (error) {
        if (active) {
          setStatus("error");
        }
      }
    }

    loadProducts();

    return () => {
      active = false;
    };
  }, []);

  const filteredProducts = useMemo(
    () => filterProductsByCategory(products, selectedCategory),
    [products, selectedCategory]
  );

  const handleDecrement = (id) => {
    setCounts((prev) => ({ ...prev, [id]: Math.max((prev[id] ?? 0) - 1, 0) }));
  };

  const handleIncrement = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.min((prev[id] ?? 0) + 1, MAX_CART_QUANTITY),
    }));
  };

  return (
    <section className="section shell" id="products">
      <SectionHeading
        eyebrow="Catalog"
        title="Pick Your Daily Grocery Favorites"
        description="Explore curated essentials with clean pricing, reliable freshness, and a smoother cart experience."
      />

      <div className="category-row">
        <div className="chip-group">
          {PRODUCT_CATEGORIES.map((category) => (
            <button
              className={`chip ${
                selectedCategory === category.key ? "chip-active" : ""
              }`}
              onClick={() => setSelectedCategory(category.key)}
              key={category.key}
              type="button"
            >
              {category.label}
            </button>
          ))}
        </div>

        <p className="result-count">{filteredProducts.length} items available</p>
      </div>

      {status === "loading" ? <p className="status-copy">Loading products...</p> : null}
      {status === "error" ? (
        <EmptyState
          title="Catalog unavailable"
          description="We could not load grocery items right now. Please try again in a moment."
        />
      ) : null}
      {status === "ready" && filteredProducts.length === 0 ? (
        <EmptyState
          title="No products found"
          description="Try another category to discover available grocery items."
        />
      ) : null}

      {status === "ready" && filteredProducts.length > 0 ? (
        <div className="catalog-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={counts[product.id] ?? 0}
              onDecrement={() => handleDecrement(product.id)}
              onIncrement={() => handleIncrement(product.id)}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default ProductCatalog;
