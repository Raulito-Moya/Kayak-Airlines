

 export const useAirline = (airlines) => {
  
   const getTotal = () => {
      
      if(airlines){
  
      
      const total = airlines.filter(item => {
          if(item.alliance === "OW" || item.alliance === "ST" || item.alliance === "SA"){
            return item
          }
           return total
         })
  
        
      }
         
   }
  
   
   const totalOW = airlines.filter(item => {
    if(item.alliance === "OW" ){
      return item
    }
      
   })
  
   const totalST = airlines.filter(item => {
    if(item.alliance === "ST" ){
      return item
    }
      
   })

   const totalSA = airlines.filter(item => {
    if(item.alliance === "SA" ){
      return item
    }
     
   })


    
   return { getTotal, totalOW, totalST, totalSA }
    
}

