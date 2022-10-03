import React from "react";

import * as S from "./Button.styled";

function Button(props) {
  // console.log(props);
  return (
    <>
      {props.type === "trashbin" && (
        <S.Button
          className="trashbin"
          type="button"
          onClick={props.handleClick}
        >
          <S.IconTrashbin />
        </S.Button>
      )}
      {props.type === "pencil" && (
        <S.Button className="pencil" type="button" onClick={props.handleClick}>
          <S.IconPencil />
        </S.Button>
      )}
      {props.type === "tumbsup" && (
        <S.Button className="tumbsup" type="button" onClick={props.handleClick}>
          <S.IconTumbsUp />
        </S.Button>
      )}
      {props.type === "left" && (
        <S.Button className="left" type="button" onClick={props.handleClick}>
          <S.IconLeft />
        </S.Button>
      )}
      {props.type === "right" && (
        <S.Button className="right" type="button" onClick={props.handleClick}>
          <S.IconRight />
        </S.Button>
      )}
      {props.type === "plus" && (
        <S.Button className="plus" type="button" onClick={props.handleClick}>
          <S.IconPlus />
        </S.Button>
      )}
      {props.type === "goToday" && (
        <S.Button className="goToday" type="button" onClick={props.handleClick}>
          Today
        </S.Button>
      )}
    </>
  );
}

export default Button;
