import styled from "styled-components";

const Calendar = styled.div`
  width: 60vw;
  height: 90vh;
`;







const Days = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1em;
  padding: 2px;
`;
const DaysCol = styled.div`
  width: 12.9%;
  height: 100%;

  padding-left: 1%;
  background: #ebcfc6;
`;

const Body = styled.div`
  width: 100%;
  height: 89%;
  display: flex;
  flex-direction: column;
`;
const BodyRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export {
  Calendar,
  Days,
  DaysCol,
  Body,
  BodyRow,
};
