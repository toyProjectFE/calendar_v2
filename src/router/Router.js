import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../share/component/detail/Detail'
const Router =()=>{
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<login/>}/>
            <Route path="/main" element={<main/>}/>
            <Route path="/main:id" element={<Detail/>}/>
        </Routes>
    </BrowserRouter>
}

export default Router