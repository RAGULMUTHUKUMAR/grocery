import { useEffect } from "react";
import useAppState from "../hooks/useAppState";

function ToastViewport() {
  const { state, dispatch } = useAppState();

  useEffect(() => {
    if (state.notifications.length === 0) {
      return undefined;
    }

    const latest = state.notifications[state.notifications.length - 1];
    const timer = window.setTimeout(() => {
      dispatch({ type: "DISMISS_NOTIFICATION", id: latest.id });
    }, 2800);

    return () => window.clearTimeout(timer);
  }, [dispatch, state.notifications]);

  return (
    <div className="toast-stack" aria-live="polite" aria-atomic="true">
      {state.notifications.map((notification) => (
        <div
          className={`toast-message toast-${notification.tone}`}
          key={notification.id}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
}

export default ToastViewport;
