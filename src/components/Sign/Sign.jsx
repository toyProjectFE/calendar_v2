import React, { useState } from "react";
import {
  CheckTitle,
  Signbox,
  Signlabel,
  Signbtn,
} from "./styles";
import {
  LoginTitle,
  StyledDiv,
  Liha,
  MainContainer,
  LoginBtn,
  IdInput,
} from "../Login/styles";
import { useMutation, useQueryClient } from "react-query";
import { addUser } from "../../axios/api";
import { useNavigate } from "react-router";

function Sign() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      navigate("/");
    },
    onError: (response) => {
      alert(response.response.data.msg);
      setUserId("");
      setUserName("");
      setUserPw("");
      setUserPwCheck("");
    },
  });
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPwCheck, setUserPwCheck] = useState("");

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleUserPwChange = (event) => {
    setUserPw(event.target.value);
  };

  const handleUserPwCheckChange = (event) => {
    setUserPwCheck(event.target.value);
  };

  const handleUserNameCheckChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmitButtonClick = async (event) => {
    event.preventDefault();
    const newUser = {
      username: userName,
      email: userId,
      password: userPw,
    };
    mutation.mutate(newUser);
  };

  return (
    <MainContainer>
      <StyledDiv>
        <LoginTitle>회원가입</LoginTitle>
        <form onSubmit={handleSubmitButtonClick}>
          <Signbox>
            <Signlabel htmlFor="userId">아이디</Signlabel>
            <IdInput
              id="userId"
              value={userId}
              onChange={handleUserIdChange}
              placeholer="아이디를 적어주세요"
              type="text"
            />
            {/* <Signbtn type="button" onClick={onClick}>중복확인</Signbtn> */}
          </Signbox>
          <Signbox>
            <Signlabel htmlFor="userPw">비밀번호</Signlabel>
            <IdInput
              id="userPw"
              value={userPw}
              onChange={handleUserPwChange}
              placeholer="비밀번호를 적어주세요"
              type="password"
            />
          </Signbox>
          <Signbox>
            <Signlabel htmlFor="userPwCheck">비밀번호확인</Signlabel>
            <IdInput
              id="userPwCheck"
              value={userPwCheck}
              onChange={handleUserPwCheckChange}
              placeholer="비밀번호확인을 해주세요"
              type="password"
            />
            {/* 비밀번호와 비밀번호 확인이 일치하지 않을 때 */}
            {userPw !== userPwCheck && (
              <CheckTitle>
                비밀번호와 비밀번호 확인이 일치하지 않습니다.
              </CheckTitle>
            )}
          </Signbox>
          <Signbox>
            <Signlabel htmlFor="userPwCheck">닉네임</Signlabel>
            <IdInput
              id="userName"
              value={userName}
              onChange={handleUserNameCheckChange}
              placeholer="닉네임을 적어주세요"
              type="text"
            />
          </Signbox>

          <LoginBtn type="submit">가입하기</LoginBtn>
        </form>
      </StyledDiv>
      <Liha>동영상이지롱</Liha>
    </MainContainer>
  );
}

export default Sign;
