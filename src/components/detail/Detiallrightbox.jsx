import React from 'react'
import {
  Rightbg,
  Label,
  Input,
  Textarea,
  Box,
  RightButton,
  Rightcenter,
} from "./style";
function Detiallrightbox() {
  return (
    <Rightbg>
      <Rightcenter>
        <Box>
          <Label>작성자</Label>
          <Input type="text" placeholder="작성자를 적어주세요" maxLength="20" />
        </Box>
        <Box>
          <Label>제목</Label>
          <Input type="text" placeholder="제목을 적어주세요" />
        </Box>
        <Box>
          <Label>내용</Label>
          <Textarea placeholder="내용을 적어주세요"></Textarea>
        </Box>
        <RightButton>등록하기</RightButton>
      </Rightcenter>
    </Rightbg>
  );
}

export default Detiallrightbox