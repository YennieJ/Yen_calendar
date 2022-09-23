import styled, { css } from "styled-components";
import { TrashFill } from "@styled-icons/bootstrap";
import { Pencil } from "@styled-icons/evil";
import { HandThumbsUpFill } from "@styled-icons/bootstrap";

export const Li = styled.li`
  display: grid;
  grid-template-columns: 20% 60% 10% 10%;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  &:first-child {
    margin-top: 0;
  }
`;

export const Button = styled.button`
  width: 28px;
  height: 28px;
  /* position: relative; */
  border-radius: 50%;
  border: 2px solid transparent;
`;

export const IconTrashbin = styled(TrashFill)``;
export const IconPencil = styled(Pencil)``;
export const IconTumbsUp = styled(HandThumbsUpFill)``;
