import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const weekday = require("dayjs/plugin/weekday");
  const weekOfYear = require("dayjs/plugin/weekOfYear");
  const objectPlugin = require("dayjs/plugin/toObject");
  const isTodayPlugin = require("dayjs/plugin/isToday");
  const duration = require("dayjs/plugin/duration");

  dayjs.extend(weekday);
  dayjs.extend(weekOfYear);
  dayjs.extend(objectPlugin);
  dayjs.extend(isTodayPlugin);
  dayjs.extend(duration);

  const today = dayjs();
  const [monthAndYear, setMonthAndYear] = useState(today);
  const [viewDate, setViewDate] = useState(today);

  //이전달,년도
  const nextMonthAndYear = () => {
    const plus = monthAndYear.add(1, "M");
    setMonthAndYear(plus);
    setViewDate(plus);
  };
  //다음달,년도
  const prevMonthAndYear = () => {
    const minus = monthAndYear.subtract(1, "M");
    setMonthAndYear(minus);
    setViewDate(minus);
  };
  //요일
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(
      <div className="day" key={i}>
        {today.weekday(i).format("ddd")}
      </div>
    );
  }

  const calender = [];
  //52주 중에 몇번째 주 인지.
  const startWeek = monthAndYear.startOf("month").week();
  const endWeek =
    monthAndYear.endOf("month").week() === 1
      ? 53
      : monthAndYear.endOf("month").week();

  //주어진 시간 단위를 설정하여 주를 나타낸다.
  //calander 빈배열을 만들었음.
  //그 안에
  //7개 어레이에  fill 000000 을 채우고, map으로 (현재값,인덱스)로 어레이 재설정
  //현재값은 9월이 5주라서 35개
  //현재값 + i 는 0123456 배열 5줄이 만들어짐.

  for (let week = startWeek; week <= endWeek; week++) {
    calender.push(
      <div className="dates" key={week}>
        {Array(7)
          .fill(0)
          .map((n, i) => {
            let current = viewDate
              .startOf("week")
              .week(week)
              .add(n + i, "day");
            if (viewDate.format("MM") === "12") {
              current = viewDate
                .startOf("week")
                .week(week - 52)
                .add(n + i, "day");
            }
            return (
              <span className="date" key={current.$d}>
                {current.format("D")}
              </span>
            );
          })}
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="year">{monthAndYear.format("YYYY")}</div>
      <div className="months">
        <button className="pre" onClick={prevMonthAndYear}>
          ?
        </button>
        <span className="month">{monthAndYear.format("MM")}</span>
        <button className="next" onClick={nextMonthAndYear}>
          !
        </button>
      </div>
      <div className="week">{week}</div>
      <div className="datesHead">{calender}</div>
    </div>
  );
};

export default Calendar;
