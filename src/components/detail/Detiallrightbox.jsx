import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { addCalender } from "../../api/api";
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
  const queryClient = useQueryClient();
  const muraruion = useMutation(addCalender, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      console.log("성공하였습니다.");
    },
  });
  //작성자명
  const [userName, setUserName] = useState("");
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  //제목
  const [title, setTitle] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  //내용
  const [content, setContent] = useState("");
  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  const btnClick = (e)=>{
    e.preventDefault();
    if (title.trim() === "") {
      alert("제목을 적어주세요");
      return;
    } else if (userName.trim() === "") {
      alert("작성자명을 적어주세요");
      return;
    } else if (content.trim() === "") {
      alert("내용을 적어주세요");
      return;
    }
    const newCalender = {
      title: title,
      userName: userName,
      content: content,
      Done:false,
    };
    muraruion.mutate(newCalender);
    //state 초기화 
    setUserName('')
    setTitle("");
    setContent("");
  }
  return (
    <Rightbg>
      <Rightcenter onSubmit={btnClick}>
        <Box>
          <Label>작성자</Label>
          <Input
            type="text"
            placeholder="작성자를 적어주세요"
            maxLength="20"
            onChange={userNameHandler}
            value={userName}
          />
        </Box>
        <Box>
          <Label>제목</Label>
          <Input
            type="text"
            placeholder="제목을 적어주세요"
            onChange={titleHandler}
            value={title}
          />
        </Box>
        <Box>
          <Label>내용</Label>
          <Textarea
            placeholder="내용을 적어주세요"
            onChange={contentHandler}
            value={content}
          />
        </Box>
        <RightButton>등록하기</RightButton>
      </Rightcenter>
    </Rightbg>
  );
}

export default Detiallrightbox