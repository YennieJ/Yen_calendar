import styled, { css } from "styled-components";

export const TodoEditFormStyle = styled.section`
  width: 85%;
  height: 24rem;
  padding: 20px 20px 100px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  ul {
    border-top: 1px solid black;
    height: 18rem;
    overflow: auto;
    scrollbar-width: none;
  }
  p {
    font-size: 1.5rem;
    margin: 0;
  }
`;
