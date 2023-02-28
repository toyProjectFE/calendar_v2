import axios from "axios";
import instance from "./instance";

const getMemo = async () => {
  const response = await instance.get(`/memo`);
  return response.data;
};

const postMemo = async () => {
  const response = await instance.post(`/memo`);

  return response.data;
};

const getSchedules = async () => {
  const response = await instance.get(`/schedule`);
  return response.data;
};


//조회 디테일
const getDetail = async (id) => {
    const response = await instance.get(`/schedule/${id}`);
    return response.data;
};


const addDate = async (newDate) => {
  await instance.post(`/schedule`, newDate);
};

//생성 디테일
const addSchedule = async (newSchedule) => {
  await instance.post(`/date`, newSchedule);
};
//트루펄스 디테일
const swichSchedule = async (payload) => {
  await instance.patch(`/date/${payload.id}`,{
    complete:payload.complete
  });
};


const removeDate = async (id) => {
  await instance.delete(`${process.env.REACT_APP_SERVER_URL}/schedule/${id}`);
};

const removeSchedule = async (id, postId) => {
  await instance.delete(
    `${process.env.REACT_APP_SERVER_URL}/schedule/${id}/${postId}`,
  );
};
export { getSchedules, addSchedule, removeSchedule,getDetail,swichSchedule };
