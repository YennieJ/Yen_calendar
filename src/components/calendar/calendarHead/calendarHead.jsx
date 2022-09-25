import React from "react";
import dayjs from "dayjs";
import * as S from "./calendarHead.styled";
import * as B from "../../../style/button/button.styled";

const CalendarHead = ({ today, date, setDate, setTodoDate, controlMonth }) => {
  const weekOfYear = require("dayjs/plugin/weekOfYear");
  dayjs.extend(weekOfYear);

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
        <B.StyleButton onClick={() => controlMonth(0)}>
          <B.IconLeft />
        </B.StyleButton>
        <S.FontMonth>{date.format("MMMM")}</S.FontMonth>

        <B.StyleButton onClick={() => controlMonth(1)}>
          <B.IconRight />
        </B.StyleButton>
      </S.GridMonth>
      <S.ButtonToday onClick={goToday}>Today</S.ButtonToday>
    </div>
  );
};

export default CalendarHead;
