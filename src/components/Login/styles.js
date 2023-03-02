import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const StyledDiv = styled.div`
  width: 30%;
  align-self: center;
  padding: 0 4%;
  box-sizing: border-box;
`;

const LoginTitle = styled.h3`
  font-size: 36px;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 30px;
  width: 100%;
`;

const IdInput = styled.input`
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  border: 1px solid #f8f8f8;
  margin-bottom: 10px;
  &::placeholder {
    color: #e2e2e2;
    font-family: "Pretendard";
  }
  &:focus {
    border: 1px solid #c650f0;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgb(199, 80, 240);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  outline: 0;
  border: 0;
`;

const LoginBtnKaKAo = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgb(250, 255, 0);
  color: #000;
  font-weight: 600;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  outline: 0;
  border: 0;
`;
const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top:15px;
`

const Liha = styled.div`
  display: flex;
  justify-content: center;
  background-color: beige;
  align-items: center;
  font-weight: 600;
  font-size: 50px;
  width: 70%;
`;

const SignUpBtn = styled.button`

  color:#1d1d1d;
  background:none;
  cursor: pointer;
`;
const Snslogin = styled.p`
  text-align: center;
  width:100%;
  margin:40px 0 15px;
  position:relative;
  
  &::after{
    position: absolute;
    content: '';
    width:100%;
    height:1px;
    background:#eee;
    top:0;
    bottom:0;
    left:0;
    margin:auto;
    z-index: -2;
  }
  &::before{
    background:#fff;
    width:120px;
    height:10px;
    top:0;
    left:0;
    right:0;
    z-index: -1;
    bottom:0;
    margin:auto;
    content: '';
    position: absolute;
  }
`

export {
  LoginTitle,
  Liha,
  MainContainer,
  StyledDiv,
  IdInput,
  LoginBtn,
  LoginBtnKaKAo,
  DivContainer,
  SignUpBtn,
  Snslogin

};
