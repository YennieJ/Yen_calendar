import React from "react";
import dayjs from "dayjs";

const CalendarBody = ({ date, todoDate, setTodoDate }) => {
  const showDate = () => {
    // 초기값은 오늘
    const today = date;
    // 진짜 오늘을 위해서
    const fixedToday = dayjs();

    // startOf: 주어진 시간 단위의 시작으로 설정되도록 변경하는 데 사용.(년, 월, 분기, 주, 일, 시, 분 및 초)
    // week():52주 중에 몇번째 주 인지.
    const startWeek = today.startOf("month").week();
    // 해당 년도 첫번째 줄을 53으로(1년은 52주니까 53은 첫번째주임)
    const endWeek =
      today.endOf("month").week() === 1
        ? 53
        : today.clone().endOf("month").week();

    // dates 라는 빈배열을 만듬.
    const dates = [];
    // 시작 주부터 끝나는 주까지 1씩 증가
    // 길이가 7개인 배열에 0으로 채우고, map (현재값,인덱스)로 배열 재설정
    for (let week = startWeek; week <= endWeek; week++) {
      dates.push(
        <div className="dates" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              // n: 이번 달이 5주라면 35개 i: 0123456
              let current = today
                .clone()
                .startOf("week")
                .week(week)
                .add(n + i, "day");
              //오늘 표시하기
              let isToday =
                fixedToday.format("YYYYMMDD") === current.format("YYYYMMDD")
                  ? "today"
                  : "";
              //이번 달이 아닌 다른 달의 날짜면 회색으로
              let isGrayed =
                current.format("MM") !== today.format("MM") ? "grayed" : "";

              return (
                <div className={`box ${isToday} ${isGrayed}`} key={i}>
                  <div
                    className="text"
                    onClick={() => {
                      setTodoDate(current.format("YYYYMMDD"));
                    }}
                  >
                    {current.format("DD")}
                  </div>
                </div>
              );
            })}
        </div>
      );
    }
    return dates;
  };

  return (
    <div>
      <div className="calendarBody">{showDate()}</div>
      {todoDate}
    </div>
  );
};

export default CalendarBody;
