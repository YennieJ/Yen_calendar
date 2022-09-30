import React from "react";

import Button from "components/button";

import * as S from "./header.styled";

const Header = ({
  today,
  date,
  setDate,
  setTodoDate,
  controlMonth,
  showDate,
  setShowDate,
}) => {
  //오늘로
  const goToday = () => {
    setDate(today);
    setTodoDate(today.format("YYYYMMDD"));
    setShowDate(today.format("D일"));
  };

  return (
    <S.Container>
      <S.Month>
        <div>
          <div>{date.format("YYYY")}</div>
          <div>{date.format("MMMM")}</div>
        </div>
        <S.Date>{showDate}</S.Date>
      </S.Month>

      <S.ControlMonth>
        {/* onClick 콜백함수 필요함(Too many lendering) */}
        <Button type="left" handleClick={() => controlMonth(0)} />
        <Button type="goToday" handleClick={goToday} />

        <Button type="right" handleClick={() => controlMonth(1)} />
      </S.ControlMonth>
    </S.Container>
  );
};

export default Header;
