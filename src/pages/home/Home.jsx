import React, { useState } from "react";
import dayjs from "dayjs";
import Header from "./components/header";
import Calendar from "./components/calendar";
import TodoList from "./components/todoList";

import * as S from "./Home.styled";

const Home = () => {
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
      <Header
        date={date}
        setDate={setDate}
        setTodoDate={setTodoDate}
        controlMonth={controlMonth}
        today={today}
      />
      <S.HomeStyle>
        <Calendar
          date={date}
          todoDate={todoDate}
          setTodoDate={setTodoDate}
          controlMonth={controlMonth}
        />
        <TodoList todoDate={todoDate} />
      </S.HomeStyle>
    </>
  );
};

export default Home;
