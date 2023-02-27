import React from "react";
import {
  Liha,
  MainContainer,
  IdInput,
  StyledDiv,
  LoginTitle,
  LoginBtn,
  LoginBtnKaKAo,
  DivContainer,
  FormContainer,
} from "./styles";

function Login() {
  return (
    <MainContainer>
      <StyledDiv>
        <LoginTitle>Login</LoginTitle>
        <FormContainer>
          <IdInput placeholder="아이디를 적어주세요" />
          <IdInput type="password" placeholder="비밀번호를 적어주세요" />
          <LoginBtn>Login</LoginBtn>
          <LoginBtnKaKAo>kakao Login</LoginBtnKaKAo>
          <button
            id="login-kakao-btn"
            onclick="location.href=https://kauth.kakao.com/oauth/authorize?client_id=94c5891ab6cec1f5eddede64f8358dd9&redirect_uri=http://15.164.83.27:8080/user/kakao/login&response_type=code"
          >
            카카오로그인
          </button>

          <DivContainer>
            <span>아직 회원 아님?</span>
            <span>회원가입</span>
          </DivContainer>
        </FormContainer>
      </StyledDiv>
      <Liha>동영상이지롱</Liha>
    </MainContainer>
  );
}

export default Login;
