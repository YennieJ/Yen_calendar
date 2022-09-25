import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 30rem;
  margin: 1rem 0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;
export const GridWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 50px;
  align-items: center;

  margin: 10px;
`;

export const CheckDate = styled.span`
  cursor: pointer;

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
  &:nth-child(7n) {
    color: blue;
  }
  &:nth-child(7n + 1) {
    color: red;
  }
  ${(props) =>
    props.date &&
    css`
      height: 80px;
      border-top: 1px solid black;
      padding: 10px;
    `};
`;
