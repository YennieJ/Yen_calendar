import styled, { css } from "styled-components";

export const FontYear = styled.div`
  font-size: 1rem;
  margin: 1rem;
`;

export const GridMonth = styled.div`
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  margin: 1rem 20rem;
`;

export const FontMonth = styled.div`
  font-size: 3rem;
`;

export const ButtonToday = styled.button`
  font-size: 1em;
  padding: 0.8em 1.4em;
  /* width: 60%; */
  /* justify-self: center; */
  border-radius: 2em;
  border: 0;
  cursor: pointer;
  line-height: 1.6em;
  margin: 1rem;
  /* transition: background-color 300ms ease-in-out; */
  /* &:focus {
    outline: 0;
  } */
`;
