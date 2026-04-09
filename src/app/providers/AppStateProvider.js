import { createContext, useEffect, useMemo, useReducer } from "react";

const STORAGE_KEY = "greenbasket-app-state";

const initialState = {
  cart: {},
  user: null,
  isCartOpen: false,
  subscribedEmail: "",
  claimedOfferCode: "",
  notifications: []
};

function readStoredState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return initialState;
    }

    return { ...initialState, ...JSON.parse(raw) };
  } catch (error) {
    return initialState;
  }
}

function createNotification(message, tone = "info") {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    message,
    tone
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const currentQuantity = state.cart[action.product.id]?.quantity ?? 0;
      const nextQuantity = currentQuantity + action.quantity;

      return {
        ...state,
        cart: {
          ...state.cart,
          [action.product.id]: {
            product: action.product,
            quantity: nextQuantity
          }
        },
        isCartOpen: true,
        notifications: [
          ...state.notifications,
          createNotification(`${action.product.name} added to cart.`, "success")
        ]
      };
    }
    case "UPDATE_CART_ITEM": {
      const nextCart = { ...state.cart };
      if (action.quantity <= 0) {
        delete nextCart[action.productId];
      } else if (nextCart[action.productId]) {
        nextCart[action.productId] = {
          ...nextCart[action.productId],
          quantity: action.quantity
        };
      }

      return {
        ...state,
        cart: nextCart
      };
    }
    case "REMOVE_CART_ITEM": {
      const nextCart = { ...state.cart };
      const removedItem = nextCart[action.productId]?.product?.name;
      delete nextCart[action.productId];
      return {
        ...state,
        cart: nextCart,
        notifications: removedItem
          ? [
              ...state.notifications,
              createNotification(`${removedItem} removed from cart.`, "info")
            ]
          : state.notifications
      };
    }
    case "TOGGLE_CART":
      return {
        ...state,
        isCartOpen: action.value ?? !state.isCartOpen
      };
    case "LOGIN":
      return {
        ...state,
        user: action.user,
        notifications: [
          ...state.notifications,
          createNotification(`Welcome back, ${action.user.name}.`, "success")
        ]
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        notifications: [
          ...state.notifications,
          createNotification("You have signed out.", "info")
        ]
      };
    case "SUBSCRIBE":
      return {
        ...state,
        subscribedEmail: action.email,
        notifications: [
          ...state.notifications,
          createNotification("Newsletter subscription saved.", "success")
        ]
      };
    case "CLAIM_OFFER":
      return {
        ...state,
        claimedOfferCode: action.code,
        notifications: [
          ...state.notifications,
          createNotification(`${action.code} is ready for checkout.`, "success")
        ]
      };
    case "DISMISS_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter((item) => item.id !== action.id)
      };
    default:
      return state;
  }
}

export const AppStateContext = createContext(null);

function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, readStoredState);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cart: state.cart,
        user: state.user,
        subscribedEmail: state.subscribedEmail,
        claimedOfferCode: state.claimedOfferCode
      })
    );
  }, [state.cart, state.user, state.subscribedEmail, state.claimedOfferCode]);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export default AppStateProvider;
