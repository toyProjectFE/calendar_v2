import axios from "axios";
import instance from "./instance";

// const getProductByID = async (productId) => {
//   const response = await instance.get(
//     `${process.env.REACT_APP_SERVER_URL}/products/${productId}`,
//   );
//   return response.data;
// };

// const addProduct = async (newProduct) => {
//   await instance.post(
//     `${process.env.REACT_APP_SERVER_URL}/products`,
//     newProduct,
//   );
// };
// const removeProduct = async (id) => {
//   await instance.delete(`${process.env.REACT_APP_SERVER_URL}/products/${id}`);
// };

// const switchHeart = async (payload) => {
//   await instance.patch(
//     `${process.env.REACT_APP_SERVER_URL}/products/${payload.id}`,
//     {
//       heart: payload.heart,
//     },
//   );
// };

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

const getDetail = async (id) => {
  const response = await instance.get(`/schedule/${id}`);
  return response.data;
};
const addDate = async (newDate) => {
  await instance.post(`/schedule`, newDate);
};

const addSchedule = async (newSchedule) => {
  await instance.post(`/date`, newSchedule);
};

// const addTodoList = async (date) => {
//   await instance.post(`/date/${date}`, newSchedule);
// };

const removeDate = async (id) => {
  await instance.delete(`${process.env.REACT_APP_SERVER_URL}/schedule/${id}`);
};

const removeSchedule = async (id, postId) => {
  await instance.delete(
    `${process.env.REACT_APP_SERVER_URL}/schedule/${id}/${postId}`,
  );
};
export { getSchedules, addSchedule, removeSchedule };
