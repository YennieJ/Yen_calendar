import React, { useState } from "react";
import dayjs from "dayjs";
import * as S from "../style/calendar.styled";
import CalendarHead from "../components/calendar/calendarHead/calendarHead";
import CalendarBody from "../components/calendar/calendarBody/calendarBody";
import TodoList from "../components/todoList/todoList";

const Calendar = () => {
  const today = dayjs();
  const [date, setDate] = useState(today);
  const [todoDate, setTodoDate] = useState(date.format("YYYYMMDD"));

  // ?true(1)는 다음 달 :false(0)는 이전 달
  const controlMonth = (e) =>
    e ? setDate(date.clone().date(32)) : setDate(date.clone().date(0));

  // // 이전 달
  // const prevMonth = () => {
  //   const minus = date.subtract(1, "M");
  //   setDate(minus);
  // };
  // // 다음 달
  // const nextMonth = () => {
  //   const plus = date.add(1, "M");
  //   setDate(plus);
  // };

  return (
    <>
      <CalendarHead
        date={date}
        setDate={setDate}
        setTodoDate={setTodoDate}
        controlMonth={controlMonth}
        today={today}
      />
      <S.CalendarStyle>
        <CalendarBody
          date={date}
          todoDate={todoDate}
          setTodoDate={setTodoDate}
          controlMonth={controlMonth}
        />
        <TodoList todoDate={todoDate} />
      </S.CalendarStyle>
    </>
  );
};

export default Calendar;
