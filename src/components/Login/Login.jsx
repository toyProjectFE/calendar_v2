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
