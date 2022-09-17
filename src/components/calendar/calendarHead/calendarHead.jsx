import React from "react";
import dayjs from "dayjs";
import * as S from "./calendarHead.styled";

const CalendarHead = ({ date, setDate, setTodoDate }) => {
  const weekOfYear = require("dayjs/plugin/weekOfYear");

  dayjs.extend(weekOfYear);

  // ?true(1)는 다음 달 :false(0)는 이전 달
  const controlMonth = (e) =>
    e
      ? setDate(date.clone().add(30, "day"))
      : setDate(date.clone().subtract(30, "day"));

  //오늘로
  const goToday = () => {
    setDate(dayjs());
    // inputRef.current.focus();
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
          <div className="month">{date.format("MMMM")}</div>

          <S.ButtonMonth onClick={() => controlMonth(1)}>
            <i className="fa-solid fa-angle-right"></i>
          </S.ButtonMonth>
        </S.GridMonth>
        <div className="today" onClick={goToday}>
          Today
        </div>
      </div>
    </div>
  );
};

export default CalendarHead;
