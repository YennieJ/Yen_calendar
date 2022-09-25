import styled, { css } from "styled-components";
import { TrashFill } from "@styled-icons/bootstrap";
import { Pencil } from "@styled-icons/evil";
import { HandThumbsUpFill } from "@styled-icons/bootstrap";
import { ChevronLeft } from "@styled-icons/boxicons-solid";
import { ChevronRight } from "@styled-icons/boxicons-solid";
import { PlusCircle } from "@styled-icons/octicons";

export const IconTrashbin = styled(TrashFill)``;
export const IconPencil = styled(Pencil)``;
export const IconTumbsUp = styled(HandThumbsUpFill)``;
export const IconLeft = styled(ChevronLeft)``;
export const IconRight = styled(ChevronRight)``;
export const IconPlus = styled(PlusCircle)``;

export const StyleButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid transparent;
`;
