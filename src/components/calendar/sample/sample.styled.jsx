import styled from "styled-components";

export const Wrapper = styled.div`
  border: 5px solid red;
`;

export const HeaderWrapper = styled.div`
  border: 1px solid blue;
`;
export const BodyWrapper = styled.div`
  height: 60px;
  padding: 10px;
  border: 1px solid green;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;
