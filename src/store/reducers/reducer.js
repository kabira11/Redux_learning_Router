import actionType from '../constant/constant'
  const initialState = {
    userName : "Pankaj Bhardwaj"
  }
  
  export default function(state = initialState, action){
    console.log("action log")
    console.log(action)
    switch(action.type){
      case actionType.CHANGEUSERNAME:
        return ({
          ...state,
          userName : action.payload
        })
        default:
            return state; 
    }
}



