
import { Filterinfo } from '../components/FilterInfo';

import   '../Grid.css'
import { GridContainer } from '../components/GridContainer';

const AirlineGrid = (props) => {
      
 

 return(
     <div className="grid">
       <h1>Airlines</h1>
       <Filterinfo />        
        <GridContainer />
          
     </div>
 )


}

export default AirlineGrid