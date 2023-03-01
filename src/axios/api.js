import instance from "./instance";
//import axios from "axios";
//import { getCookie } from "./cookies";
const getMemo = async () => {
  const response = await instance.get(`/memo`);
  return response.data;
};

const postMemo = async () => {
  const response = await instance.post(`/memo`);
  return response.data;
};

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

// const addSchedule = async (id, newSchedule) => {
//   await axios({
//     url: `http://15.164.158.158:8080/date/${id}`,
//     method: "post",
//     data: {
//       title: newSchedule.title,
//       author: newSchedule.author,
//       contents: newSchedule.contents,
//     },
//   })
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// };

//  title error ???   ㅌ
// const accessToken = getCookie("ACCESS_TOKEN");
// const addSchedule = async (id, newSchedule) => {
//   await axios.post(`/date/${id}`, newSchedule, {
//     headers: {
//       Authorization: accessToken,
//     },
//   });
// };

//삭제 디테일
const delSchedule = async ({date,id}) => {
  console.log(date)
  await instance.delete(`/date/${date}/${id}`);
};
//true 디테일
const swichTrueSchedule = async (swichbtn) => {
  //console.log(swichbtn)
  await instance.patch(`/date/schedule/complete/${swichbtn.id}`,swichbtn);
};
//false 디테일
const swichFalseSchedule = async (swichFalseBtn) => {
  //console.log(swichFalseBtn)
  await instance.patch(`/date/schedule/cancel/${swichFalseBtn.id}`,swichFalseBtn);
};

//수정 디테일
const reTouchSchedule = async ({date,reTouch}) => {
  console.log(reTouch)
  await instance.put(`/date/${date}/${reTouch.id}`,reTouch);
};

//조회 디테일
// const getDetail = async () => {
//   const response = await axios.get( `${process.env.REACT_APP_SERVER_URL}/schedule` );
//   return response.data;
// };

// //생성 디테일
// const addSchedule = async (newSchedule) => {
//   await axios.post(`${process.env.REACT_APP_SERVER_URL}/schedule`, newSchedule);
// };
// //삭제 디테일
// const delSchedule = async (id) => {
//   await axios.delete(`${process.env.REACT_APP_SERVER_URL}/schedule/${id}`);
// };
// //트루펄스 디테일
// const swichSchedule = async (payload) => {
//   await axios.patch(`${process.env.REACT_APP_SERVER_URL}/schedule/${payload.id}`,{
//     complete: payload.complete
//   });
// };

const removeDate = async (id) => {
  await instance.delete(`${process.env.REACT_APP_SERVER_URL}/schedule/${id}`);
};
const removeSchedule = async (id, postId) => {
  await instance.delete(
    `${process.env.REACT_APP_SERVER_URL}/schedule/${id}/${postId}`,
  );
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
  removeSchedule,
  getDetail,
  swichTrueSchedule,
  swichFalseSchedule,
  delSchedule,
  addDate,
  addUser,
  loginUser,
  reTouchSchedule
};
