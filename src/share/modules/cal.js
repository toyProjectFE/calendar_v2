
//action items 3 
const ADD_PASS = 'ADD_PASS'
const REMOVE_PASS ='REMOVE_PASS'
const SWITCH_PASS = 'SWITCH_PASS'

//리듀서 만든거 내보내기 4 
export const add_Pass = (payload)=>{
  return{
    type:ADD_PASS,
    payload:payload
  }
}


export const remove_Pass = (payload)=>{
  return{
    type:REMOVE_PASS,
    payload:payload
  }
}
export const switch_Pass = (payload)=>{
  return{
    type:SWITCH_PASS,
    payload:payload
  }
}
//초기값 1 
const ininialState = [
  {
    id: 1,
    username:"유느님",
    title: "제목입니다.",
    text: "내용입니다.",
    Done: false
  },
  {
    id: 2,
    username:"명수옹",
    title: "제목입니다.",
    text: "내용입니다.",
    Done: false
  }
]



//reducers 2
const cal = (state = ininialState,action)=>{
  switch(action.type){
    case ADD_PASS:
      return [...state,action.payload]
    case REMOVE_PASS:
      return state.filter((item)=>item.id !==action.payload )
    case SWITCH_PASS:
      return state.map((item)=>{
        if(item.id === action.payload){
          return {...item,Done:!item.Done}
        }else{
          return item
        }
      })
    default:
      return state
  }
}

export default cal