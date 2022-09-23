import styled, { css } from "styled-components";

import { PlusCircle } from "@styled-icons/octicons";

export const TodoInput = styled.input.attrs({
  placeholder: "오늘의 할일을 입력하세요",
})`
  border: none;
  border-bottom: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 30%;
`;

export const Buttonplus = styled.button`
  width: 3em;
  height: 3em;
  border: 0;
  border-radius: 50%;
  outline: 0;
  color: red;
  text-align: center;
`;

export const IconPlus = styled(PlusCircle)``;
