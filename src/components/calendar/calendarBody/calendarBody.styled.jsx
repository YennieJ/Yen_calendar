import styled, { css } from "styled-components";

export const GridWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 10px;
  border: 1px solid black;
`;

export const Text = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-size: 1rem;
  text-align: end;
  padding: 3px;
`;
