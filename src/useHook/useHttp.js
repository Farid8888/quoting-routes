import { useReducer,useCallback } from "react"



const httpReducer =(state,action)=>{
if(action.type === 'SEND'){
    return {
        status:'pending',
        data:state.data,
        error:state.error
    }
}
if(action.type === 'SUCCESS'){
    return{
        status:'success',
        data:action.data,
        error:state.error
    }
}
if(action.type === 'ERROR'){
    return{
        status:'error',
        data:state.data,
        error:action.errorMessage
    }
}
return state
}



const useHttp =(requestFunction)=>{
    const [state,dispatch] = useReducer(httpReducer,{
        status:null,
        data:[],
        error:null
    })
const sendRequest =useCallback(async (requestData)=>{
    dispatch({type:'SEND'})
    try{
        const responseData = await requestFunction(requestData)
        dispatch({type:'SUCCESS',data:responseData})
    }catch(error){
       dispatch({type:'ERROR',errorMessage:error.message})
    }
},[requestFunction])
    return {
        sendRequest,
        ...state
    }
}

export default useHttp