import React, { useContext, createContext, useState } from "react";

const AccodionContext = createContext();
const useAccodioncontext = () => useContext(AccodionContext);

export const SmartAccodion = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };

  return (
    <AccodionContext.Provider value={value}>
      <div>{props.children}</div>
    </AccodionContext.Provider>
  );
};
export default SmartAccodion;
