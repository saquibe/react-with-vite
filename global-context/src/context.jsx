import { createContext, useState, useContext } from "react";

const globalContext = createContext();

//custom hook
export const useGlobalContext = () => useContext(globalContext);

const AppContext = ({ children }) => {
  const [name, setName] = useState("Mohamad Saquib");
  return (
    <globalContext.Provider value={{ name, setName }}>
      {children}
    </globalContext.Provider>
  );
};

export default AppContext;
