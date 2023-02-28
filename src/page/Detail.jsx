import React from "react";
<<<<<<< HEAD
import Detailleftbox from "../components/detail/Detailleftbox";
import Detiallrightbox from "../components/detail/Detiallrightbox";
import { Detailbox } from "../components/detail/style";
import RenderHeader from "../components/header/RenderHeader";
function Detail() {
  return (
    <>
      <RenderHeader/>
      <Detailbox> 
        <Detailleftbox />
        <Detiallrightbox />
      </Detailbox>
=======
import Detailwrap from "../components/detail/Detailwrap";
import Header from "../components/header/Header";
function Detail() {
  return (
    <>
      <Header/>
      <Detailwrap />
>>>>>>> 74ea3934d8b3aaeca3a6442d253ed110d762c6f3
    </>
  );
}

export default Detail;
