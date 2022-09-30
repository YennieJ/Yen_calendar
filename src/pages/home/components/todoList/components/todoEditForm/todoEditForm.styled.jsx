import styled, { css } from "styled-components";

export const TodoEditFormStyle = styled.section`
  width: 95%;
  height: 30rem;
  padding: 20px 20px 100px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  ul {
    border-top: 1px solid black;
    height: 25rem;
    overflow-y: scroll;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: white;
    }
  }
  p {
    font-size: 1.5rem;
    margin: 0;
  }
`;
