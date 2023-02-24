import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../share/page/Detail'
const Router =()=>{
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<login/>}/>
                <Route path="/main" element={<main/>}/> */}
                <Route path="/Detail" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router