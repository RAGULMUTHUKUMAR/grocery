import { useEffect, useMemo, useState } from "react";
import {
  CATEGORY_ALL,
  MAX_CART_QUANTITY,
  PRODUCT_CATEGORIES,
} from "../constants/catalog";
import ProductCard from "../../../shared/components/ProductCard";
import EmptyState from "../../../shared/components/EmptyState";
import SectionHeading from "../../../shared/components/SectionHeading";
import useAppState from "../../../shared/hooks/useAppState";
import { listProducts } from "../services/productService";
import { createQuantityMap, filterProductsByCategory } from "../utils/catalog";

function ProductCatalog() {
  const { dispatch } = useAppState();
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_ALL);
  const [status, setStatus] = useState("loading");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("featured");

  const hasActiveFilters =
    selectedCategory !== CATEGORY_ALL || searchTerm.trim().length > 0 || sortOrder !== "featured";

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

  const filteredProducts = useMemo(() => {
    const byCategory = filterProductsByCategory(products, selectedCategory);
    const bySearch = byCategory.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    const sortedProducts = [...bySearch];

    if (sortOrder === "price-low") {
      sortedProducts.sort((left, right) => left.price - right.price);
    } else if (sortOrder === "price-high") {
      sortedProducts.sort((left, right) => right.price - left.price);
    } else if (sortOrder === "rating") {
      sortedProducts.sort((left, right) => right.rating - left.rating);
    } else {
      sortedProducts.sort((left, right) => Number(right.featured) - Number(left.featured));
    }

    return sortedProducts;
  }, [products, searchTerm, selectedCategory, sortOrder]);

  const handleDecrement = (id) => {
    setCounts((prev) => ({ ...prev, [id]: Math.max((prev[id] ?? 0) - 1, 0) }));
  };

  const handleIncrement = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.min((prev[id] ?? 0) + 1, MAX_CART_QUANTITY),
    }));
  };

  const handleAddToCart = (product) => {
    const selectedQuantity = counts[product.id] ?? 0;
    const quantityToAdd = selectedQuantity > 0 ? selectedQuantity : 1;

    dispatch({ type: "ADD_TO_CART", product, quantity: quantityToAdd });
    setCounts((prev) => ({ ...prev, [product.id]: 0 }));
  };

  const clearFilters = () => {
    setSelectedCategory(CATEGORY_ALL);
    setSearchTerm("");
    setSortOrder("featured");
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

      <div className="catalog-toolbar">
        <div className="catalog-input-wrap">
          <label className="catalog-label" htmlFor="catalog-search">
            Search products
          </label>
          <input
            className="catalog-search"
            id="catalog-search"
            type="search"
            placeholder="Search groceries"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div className="catalog-input-wrap">
          <label className="catalog-label" htmlFor="catalog-sort">
            Sort by
          </label>
          <select
            className="catalog-sort"
            id="catalog-sort"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="featured">Featured first</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
        <button
          className="btn btn-outline btn-reset"
          type="button"
          onClick={clearFilters}
          disabled={!hasActiveFilters}
        >
          Clear filters
        </button>
      </div>

      <p className="status-copy" role="status" aria-live="polite">
        {status === "loading" ? "Loading products..." : `${filteredProducts.length} products shown`}
      </p>
      {status === "error" ? (
        <EmptyState
          title="Catalog unavailable"
          description="We could not load grocery items right now. Please try again in a moment."
        />
      ) : null}
      {status === "ready" && filteredProducts.length === 0 ? (
        <EmptyState
          title="No products found"
          description={
            searchTerm.trim()
              ? `No results for "${searchTerm.trim()}". Try another keyword or clear filters.`
              : "Try another category to discover available grocery items."
          }
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
              onAction={() => handleAddToCart(product)}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default ProductCatalog;
