
import { useStorage } from '../context/useStorage';

import  '../Grid.css'


 export const Filterinfo = () => {
  
  const {filtervalue ,setFilterValue} =  useStorage()

    const handleChange = (e) => {
        
        if(filtervalue === e.target.value ){ 
            setFilterValue(null) 
        } 
         else{ 
             setFilterValue(e.target.value)
            
        } 
    }

return(
    <div className='filter'>
    <h3>filter by alliance</h3>
  <form className="form-select" onChange={handleChange} >
      <div >
           <input type="checkbox" className='checkbox'  name="alliance" value="OW" checked={ filtervalue === "OW" ? true: false } />
           <label className='label'>OneWorld</label> 
        </div>
       <div >
           <input type="checkbox" className='checkbox'  name="alliance" value="ST" checked={ filtervalue === "ST" ? true: false }/>
          <label className='label'>Sky Team</label> 
       </div>
       <div >
           <input type="checkbox" className='checkbox'  name="alliance" value="SA" checked={ filtervalue === "SA" ? true: false }/>
           <label  className='label'>Start Alliance</label>  
      </div>
 </form>  
</div>
)


}