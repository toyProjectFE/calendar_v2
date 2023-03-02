import styled from "styled-components";

const Signbox = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  margin-top:20px;
  
`
const Signlabel = styled.label`
  font-size:18px;
  font-weight: 600;
  line-height: 1;
  margin-bottom:10px;
`
const Signbtn = styled.button`
  position: absolute;
  right: 0;
  bottom:10px;
  width:100px;
  height:50px;
  line-height: 50px;
  color:#fff;
  border-radius: 5px;
  background:#c650f0;
  cursor: pointer;
`
const CheckTitle = styled.div`
  font-size: 12px;
  color: #ff0000;
  display: block;

`;

export {
  Signbox,
  Signlabel,
  Signbtn,
  CheckTitle,
};
