import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import QuantitySelector from "./QuantitySelector";

function renderRating(rating) {
  const rounded = Math.round(rating);
  return Array.from({ length: 5 }, (_, index) => {
    if (index < rounded) {
      return <IoMdStar key={`star-${index}`} aria-hidden="true" />;
    }

    if (index === rounded && rating % 1 >= 0.5) {
      return <IoMdStarHalf key={`half-${index}`} aria-hidden="true" />;
    }

    return <IoMdStar key={`empty-${index}`} className="rating-muted" aria-hidden="true" />;
  });
}

function ProductCard({
  product,
  quantity,
  onDecrement,
  onIncrement,
  onAction,
  actionLabel = "Add to cart",
  compact = false
}) {
  return (
    <article className={compact ? "product-tile" : "catalog-card"}>
      <img
        className={compact ? "product-tile-image" : "catalog-image"}
        src={product.image}
        alt={product.name}
      />
      <div className={compact ? "product-tile-body" : "catalog-body"}>
        <h3>{product.name}</h3>
        <p className="rating mini-rating" aria-label={`Rated ${product.rating} out of 5`}>
          {renderRating(product.rating)}
        </p>
        <p className="price">${product.price.toFixed(2)}</p>
        {typeof quantity === "number" ? (
          <QuantitySelector
            value={quantity}
            max={10}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        ) : null}
        <button className="btn btn-solid card-btn" type="button" onClick={onAction}>
          {actionLabel}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
