import React from "react";

import * as S from "./Button.styled";

function Button(props) {
  return (
    <S.Button type="button" onClick={props.handleClick}>
      {props.type === "trashbin" && <S.IconTrashbin />}
      {props.type === "pencil" && <S.IconPencil />}
      {props.type === "tumbsup" && <S.IconTumbsUp />}
      {props.type === "left" && <S.IconLeft />}
      {props.type === "right" && <S.IconRight />}
      {props.type === "plus" && <S.IconPlus />}
    </S.Button>
  );
}

export default Button;
