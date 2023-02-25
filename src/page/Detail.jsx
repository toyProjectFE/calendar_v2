import React from "react";
import Detailleftbox from "../components/detail/Detailleftbox";
import Detiallrightbox from "../components/detail/Detiallrightbox";
import { Detailbox } from "../components/detail/style";
function Detail() {
  return (
    <>
      {/* <RenderHeader /> */}
      <Detailbox>
        <Detailleftbox />
        <Detiallrightbox />
      </Detailbox>
    </>
  );
}

export default Detail;
