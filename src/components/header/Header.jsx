import React from "react";
import { Headerwrap, Link2, Right, Button } from "./style";
import { removeCookie } from "../../axios/cookies";
import { Link } from "react-router-dom";
import { getLoginUser } from "../../axios/api";
import { useMutation, useQueryClient } from "react-query";
import { loginUser } from "../../axios/api";
function Header() {
  const mutation = useMutation(loginUser, {
    onSuccess: (response) => {
      console.log(response.data.username);
    },
  });

  const logoutBtn = () => {
    removeCookie("ACCESS_TOKEN");
  };

  return (
    <Headerwrap>
      <Link2 to="/Main">Calendar</Link2>
      <Right>
        <p>
          <span>000</span> 님 환영합니다!
        </p>
        <Link to="/">
          <Button onClick={logoutBtn}>로그아웃</Button>
        </Link>
      </Right>
    </Headerwrap>
  );
}
//이거 데이터 뽑아오기... 쿠키에서...
export default Header;
