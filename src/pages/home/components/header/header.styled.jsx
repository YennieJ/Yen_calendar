import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 16px;
`;
export const Month = styled.span`
  display: grid;
  grid-template-columns: 330px 200px;
  font-size: 2rem;
  text-align: left;
  align-self: end;
  margin: 10px;
  div {
    border-right: 1px solid black;
  }
  div:nth-child(2) {
    font-size: 4rem;
  }
`;

export const Date = styled.span`
  font-size: 5rem;
  align-self: end;
  margin-left: 30px;
`;
export const Ss = styled.div`
  /* margin: 1rem 20rem; */
`;

export const ControlMonth = styled.div`
  display: flex;
  align-items: end;
  /* justify-content: space-between; */
  margin: 10px;
`;

export const ButtonToday = styled.button`
  align-items: center;

  padding: 0.8em 1.4em;
  border-radius: 2em;
  border: 0;
  cursor: pointer;
  line-height: 1.6em;
  /* margin: 1rem; */
`;
