import { combineReducers, createStore } from "redux";
import kakaoLogin from "../modules/kakaoLogin";

const rootReducer = combineReducers({
  kakaoLogin: kakaoLogin,
});
const store = createStore(rootReducer);

export default store;
