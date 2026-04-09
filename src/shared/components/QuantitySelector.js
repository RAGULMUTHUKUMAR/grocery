function QuantitySelector({ value, onDecrement, onIncrement }) {
  return (
    <div className="qty-control" aria-label="Quantity selector">
      <button type="button" onClick={onDecrement} aria-label="Decrease quantity">
        -
      </button>
      <span>{value}</span>
      <button type="button" onClick={onIncrement} aria-label="Increase quantity">
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
