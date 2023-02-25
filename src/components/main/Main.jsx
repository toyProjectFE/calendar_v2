import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";
import {
  Calendar,
  Header,
  Text,
  ColStart,
  TextMonth,
  PrevNext,
  ColEnd,
  LogoutBtn,
  Days,
  DaysCol,
  Body,
  BodyRow,
} from "./style";
import "./style.scss";
const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <Header>
      <ColStart>
        <PrevNext>
          <Icon
            style={{ cursor: "pointer", transform: "scale(1.3)" }}
            icon="bi:arrow-left-circle-fill"
            onClick={prevMonth}
          />
          <Icon
            style={{ cursor: "pointer", transform: "scale(1.3)" }}
            icon="bi:arrow-right-circle-fill"
            onClick={nextMonth}
          />
        </PrevNext>
        <Text>
          {format(currentMonth, "yyyy")}
          <TextMonth>{format(currentMonth, "M")}월</TextMonth>
        </Text>
      </ColStart>
      <ColEnd>
        <div>000님</div>
        <LogoutBtn>로그아웃</LogoutBtn>
      </ColEnd>
    </Header>
  );
};

const RenderDays = () => {
  const days = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thur", "Fri", "Sat"];

  for (let i = 0; i < 7; i++) {
    days.push(<DaysCol key={i}>{date[i]}</DaysCol>);
  }

  return <Days>{days}</Days>;
};

const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          key={day}
          onClick={() => onDateClick(parse(cloneDay))}
        >
          <span
            className={
              format(currentMonth, "M") !== format(day, "M")
                ? "text not-valid"
                : ""
            }
          >
            {formattedDate}
          </span>
        </div>,
      );
      day = addDays(day, 1);
    }
    rows.push(<BodyRow key={day}>{days}</BodyRow>);
    days = [];
  }
  return <Body>{rows}</Body>;
};

const Main = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day) => {
    setSelectedDate(day);
  };
  return (
    <Calendar>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />
      <RenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </Calendar>
  );
};

export default Main;
