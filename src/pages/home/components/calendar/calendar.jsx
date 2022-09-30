import React from "react";

import dayjs from "dayjs";

import * as S from "./calendar.styled";

const Calendar = ({
  date,
  todoDate,
  setTodoDate,
  controlMonth,
  setShowDate,
  todos,
}) => {
  const weekday = require("dayjs/plugin/weekday");
  const weekOfYear = require("dayjs/plugin/weekOfYear");
  dayjs.extend(weekday);
  dayjs.extend(weekOfYear);

  // 요일배열
  const week = [];
  // 초기값은 오늘
  const today = date;
  // 날짜배열
  const dates = [];

  for (let i = 0; i < 7; i++) {
    week.push(<S.Text key={i}>{dayjs().weekday(i).format("ddd")}</S.Text>);
  }

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

  for (let week = startWeek; week <= endWeek; week++) {
    for (let i = 0; i < 7; i++) {
      let current = today.startOf("week").week(week).add(i, "day");

      const selectedDateData = Object.keys(todos).filter(
        (item) => todos[item].date === current.format("YYYYMMDD")
      );

      //할일이 있나요?
      let checkTodoThings = selectedDateData.length > 0;

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
        setShowDate(current.format("D일"));
      };

      dates.push(
        <>
          <S.CheckDate
            className="체크데이트"
            isToday={isToday}
            isGrayed={isGrayed}
            selectDate={selectDate}
            onClick={selectedDate}
          >
            {current.format("DD")}
          </S.CheckDate>
          <S.checkTodoThings
            className="체크투두띵스"
            checkTodoThings={checkTodoThings}
          />
        </>
      );
    }
  }

  const currentDate = dates.map((date, i) => (
    <S.Text className="텍스트" date key={i}>
      {date}
    </S.Text>
  ));

  return (
    <S.Container>
      <S.GridWeek>{week}</S.GridWeek>
      <S.GridWeek>{currentDate}</S.GridWeek>
    </S.Container>
  );
};

export default Calendar;

// 비포
// const weekday = require("dayjs/plugin/weekday");
//   dayjs.extend(weekday);

//   // 요일
//   const week = [];
//   for (let i = 0; i < 7; i++) {
//     week.push(<S.Text key={i}>{dayjs().weekday(i).format("ddd")}</S.Text>);
//   }

//   const showDate = () => {
//     // 초기값은 오늘
//     const today = date;
//     // 진짜 오늘을 위해서
//     const fixedToday = dayjs();

//     // startOf: 주어진 시간 단위의 시작으로 설정되도록 변경하는 데 사용.(년, 월, 분기, 주, 일, 시, 분 및 초)
//     // week():52주 중에 몇번째 주 인지.
//     const startWeek = today.startOf("month").week();

//     // 해당 년도 첫번째 줄을 53으로(1년은 52주니까 53은 첫번째주임)
//     const endWeek =
//       today.endOf("month").week() === 1
//         ? 53
//         : today.clone().endOf("month").week();

//     // dates 라는 빈배열을 만듬.
//     const dates = [];
//     // 시작 주부터 끝나는 주까지 1씩 증가
//     // 길이가 7개인 배열에 0으로 채우고, map (현재값,인덱스)로 배열 재설정
//     for (let week = startWeek; week <= endWeek; week++) {
//       dates.push(
//         <S.GridWeek className="dates" key={week}>
//           {Array(7)
//             .fill(0)
//             .map((n, i) => {
//               // n: 이번 달이 5주라면 35개 i: 0123456
//               let current = today
//                 .clone()
//                 .startOf("week")
//                 .week(week)
//                 .add(n + i, "day");
//               //오늘 표시하기
//               let isToday =
//                 fixedToday.format("YYYYMMDD") === current.format("YYYYMMDD")
//                   ? "today"
//                   : "";
//               //이번 달이 아닌 다른 달의 날짜면 회색으로
//               let isGrayed =
//                 current.format("MM") !== today.format("MM") ? "grayed" : "";

//               return (
//                 <div className={`box ${isToday} ${isGrayed}`} key={i}>
//                   <S.Text
//                     onClick={() => {
//                       setTodoDate(current.format("YYYYMMDD"));
//                     }}
//                   >
//                     {current.format("DD")}
//                   </S.Text>
//                 </div>
//               );
//             })}
//         </S.GridWeek>
//       );
//     }
//     return dates;
//   };

//   return (
//     <div>
//       <h1>REAL</h1>
//       <S.GridWeek>{week}</S.GridWeek>
//       <div className="calendarBody">{showDate()}</div>
//       {/* {todoDate} */}
//     </div>
//   );
