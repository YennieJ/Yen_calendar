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

// export const ItemStyle = styled.li`
//   display: flex;
//   width: 100%;
//   margin-top: 10px;
//   align-items: center;
//   justify-content: space-between;
//   &:first-child {
//     margin-top: 0;
//   }
//   &.done {
//     .text {
//       color: #ccc;
//       border-color: #ccc;
//       text-decoration: line-through;
//     }
//     .check {
//       background-color: #2266cc;
//       &:before {
//         border-color: #fff;
//       }
//     }
//   }
//   .text {
//     display: block;
//     flex: 1;
//     padding: 10px 0;
//     margin: 0 10px;
//     text-align: left;
//     border-bottom: 1px solid #222;
//   }
//   > button {
//     width: 28px;
//     height: 28px;
//     position: relative;
//     border-radius: 50%;
//     border: 2px solid transparent;
//     &:before,
//     &:after {
//       content: "";
//       display: block;
//       position: absolute;
//       left: 50%;
//       top: 50%;
//     }
//   }

//   .check {
//     border-color: #2266cc;
//     &:before {
//       width: 12px;
//       height: 6px;
//       margin: -6px 0 0 -6px;
//       border-left: 2px solid #2266cc;
//       border-bottom: 2px solid #2266cc;
//       transform: rotate(-45deg);
//     }
//     &:after {
//       display: none;
//     }
//   }
// `;
