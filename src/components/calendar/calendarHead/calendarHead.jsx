import React from "react";
import dayjs from "dayjs";
import * as S from "./calendarHead.styled";

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
      <div className="calendar">
        <S.FontYear>{date.format("YYYY")}</S.FontYear>
        <S.GridMonth>
          {/* onClick 콜백함수 필요함(Too many lendering) */}
          <S.ButtonMonth onClick={() => controlMonth(0)}>
            <i className="fa-solid fa-angle-left"></i>
          </S.ButtonMonth>
          <S.FontMonth>{date.format("MMMM")}</S.FontMonth>

          <S.ButtonMonth onClick={() => controlMonth(1)}>
            <i className="fa-solid fa-angle-right"></i>
          </S.ButtonMonth>
        </S.GridMonth>
        <S.ButtonToday onClick={goToday}>Today</S.ButtonToday>
      </div>
    </div>
  );
};

export default CalendarHead;
