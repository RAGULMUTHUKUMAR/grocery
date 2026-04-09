import { useEffect, useState } from "react";
import { MdLocalOffer } from "react-icons/md";
import EmptyState from "../../../shared/components/EmptyState";
import ProductCard from "../../../shared/components/ProductCard";
import SectionHeading from "../../../shared/components/SectionHeading";
import useAppState from "../../../shared/hooks/useAppState";
import { listFeaturedProducts } from "../services/productService";

function FeaturedProducts() {
  const { dispatch, state } = useAppState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let active = true;

    async function loadProducts() {
      const items = await listFeaturedProducts();

      if (active) {
        setProducts(items);
      }
    }

    loadProducts();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="section shell best-section">
      <SectionHeading
        eyebrow="Top Picks"
        title="Best Selling Essentials"
        description="These are the items customers reorder most because they deliver strong value and dependable quality."
      />
      {products.length === 0 ? (
        <EmptyState
          title="Featured products are loading"
          description="The best-selling collection will appear here shortly."
        />
      ) : (
        <div className="best-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              compact
              actionLabel="Order Now"
              onAction={() => dispatch({ type: "ADD_TO_CART", product, quantity: 1 })}
            />
          ))}
        </div>
      )}

      <div className="deal-banner">
        <div>
          <p className="eyebrow">Limited Time</p>
          <h3>Get 25% Off On Your First Purchase</h3>
          <p>Use code FRESH25 at checkout and enjoy instant savings.</p>
        </div>
        <button
          className="btn btn-outline"
          type="button"
          onClick={() => dispatch({ type: "CLAIM_OFFER", code: "FRESH25" })}
        >
          <MdLocalOffer />
          {state.claimedOfferCode ? "Offer Added" : "Claim Offer"}
        </button>
      </div>
    </section>
  );
}

export default FeaturedProducts;
