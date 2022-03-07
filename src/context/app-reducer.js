
export const appReducer = (state, action) => {

 switch(action.type){

    case 'GET_AIRLINES':
        return {
            ...state,
            airlines: action.payload
        }
    
     case 'SET_FILTER_VALUE':
         return {
             ...state,
             filtervalue: action.payload
         }
         
        default: case "DEFAULT":
             return {...state} 
 }
 

}