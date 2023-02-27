
import React, { useState } from 'react'
import {useQuery } from "react-query";
import { getDetail } from "../../api/api";
import { useQueryClient } from 'react-query';
import { useMutation } from 'react-query';
import { swichSchedule } from '../../api/api';

import Card from './Card';

import {
  Allbox,
  Tapboxlink,
  Tapboxli,
  TOPbox,
  Detaillbg,
  Btnbox,
} from "./style";



function Detailleftbox({ id }) {
  // const schedule = useSelector((state) => {
//   console.log(state.cal.schedule);
//   return state.cal.schedule;
  
// });
  const queryClient = useQueryClient();
  const swichmurarion = useMutation(swichSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries("schedule");
      console.log("성공하셧습니다.");
    },
    onError: () => {
      queryClient.invalidateQueries("schedule");
      console.log("실패하셧습니다.");
    },
  });

  const swichhander = (id) => {
    const swichbtn = {
      id: id,
      complete: data.filter((item) =>
        item.id === id ? { complete: !data.complete } : data
      ),
      // data.complete,
    };
    swichmurarion.mutate(swichbtn);
    //console.log(data);
  };
  const [openTab, setOpentab] = useState(1);
  const { isLoading, isError, data } = useQuery("schedule", getDetail);
  //console.log(data);
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
        {/* //<p>20/30</p> */}
      </TOPbox>
      <Btnbox>
        <Allbox className={openTab === 1 ? "block" : "hidden"} id="link1">
          {data.map((item) => {
            if (!item.complete || item.complete) {
              return (
                <Card state={item} key={item.id} swichhander={swichhander} />
              );
            } else {
              return null;
            }
          })}
        </Allbox>
        <Allbox className={openTab === 2 ? "block" : "hidden"} id="link2">
          {data.map((item) => {
            if (!item.complete) {
              return (
                <Card state={item} key={item.id} swichhander={swichhander} />
              );
            } else {
              return null;
            }
          })}
        </Allbox>
        <Allbox className={openTab === 3 ? "block" : "hidden"} id="link3">
          {data.map((item) => {
            if (item.complete) {
              return (
                <Card state={item} key={item.id} swichhander={swichhander} />
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

export default Detailleftbox
