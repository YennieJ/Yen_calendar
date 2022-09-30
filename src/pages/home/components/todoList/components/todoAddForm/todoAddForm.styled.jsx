import styled, { css } from "styled-components";

export const Container = styled.form`
  height: 40px;
  margin: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #e9e9e9;
  border-radius: 10px; */
`;
export const TodoInput = styled.input.attrs({
  placeholder: "오늘의 할일을 입력하세요",
})`
  font-size: 1.5rem;
  width: 50%;
  text-align: center;
  line-height: 28px;
`;
