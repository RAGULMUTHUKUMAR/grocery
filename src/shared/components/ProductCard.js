import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import QuantitySelector from "./QuantitySelector";

function renderRating(rating) {
  const rounded = Math.round(rating);
  return Array.from({ length: 5 }, (_, index) => {
    if (index < rounded) {
      return <IoMdStar key={`star-${index}`} />;
    }

    if (index === rounded && rating % 1 >= 0.5) {
      return <IoMdStarHalf key={`half-${index}`} />;
    }

    return <IoMdStar key={`empty-${index}`} className="rating-muted" />;
  });
}

function ProductCard({
  product,
  quantity,
  onDecrement,
  onIncrement,
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
        <p className="rating mini-rating">{renderRating(product.rating)}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        {typeof quantity === "number" ? (
          <QuantitySelector
            value={quantity}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        ) : null}
        <button className="btn btn-solid card-btn" type="button">
          {actionLabel}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
