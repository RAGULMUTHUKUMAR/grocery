function QuantitySelector({ value, max = 10, onDecrement, onIncrement }) {
  return (
    <div className="qty-control" aria-label="Quantity selector">
      <button
        type="button"
        onClick={onDecrement}
        aria-label="Decrease quantity"
        disabled={value <= 0}
      >
        -
      </button>
      <span aria-live="polite" aria-atomic="true">
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label="Increase quantity"
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
