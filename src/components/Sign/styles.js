import styled from "styled-components";
const MainContainer = styled.div`
  display: flex;
  height: 2000px;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const FlexConatainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1500px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  margin-top: 20px;
`;
const ArgeeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  width: 1200px;
  justify-content: center;
  margin-bottom: 20px;
`;
const SignTitle = styled.div`
  font-size: 45px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
function LabledInput({ id, label, placeholder, value, onChange }) {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledContainer>
  );
}
function BtnLabledInput({ id, label, placeholder, value, onChange, onClick }) {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <BtnCheck type="button" onClick={onClick}>
        중복확인
      </BtnCheck>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start; */
  align-items: center;
  margin-bottom: 10px;
`;
const StyledInput = styled.input`
  height: 30px;
  width: 300px;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;
  margin-right: 25px;
  border: 1px solid #e5e5e5;
`;
const StyledLabel = styled.label`
  margin-right: 10px;
  font-weight: 700;
  height: 45px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CheckInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
`;
const BtnCheck = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  /* margin-right: 10px; */
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  :hover {
    background-color: #e5e5e5;
  }
`;
const CheckTitle = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  margin-right: 150px;
`;
export {
  CheckTitle,
  MainContainer,
  FormContainer,
  ArgeeContainer,
  CheckContainer,
  SignTitle,
  TitleContainer,
  FlexConatainer,
  LabledInput,
  CheckInputContainer,
  BtnCheck,
  BtnLabledInput,
};
