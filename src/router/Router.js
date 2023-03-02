import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import kakao from "../components/kakao";
import Detail from "../page/Detail";
import Login from "../page/Login";
import Main from "../page/Main";
import Sign from "../page/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/main" element={<Main />} />
        <Route path="/oauth/callback/kakao" component={kakao}></Route>
        <Route path="/main/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
