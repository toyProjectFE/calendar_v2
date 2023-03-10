import axios from "axios";
import { getCookie } from "./cookies";

// const accessToken = localStorage.setItem("token");
// const accessToken = getCookie("ACCESS_TOKEN");
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    // Authorization: accessToken,
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  //요청을 보내기 전 수행
  function (config) {
    // 토큰을 요청이 시작될 때 가져옴
    const accessToken = getCookie("ACCESS_TOKEN");
    // 요청 config headers에 토큰을 넣어 줌
    config.headers["Authorization"] = accessToken;
    return config;
  },

  // 오류 요청을 보내기 전 수행
  function (error) {
    console.log("데이터 보내는중 오류!");
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  //서버로부터 정상 응답을 받는 경우
  function (config) {
    const accessToken = getCookie("ACCESS_TOKEN");
    config.headers["Authorization"] = accessToken;

    return config;
  },

  // //서버로부터 오류 응답을 받은 경우
  // //권한처리는 맞는데.... 권한이 필요없는곳에서의 control??
  function (error) {
    if (error.response.status === 401) {
      window.alert("인증이 필요합니다. 다시 로그인 하세요.");
    }
    return Promise.reject(error);
  },
);
export default instance;
