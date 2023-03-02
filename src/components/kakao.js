import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import Spinner from "./Spinner";
import kakaoLogin from "../share/modules/kakaoLogin";
const OAuth2RedirectHandler = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    dispatch(kakaoLogin(code));
  });

  return <div>이거 보임?</div>;
};

export default OAuth2RedirectHandler;
