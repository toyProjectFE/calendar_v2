import React from 'react'
import { Icon } from "@iconify/react";
import format from 'date-fns/format';
import {
  Header,
  Text,
  ColStart,
  TextMonth,
  PrevNext,
  ColEnd,
  LogoutBtn,
} from "./style";


function RenderHeader({ currentMonth, prevMonth, nextMonth }) {
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


export default RenderHeader;