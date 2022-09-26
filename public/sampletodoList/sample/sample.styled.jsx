import styled, { css } from "styled-components";

export const GridWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid black;
  margin: 10px;
`;
export const Diffrent = styled.div`
  ${(props) =>
    props.isToday &&
    css`
      background-color: #ffc7e4;
      color: aliceblue;
      border-radius: 50%;
    `}
  ${(props) =>
    props.isGrayed &&
    css`
      color: gray;
      opacity: 0.4;
    `};

  ${(props) =>
    props.selectDate &&
    css`
      background-color: blue;
      color: aliceblue;
      border-radius: 50%;
    `}
`;

export const Text = styled.div`
  height: 50px;
  border: 1px solid black;
  &:nth-child(7n) {
    color: blue;
  }
  &:nth-child(7n + 1) {
    color: red;
  }
`;
