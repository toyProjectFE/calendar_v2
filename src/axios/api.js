import instance from "./instance";
//import axios from "axios";
//import { getCookie } from "./cookies";


const getSchedules = async () => {
  const response = await instance.get(`/data`);
  return response.data;
};

//해당 날짜 디테일 담은 공간
//newDate == 내가 클릭한 날짜에 대한 id값
const addDate = async (newDate) => {
  //2번째 인자는 json type의  data -> body에 저장
  await instance.post(`/date`, newDate);
};

//조회 디테일
const getDetail = async (date) => {
  const response = await instance.get(`/date/${date}`);
  return response.data;
};

//생성 디테일
const addSchedule = async ({ id, newSchedule }) => {
  await instance.post(`/date/${id}`, newSchedule);
};



//삭제 디테일
const delSchedule = async ({date,id}) => {
  //console.log(date)
  await instance.delete(`/date/${date}/${id}`);
};
//true 디테일
const swichTrueSchedule = async (swichbtn) => {
  console.log(swichbtn)
  await instance.patch(`/date/schedule/complete/${swichbtn.id}`,swichbtn);
};
//false 디테일
const swichFalseSchedule = async (swichFalseBtn) => {
  console.log(swichFalseBtn)
  await instance.patch(`/date/schedule/cancel/${swichFalseBtn.id}`,swichFalseBtn);
};

//수정 디테일
const reTouchSchedule = async ({date,reTouch}) => {
  console.log(reTouch)
  await instance.put(`/date/${date}/${reTouch.id}`,reTouch);
};


const addUser = async (newUser) => {
  return await instance.post(`/user/signup`, newUser);
};

const loginUser = async (newUser) => {
  return await instance.post(`/user/login`, newUser);
};

export {
  getSchedules,
  addSchedule,
  getDetail,
  swichTrueSchedule,
  swichFalseSchedule,
  delSchedule,
  addDate,
  addUser,
  loginUser,
  reTouchSchedule
};
