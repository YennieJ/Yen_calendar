import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 40%;
  height: 34rem;
  margin: 1rem 0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

export const GridWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 2rem;
  align-items: center;
  margin: 10px;
  &:first-child {
    background-color: #e9e9e9;
    border-radius: 10px;
  }
  position: relative;
`;

export const CheckDate = styled.span`
  cursor: pointer;
  padding: 8px;
  ${(props) =>
    props.isGrayed &&
    css`
      color: gray;
      opacity: 0.4;
    `};

  ${(props) =>
    props.isToday &&
    css`
      background-color: gray;
      color: aliceblue;
      border-radius: 50%;
    `}

  ${(props) =>
    props.selectDate &&
    css`
      background-color: black;
      color: aliceblue;
      border-radius: 100px;
    `}
`;
export const checkTodoThings = styled.div`
  ${(props) =>
    props.checkTodoThings &&
    css`
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;
      background-color: red;
      opacity: 0.4;
      position: relative;
      top: 20%;
      left: 40%;
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
      font-size: 1.2rem;
      height: 80px;
      border-top: 1px solid black;
      padding: 10px;
      /* position: relative; */
    `};
`;
