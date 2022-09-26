import React from "react";
import dayjs from "dayjs";
import * as S from "./sample.styled";

const Sample = ({ date, todoDate, setTodoDate, controlMonth }) => {
  const weekday = require("dayjs/plugin/weekday");
  dayjs.extend(weekday);

  // 요일
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(
      <S.Text className="텍스트" key={i}>
        {dayjs().weekday(i).format("ddd")}
      </S.Text>
    );
  }
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
  for (let week = startWeek; week <= endWeek; week++) {
    for (let i = 0; i < 7; i++) {
      let current = today.startOf("week").week(week).add(i, "day");
      //오늘 표시하기
      let isToday =
        fixedToday.format("YYYYMMDD") === current.format("YYYYMMDD");

      //이번 달이 아닌 다른 달의 날짜
      let isGrayed = current.format("MM") !== today.format("MM");

      //선택 된 날짜
      let selectDate = current.format("YYYYMMDD") === todoDate;

      //투두리스트랑 화면 컨트롤
      const selectedDate = () => {
        if (current.format("MM") === date.subtract(1, "month").format("MM")) {
          controlMonth(0);
        } else if (current.format("MM") === date.add(1, "month").format("MM")) {
          controlMonth(1);
        }
        setTodoDate(current.format("YYYYMMDD"));
      };

      dates.push(
        <S.Diffrent
          isToday={isToday}
          isGrayed={isGrayed}
          selectDate={selectDate}
          onClick={selectedDate}
        >
          {current.format("DD")}
        </S.Diffrent>
      );
    }
  }
  const currentDate = dates.map((date, i) => (
    <S.Text className="텍스트" key={i}>
      {date}
    </S.Text>
  ));

  return (
    <div>
      <h1>SAMPLE</h1>
      <S.GridWeek className="그리드위크">{week}</S.GridWeek>
      <S.GridWeek className="그리드위크">{currentDate}</S.GridWeek>
    </div>
  );
};

export default Sample;

// const a = date.daysInMonth();
// for (let i = 0; i < a; i++) {
//   sampling.push(i + 1);
// }
