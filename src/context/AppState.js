import { useReducer } from "react";
import { getAirlines } from "../api/getAirlines";
import AppContext from "./app-context";
import { appReducer } from "./app-reducer";


export const AppState = (props) => {
  
  const initialState = {
   
    airlines: [],
    filtervalue:null

  }


    const [state, dispatch] = useReducer(appReducer, initialState)

 const setAirlines = async() => {

   const res = await getAirlines()
 
   dispatch({
      type: 'GET_AIRLINES',
      payload: res
   })

 }

 const setFilterValue = (value) => {
   
    dispatch({
      type: 'SET_FILTER_VALUE',
      payload: value
    })


 }




 return(
   <AppContext.Provider
   value={{
     airlines: state.airlines,
     setAirlines,
     filtervalue: state.filtervalue,
      setFilterValue
   }}>

{props.children}

   </AppContext.Provider>
 )

}