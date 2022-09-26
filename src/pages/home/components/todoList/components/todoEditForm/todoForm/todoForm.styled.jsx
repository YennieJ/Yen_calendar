import styled, { css } from "styled-components";

export const Li = styled.li`
  display: grid;
  width: 100%;
  margin-top: 10px;
  place-items: left;
  &:first-child {
    margin-top: 15px;
  }
  ${({ checked }) =>
    checked
      ? css`
          grid-template-columns: 20% 60% 20%;
        `
      : css`
          grid-template-columns: 20% 50% 15% 15%;
        `}
`;
