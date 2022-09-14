import React from "react";
import dayjs from "dayjs";

const CalendarHead = ({ date, setDate }) => {
  const weekOfYear = require("dayjs/plugin/weekOfYear");
  const weekday = require("dayjs/plugin/weekday");

  dayjs.extend(weekOfYear);
  dayjs.extend(weekday);

  // ?true(1)는 다음 달 :false(0)는 이전 달
  const controlMonth = (e) =>
    e
      ? setDate(date.clone().add(30, "day"))
      : setDate(date.clone().subtract(30, "day"));

  // 요일
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(
      <div className="day" key={i}>
        {dayjs().weekday(i).format("ddd")}
      </div>
    );
  }

  //오늘로
  const goToday = () => {
    setDate(dayjs());
    // inputRef.current.focus();
  };

  return (
    <div>
      <div className="calendar">
        <div className="calendarHead">
          <div className="year">{date.format("YYYY")}</div>
          <div className="controlMonth">
            {/* onClick 콜백함수 필요함(Too many lendering) */}
            <div className="month-button" onClick={() => controlMonth(0)}>
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="month">{date.format("MMMM")}</div>

            <div className="month-button" onClick={() => controlMonth(1)}>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className="today" onClick={goToday}>
            Today
          </div>
          <div className="week">{week}</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarHead;
