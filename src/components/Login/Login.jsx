import React from "react";
import {
  Liha,
  MainContainer,
  IdInput,
  PasswordInput,
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
          <IdInput />
          <PasswordInput type="password" />
          <LoginBtn>로그인</LoginBtn>
          <LoginBtnKaKAo>카카오 로그인</LoginBtnKaKAo>
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
