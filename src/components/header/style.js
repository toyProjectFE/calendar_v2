<<<<<<< HEAD
import styled from "styled-components";
const Header = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;
const ColStart = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 1%;
`;
const Text = styled.span`
  font-size: 1em;
  margin-left: 50px;
`;

const TextMonth = styled.span`
  margin-left: 5px;
  font-size: 1.6em;
  font-weight: 600;
`;
const PrevNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ColEnd = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`;
const LogoutBtn = styled.button`
  border: 1px solid black;
  background-color: transparent;
  margin-left: 20px;
`;
export {
  Header,
  Text,
  ColStart,
  TextMonth,
  PrevNext,
  ColEnd,
  LogoutBtn,
};
=======
import { Link } from "react-router-dom";
import styled from "styled-components";

const Headerwrap = styled.div`
    height:79px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 50px;
    border-bottom:1px solid #eee;
`

const Link2 = styled(Link)`
    font-family: 'Gabriela';
    font-size:30px;
    padding-right:120px;
    border-right:1px solid #ddd;
    height:79px;
    line-height: 79px;
`
const Right = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button`
    margin-left:20px;
    padding-left:24px;
    position:relative;
    background:none;
    &::after{
        position: absolute;
        left: 0;
        top:0;
        bottom: 0;
        margin: auto;
        width:4px;
        height:4px;
        background:#000;
        content: '';
        border-radius: 4px;
    }
`
export {Headerwrap,Link2,Right,Button}
>>>>>>> 74ea3934d8b3aaeca3a6442d253ed110d762c6f3
