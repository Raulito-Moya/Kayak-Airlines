import { useStorage } from '../context/useStorage';
import { useAirline } from '../hooks/useAirlines';
import   '../Grid.css'
import GridItem from './GridItem';

export const GridContainer = () => {
    
    const {airlines,filtervalue } =  useStorage()

    const {  totalOW, totalSA, totalST } =  useAirline(airlines)
   

  return(
    <div className="grid-container">
    {
         
      filtervalue === null &&  airlines.map((airline, index) => {


            return (
                <GridItem key={index} airline={airline} />
            )
        })

   }

   {
         filtervalue === "OW" &&  totalOW.map((airline, index) => {


            return (
                <GridItem key={index} airline={airline} />
            )
        })  
   }


    { 
         filtervalue === "ST" &&  totalST.map((airline, index) => {


            return (
                <GridItem key={index} airline={airline} />
            )
        })  
   }

   
   { 
         filtervalue === "SA" &&  totalSA.map((airline, index) => {

            return (
                <GridItem key={index} airline={airline} />
            )
        })  
   }
     

    </div>
  )

}