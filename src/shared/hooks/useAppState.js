import { useContext } from "react";
import { AppStateContext } from "../../app/providers/AppStateProvider";

function useAppState() {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider.");
  }

  return context;
}

export default useAppState;
