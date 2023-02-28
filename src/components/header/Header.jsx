import React from "react";
import { Headerwrap, Link2, Right, Button } from "./style";
function Header() {
  return (
    <Headerwrap>
      <Link2 to="/Main">Calendar</Link2>
      <Right>
        <p>
          <span>000</span> 님 환영합니다!
        </p>
        <Button>로그아웃</Button>
      </Right>
    </Headerwrap>
  );
}

export default Header;
