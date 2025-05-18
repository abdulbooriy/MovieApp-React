import { useContext, createContext, useReducer } from "react";

const Context = createContext();

export const ContextProvider = ({ children, reducer, initialState }) => {
  const data = useReducer(reducer, initialState);
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useStateValue = () => useContext(Context);
