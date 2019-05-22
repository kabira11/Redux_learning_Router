import actionType from '../constant/constant'


export function changeState(updatedUserName){
    return dispatch => {
        //here we can dispatch our action 
        dispatch({
                type : actionType.CHANGEUSERNAME, 
                payload : updatedUserName
                })
    }
}