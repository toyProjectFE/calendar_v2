import React, { useState } from "react";
import {
  Modalbg,
  Modalcon,
  Modaltitle,
  Modalbtnwrap,
  Modalbtn1,
  Modalbtn2,
  Modalbtn3,
  Input,
  Textarea,
  Modalp,
} from "./style";
import { useMutation, QueryClient } from "react-query";
import { reTouchSchedule } from "../../axios/api";
function Modal({ item, delBtn, closeBtn, date }) {
  const queryClient = new QueryClient();
  const [visibleBtn, setVisibleBtn] = useState(false);
  const [titleChange, setTitleChange] = useState("");
  const [authorChange, setAuthorChange] = useState("");
  const titleHandlerChange = (e) => {
    setTitleChange(e.target.value);
  };
  const authorHandlerChange = (e) => {
    setAuthorChange(e.target.value);
  };
  const [contentsChange, setContentsChange] = useState("");
  const contentsHandlerChange = (e) => {
    setContentsChange(e.target.value);
  };

  //수정
  const reTouchMutation = useMutation(reTouchSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries("schedule");
      console.log("성공하셧습니다.");
    },
    onError: () => {
      queryClient.invalidateQueries("schedule");
      console.log("실패하셧습니다.");
    },
  });
  const fatchBtn = (id) => {
    if (titleChange.trim() === "") {
      alert("제목을 적어주세요");
      return;
    } else if (contentsChange.trim() === "") {
      alert("내용을 적어주세요");
      return;
    } else if (authorChange.trim() === "") {
      alert("내용을 적어주세요");
      return;
    }
    const reTouch = {
      id: id,
      title: titleChange,
      author: authorChange,
      contents: contentsChange,
    };
    reTouchMutation.mutate({ date, reTouch });
    window.location.reload();
  };
  return (
    <Modalbg>
      <Modalcon>
        <Modalp>작성자 : {item.author}</Modalp>
        <Modaltitle>{item.title}</Modaltitle>
        <Modalp>{item.contents}</Modalp>
        <Modalbtnwrap>
          <Modalbtn1 onClick={() => setVisibleBtn(!visibleBtn)}>수정</Modalbtn1>
          <Modalbtn2 onClick={() => delBtn(item.id)}>삭제</Modalbtn2>
          <Modalbtn3 onClick={() => closeBtn()}>닫기</Modalbtn3>
        </Modalbtnwrap>
      </Modalcon>
      {visibleBtn && (
        <Modalcon style={{ zIndex: 1 }}>
          <Input
            type="text"
            placeholder="작성자명을 일치시켜주세요"
            onChange={authorHandlerChange}
            value={authorChange}
            maxLength="20"
          />
          <Modaltitle>
            <Input
              type="text"
              placeholder="제목을 적어주세요"
              onChange={titleHandlerChange}
              value={titleChange}
              maxLength="60"
            />
          </Modaltitle>
          <p>
            <Textarea
              placeholder="내용을 적어주세요"
              onChange={contentsHandlerChange}
              value={contentsChange}
              maxLength="230"
            />
          </p>
          <Modalbtnwrap>
            <Modalbtn1 onClick={() => fatchBtn(item.id)}>수정</Modalbtn1>
            <Modalbtn3 onClick={() => setVisibleBtn(!visibleBtn)}>
              취소
            </Modalbtn3>
          </Modalbtnwrap>
        </Modalcon>
      )}
    </Modalbg>
  );
}

export default Modal;
