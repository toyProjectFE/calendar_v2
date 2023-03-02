import React, { useState } from "react";
import styled from "styled-components";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getMemo, postMemo, deleteMemo } from "../../axios/api";
import { IdInput, Btn, Label } from "./style";

const MemoSection = () => {
  // useEffect(() => {
  //   instance.get(`/schedule/memo`).then((res) =>
  //     res.data.map((e) => {
  //       <li>{e.content}</li>;
  //     }),
  //   );
  // });

  const { data } = useQuery("memo", getMemo);
  const queryClient = useQueryClient();
  const mutation = useMutation(postMemo, {
    onSuccess: (response) => {
      queryClient.invalidateQueries("memo");
      console.log("메모 성공");
    },
    onError: () => {
      queryClient.invalidateQueries("memo");
      console.log("메모 실패");
    },
  });
  const [comment, setComment] = useState("");
  const memoHandler = (e) => {
    setComment(e.target.value);
  };
  const btnClick = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      alert("메모에 입력해주세요");
      return;
    }
    const newMemo = {
      content: comment,
    };
    mutation.mutate(newMemo);
    setComment("");
  };

  const removeMemo = useMutation(deleteMemo, {
    onSuccess: () => {
      queryClient.invalidateQueries("memo");
    },
  });
  const removeBtn = (id) => {
    removeMemo.mutate(id);
  };
  return (
    <Section>
      <form onSubmit={btnClick}>
        <Label>이번달 주요 일정:</Label>
        <IdInput
          type="text"
          placeholder="메모를 입력해주세요"
          onChange={memoHandler}
          value={comment}
        />
        <Btn>입력하기</Btn>
      </form>
      <Ul>
        {data?.map((memo) => (
          <Li key={memo.id}>
            <div>{memo.content}</div>
            <DeleteBtn onClick={() => removeBtn(memo.id)}>삭제</DeleteBtn>
          </Li>
        ))}
      </Ul>
    </Section>
  );
};

export default MemoSection;

const Section = styled.div`
  width: 15.62%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 98vh;
`;
const Ul = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Li = styled.li`
  font-size: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

const DeleteBtn = styled.button`
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgb(199, 80, 240);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  outline: 0;
  border: 0;
  width: 15%;
`;
