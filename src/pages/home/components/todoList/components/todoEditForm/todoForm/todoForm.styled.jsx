import styled, { css } from "styled-components";

export const Li = styled.li`
  display: grid;
  grid-gap: 10px;
  width: 85%;
  margin-top: 10px;
  place-items: center;

  &:first-child {
    margin-top: 15px;
  }
  input {
    text-align: center;
    width: 80%;
  }
  ${({ checked }) =>
    checked
      ? css`
          grid-template-columns: 10% 80% 10%;
        `
      : css`
          grid-template-columns: 10% 70% 10% 10%;
        `}
`;
