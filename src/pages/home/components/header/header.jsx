import React from "react";
import dayjs from "dayjs";

import Button from "components/button";

import * as S from "./header.styled";

const Header = ({ today, date, setDate, setTodoDate, controlMonth }) => {
  //오늘로
  const goToday = () => {
    setDate(today);
    setTodoDate(today.format("YYYYMMDD"));
  };

  return (
    <div>
      <S.FontYear>{date.format("YYYY")}</S.FontYear>
      <S.GridMonth>
        {/* onClick 콜백함수 필요함(Too many lendering) */}
        <Button type="left" handleClick={() => controlMonth(0)} />
        <S.FontMonth>{date.format("MMMM")}</S.FontMonth>
        <Button type="right" handleClick={() => controlMonth(1)} />
      </S.GridMonth>
      <S.ButtonToday onClick={goToday}>Today</S.ButtonToday>
    </div>
  );
};

export default Header;
