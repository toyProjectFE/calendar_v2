import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const StyledDiv = styled.div`
  justify-content: center;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const IdInput = styled.input`
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 20px;
  box-sizing: border-box;
`;

const PasswordInput = styled.input`
  width: 75%;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 20px;
  box-sizing: border-box;
`;

const Liha = styled.div`
  display: flex;
  justify-content: center;
  background-color: beige;
  align-items: center;
  font-weight: 600;
  font-size: 50px;
  width: 80%;
`;

const LoginTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const LoginBtn = styled.button`
  width: 75%;
  height: 50px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 20px;
  box-sizing: border-box;
  background-color: rgb(199, 80, 240);
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const LoginBtnKaKAo = styled.button`
  width: 75%;
  height: 50px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 20px;
  box-sizing: border-box;
  background-color: rgb(250, 255, 0);
  color: black;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
`;

export {
  LoginTitle,
  Liha,
  MainContainer,
  StyledDiv,
  FlexDiv,
  IdInput,
  PasswordInput,
  LoginBtn,
  LoginBtnKaKAo,
  DivContainer,
  FormContainer,
};
