import React, { createContext, useContext, useState } from "react";
import * as S from "./sample.styled";

const AccodionContext = createContext();
const useAccodioncontext = () => useContext(AccodionContext);

export const SmartAccodion = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };
  return (
    <AccodionContext.Provider value={value}>
      <S.Wrapper>{props.children}</S.Wrapper>
    </AccodionContext.Provider>
  );
};

export const SmartAccodionHeader = (props) => {
  const { isOpen, setIsOpen } = useAccodioncontext();

  return (
    <S.HeaderWrapper onClick={() => setIsOpen(!isOpen)}>
      {props.children}
    </S.HeaderWrapper>
  );
};
export const SmartAccodionBody = (props) => {
  const { isOpen } = useAccodioncontext();
  return <S.BodyWrapper isOpen={isOpen}>{props.children}</S.BodyWrapper>;
};
export default SmartAccodion;
