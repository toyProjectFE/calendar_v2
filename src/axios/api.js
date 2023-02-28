
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
  const response = await instance.get(`/date`);
  return response.data;
};


//조회 디테일
const getDetail = async (currentDayID) => {
    const response = await instance.get(`/date/${currentDayID}`);
    console.log(response.data)
    return response.data;
};


const addDate = async (newDate) => {
  await instance.post(`/date`, newDate);
};

//생성 디테일
const addSchedule = async (newSchedule,currentDayID) => {
  await instance.post(`/date/${currentDayID}`, newSchedule);
  
};
console.log(addSchedule)
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
