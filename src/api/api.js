import axios from "axios"



//조회 디테일
const getDetail = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/schedule`);
    return response.data;
};


//생성 디테일
const addSchedule = async (newSchedule) => {
await axios.post(`${process.env.REACT_APP_SERVER_URL}/schedule`, newSchedule);
};

//트루펄스 디테일
const swichSchedule = async (payload) => {
    await axios.patch(`${process.env.REACT_APP_SERVER_URL}/schedule/${payload.id}`,{
        complete:payload.complete
    });
};


export { swichSchedule,getDetail,addSchedule };