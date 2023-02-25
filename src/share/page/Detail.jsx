import React from 'react'
import Detailleftbox from "../component/detail/Detailleftbox";
import Detiallrightbox from '../component/detail/Detiallrightbox';
import { Detailbox } from "../component/detail/style";
function Detail() {
  return (
    <Detailbox>
      <Detailleftbox />
      <Detiallrightbox />
    </Detailbox>
  );
}

export default Detail;