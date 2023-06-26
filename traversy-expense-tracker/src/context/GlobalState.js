import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, title: "Flower", amount: -20 },
    { id: 2, title: "Salary", amount: 300 },
    { id: 3, title: "Grocery", amount: -50 },
    { id: 4, title: "Camera", amount: -150 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};
