import { IoClose } from "react-icons/io5";
import useAppState from "../hooks/useAppState";

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function CartDrawer() {
  const { state, dispatch } = useAppState();
  const items = Object.values(state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className={`cart-shell ${state.isCartOpen ? "cart-shell-open" : ""}`}>
      <button
        type="button"
        className="cart-backdrop"
        aria-label="Close cart drawer"
        onClick={() => dispatch({ type: "TOGGLE_CART", value: false })}
      />
      <aside className={`cart-drawer ${state.isCartOpen ? "cart-drawer-open" : ""}`}>
        <div className="cart-drawer-header">
          <div>
            <p className="eyebrow">Your Basket</p>
            <h2>{totalItems} items selected</h2>
          </div>
          <button
            type="button"
            className="cart-close"
            onClick={() => dispatch({ type: "TOGGLE_CART", value: false })}
            aria-label="Close cart"
          >
            <IoClose />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <h3>Your cart is empty.</h3>
            <p>Add products from the catalog to start building your order.</p>
          </div>
        ) : (
          <div className="cart-list">
            {items.map(({ product, quantity }) => (
              <article className="cart-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="cart-item-copy">
                  <h3>{product.name}</h3>
                  <p>{formatCurrency(product.price)}</p>
                  <div className="cart-item-actions">
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_CART_ITEM",
                          productId: product.id,
                          quantity: quantity - 1
                        })
                      }
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_CART_ITEM",
                          productId: product.id,
                          quantity: quantity + 1
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="cart-remove"
                  onClick={() =>
                    dispatch({ type: "REMOVE_CART_ITEM", productId: product.id })
                  }
                >
                  Remove
                </button>
              </article>
            ))}
          </div>
        )}

        <div className="cart-footer">
          <div className="cart-summary-row">
            <span>Subtotal</span>
            <strong>{formatCurrency(subtotal)}</strong>
          </div>
          {state.claimedOfferCode ? (
            <p className="cart-offer">Offer applied: {state.claimedOfferCode}</p>
          ) : null}
          <button className="btn btn-solid cart-checkout" type="button">
            Continue to checkout
          </button>
        </div>
      </aside>
    </div>
  );
}

export default CartDrawer;
