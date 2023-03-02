import React, { useState } from "react";
import {
  Liha,
  MainContainer,
  IdInput,
  StyledDiv,
  LoginTitle,
  LoginBtn,
  LoginBtnKaKAo,
  DivContainer,
  SignUpBtn,
  Snslogin,
} from "./styles";
import { useMutation, useQueryClient } from "react-query";
import { loginUser } from "../../axios/api";
import { useNavigate } from "react-router";
import { setCookie } from "../../axios/cookies";
import bonobono from "./bonobono.jpeg";
function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(loginUser, {
    onSuccess: (response) => {
      // console.log(response.headers);
      queryClient.invalidateQueries("user");
      setCookie("ACCESS_TOKEN", response.headers.authorization);
      localStorage.setItem("name", response.data.username);
      console.log(response.data.username);
      navigate("/main");
    },
    onError: () => {
      alert("로그인정보가 일치하지 않습니다.");
    },
  });

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleUserPwChange = (event) => {
    setUserPw(event.target.value);
  };

  const handleSubmitButtonClick = async (event) => {
    event.preventDefault();

    const loginUser = {
      email: userId,
      password: userPw,
    };
    mutation.mutate(loginUser);
  };
  const gotoSignUp = () => {
    navigate("/sign");
  };

  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=94c5891ab6cec1f5eddede64f8358dd9&redirect_uri=http:localhost:3000&response_type=code`;

  const loginHandler = () => {
    let sibal = new URL(window.location.href).searchParams.get("code");
    console.log(sibal);
    window.location.href = KAKAO_AUTH_URI; // url 주소 변경
  };
  return (
    <MainContainer>
      <StyledDiv>
        <LoginTitle>Login</LoginTitle>
        <form onSubmit={handleSubmitButtonClick}>

            <IdInput
              id="userId"
              placeholder="아이디를 입력해주세요."
              value={userId}
              onChange={handleUserIdChange}
              type="text"
            />

            <IdInput
              id="userPw"
              placeholder="비밀번호를 입력해주세요."
              value={userPw}
              onChange={handleUserPwChange}
              type="password"
            />
            <LoginBtn>Login</LoginBtn>
            <DivContainer>
              <span>아직 회원이 아니신가요?</span>
              <SignUpBtn onClick={gotoSignUp}>회원가입</SignUpBtn>
            </DivContainer>
            <Snslogin>소셜로그인</Snslogin>
            <LoginBtnKaKAo onClick={loginHandler}>kakao Login</LoginBtnKaKAo>

        </form>
      </StyledDiv>
      <img src={bonobono}></img>
    </MainContainer>
  );
}

export default Login;
