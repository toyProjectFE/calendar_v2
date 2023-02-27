import React, { useState } from "react";
import {
  Content,
  Title,
  Button,
  Top,
  Allboxli,
  Allbox,
  Tapboxlink,
  Tapboxli,
  Numbox,
  TOPbox,
  Detaillbg,
  Btnbox,
} from "./style";

function Detailleftbox({ id }) {
  const [openTab, setOpentab] = useState(1);
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
              All
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
              href="#link1"
              role="tablist"
            >
              Incomplete
            </Tapboxlink>
          </Tapboxli>
          <Tapboxli>
            <Tapboxlink
              className={openTab === 3 ? "Textcolor01" : "Textcolor02"}
              onClick={(e) => {
                e.preventDefault();
                setOpentab(3);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Complete
            </Tapboxlink>
          </Tapboxli>
        </Allbox>
        <Numbox>20/30</Numbox>
      </TOPbox>
      <Btnbox>
        <Allbox className={openTab === 1 ? "block" : "hidden"} id="link1">
          <Allboxli>
            <Top>
              <p>작성자명</p>
              <Button>
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
            </Top>
            <div>
              <Title>제목을 적어주세요</Title>
              <Content>
                내용을 적어주세요 내용을 적어주세요 내용을 적어주세요 내용을
                적어주세요 내용을 적어주세요 내용을 적어주세요
              </Content>
            </div>
          </Allboxli>
        </Allbox>
        <Allbox className={openTab === 2 ? "block" : "hidden"} id="link2">
          <Allboxli>
            <Top>
              <p>작성자명</p>
              <Button>
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
            </Top>
            <div>
              <Title>제목을 적어주세요</Title>
              <Content>
                내용을 적어주세요 내용을 적어주세요 내용을 적어주세요 내용을
                적어주세요 내용을 적어주세요 내용을 적어주세요
              </Content>
            </div>
          </Allboxli>
        </Allbox>
        <Allbox className={openTab === 3 ? "block" : "hidden"} id="link3">
          <Allboxli>
            <Top>
              <p>작성자명</p>
              <Button>
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
            </Top>
            <div>
              <Title>제목을 적어주세요</Title>
              <Content>내용을 적어주세요용을</Content>
            </div>
          </Allboxli>
        </Allbox>
      </Btnbox>
    </Detaillbg>
  );
}

export default Detailleftbox;
