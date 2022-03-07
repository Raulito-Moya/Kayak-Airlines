import  '../Grid.css'


const GridItem = ({airline}) => {
   

  const slice = airline.site.slice(12)
  const withalliance =  (airline?.alliance === 'none' && '') || (airline.alliance === 'SA' && 'Start Alliance') || (airline.alliance === 'OW' && 'Oneworld') ||  (airline.alliance === 'ST' && 'Sky Team') 
 

 return(
   
    <div className={withalliance ? "grid-item-alliance":"grid-item"}>
     
       <img className='item-logo' src={ 'https://kayak.com/' + airline.logoURL} width="100px" alt="airline logo"/> 
     
      <div className='item-subinfo'>
        <h2 className={withalliance ? "item-title-alliance" : "item-title"}>{airline.name}</h2>
         { 
            
           withalliance &&  (
            <>
              <span className='item-alliance'>{(airline?.alliance === 'none' && '') || (airline.alliance === 'SA' && 'Start Alliance') || (airline.alliance === 'OW' && 'Oneworld') ||  (airline.alliance === 'ST' && 'Sky Team')  }</span>
              <span className='item-phone'>{airline?.phone}</span> 
              <a className='item-site' href={airline.site}>{slice}</a>
            </>
          )
              
                
          }
        
   
           
        </div>
     </div>



 )

}

export default GridItem