import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const AppProvider = ({ initialState, reducer, children }) => {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
