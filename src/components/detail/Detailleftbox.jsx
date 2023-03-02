import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router";
import {
  swichTrueSchedule,
  swichFalseSchedule,
  getDetail,
  delSchedule,
} from "../../axios/api";

import Modal from "./Modal";
import {
  Allbox,
  Tapboxlink,
  Tapboxli,
  TOPbox,
  Detaillbg,
  Btnbox,
  Content,
  Title,
  Button,
  Allboxli,
  Nickname,
} from "./style";

function Detailleftbox() {
  const { id } = useParams();
  const date = id;
  //모달부분
  const [ModalOpen, setModalOpen] = useState(false);
  const ModalButton = (id) => {
    setModalOpen(id);
  };
  const closeBtn = () => {
    setModalOpen(false);
  };

  const queryClient = useQueryClient();

  

  //true 스위치
  const swichTrueMutation = useMutation(swichTrueSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries("schedule");
      console.log("성공하셧습니다.");
    },
    onError: () => {
      queryClient.invalidateQueries("schedule");
      console.log("실패하셧습니다.");
    },
  });
  const swichTrueHander = (id) => {
    const swichbtn = {
      id: id,
      complete: true,
    };
    swichTrueMutation.mutate(swichbtn);
  };
  //false 스위치
  const swichFalseMurarion = useMutation(swichFalseSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries("schedule");
      console.log("성공하셧습니다.");
    },
    onError: () => {
      queryClient.invalidateQueries("schedule");
      console.log("실패하셧습니다.");
    },
  });

  const swichfalseHander = (id) => {
    const swichFalseBtn = {
      id: id,
      complete: false,
    };
    swichFalseMurarion.mutate(swichFalseBtn);
  };

  //삭제부분입니다.
  const Delmurarion = useMutation(delSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries("schedule");
      console.log("성공하셧습니다.");
    },
  });
  const delBtn = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      Delmurarion.mutate({ date, id });
      alert("삭제되었습니다.");
    } else {
      Delmurarion.mutate();
      alert("취소되었습니다.");
    }
  };
  //조회 부분입니다.
  const [openTab, setOpentab] = useState(1);
  const { isLoading, isError, data } = useQuery("schedule", () =>
    getDetail(date)
  );
  if (isLoading) {
    return <h1>"성공했습니다!"</h1>;
  }
  if (isError) {
    return <h1>"오류입니다!"</h1>;
  }

  return (
    <Detaillbg>
      <TOPbox>
        <Allbox>
          <Tapboxli>
            <Tapboxlink
              className={openTab === 1 ? "Textcolor01" : "Textcolor02"}
              onClick={(e) => {
                e.preventDefault();
                setOpentab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Incomplete
            </Tapboxlink>
          </Tapboxli>
          <Tapboxli>
            <Tapboxlink
              className={openTab === 2 ? "Textcolor01" : "Textcolor02"}
              onClick={(e) => {
                e.preventDefault();
                setOpentab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Complete
            </Tapboxlink>
          </Tapboxli>
        </Allbox>
      </TOPbox>
      <Btnbox>
        <Allbox className={openTab === 1 ? "block" : "hidden"} id="link1">
          {data.map((item) => {
            if (!item.complete) {
              return (
                <Allboxli key={item.id}>
                  <Button
                    onClick={() => swichTrueHander(item.id, item.complete)}
                  >
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4.24265"
                        y="8.48528"
                        width="6"
                        height="2"
                        transform="rotate(-135 4.24265 8.48528)"
                        fill="white"
                      />
                      <rect
                        x="2.82843"
                        y="7.07108"
                        width="10"
                        height="2"
                        transform="rotate(-45 2.82843 7.07108)"
                        fill="white"
                      />
                    </svg>
                  </Button>
                  <div onClick={() => ModalButton(item.id)}>
                    <Nickname>작성자 : {item.author}</Nickname>
                    <div>
                      <Title>{item.title}</Title>
                      <Content>{item.contents}</Content>
                    </div>
                  </div>
                  {ModalOpen === item.id && (
                    <Modal
                      setModalopen={setModalOpen}
                      item={item}
                      delBtn={delBtn}
                      closeBtn={closeBtn}
                      date={date}
                    />
                  )}
                </Allboxli>
              );
            } else {
              return null;
            }
          })}
        </Allbox>
        <Allbox className={openTab === 2 ? "block" : "hidden"} id="link2">
          {data.map((item) => {
            if (item.complete) {
              return (
                <Allboxli key={item.id} className="on">
                  <Button
                    onClick={() => swichfalseHander(item.id, item.complete)}
                  >
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4.24265"
                        y="8.48528"
                        width="6"
                        height="2"
                        transform="rotate(-135 4.24265 8.48528)"
                        fill="white"
                      />
                      <rect
                        x="2.82843"
                        y="7.07108"
                        width="10"
                        height="2"
                        transform="rotate(-45 2.82843 7.07108)"
                        fill="white"
                      />
                    </svg>
                  </Button>
                  <div onClick={() => ModalButton(item.id)}>
                    <Nickname>작성자 : {item.author}</Nickname>
                    <div>
                      <Title>{item.title}</Title>
                      <Content>{item.contents}</Content>
                    </div>
                  </div>
                  {ModalOpen === item.id && (
                    <Modal
                      setModalopen={setModalOpen}
                      item={item}
                      delBtn={delBtn}
                      closeBtn={closeBtn}
                      date={date}
                    />
                  )}
                </Allboxli>
              );
            } else {
              return null;
            }
          })}
        </Allbox>
      </Btnbox>
    </Detaillbg>
  );
}

export default Detailleftbox;
