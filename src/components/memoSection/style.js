import styled from "styled-components";
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
const Btn = styled.button`
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
const Label = styled.label`
  color: rgb(199, 80, 240);
  font-size: 24px;
  font-weight: 900;
`;
export { IdInput, Btn, Label };
