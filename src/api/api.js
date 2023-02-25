import axios from "axios"
//조회
const getCalender = async()=>{
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user`)
    return response.data
}
//생성
const addCalender = async(newCalender)=>{
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/user`,newCalender)
}
export {getCalender,addCalender}