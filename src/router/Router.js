import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../page/Detail";
import Login from "../page/Login";
import Main from "../page/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
