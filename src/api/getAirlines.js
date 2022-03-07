
import axios  from 'axios-jsonp'
let jsonpAdapter = require('axios-jsonp');

export const getAirlines = async() => { 
     
   

    try {
       
         let res = await axios({
            url: 'https://kayak.com/h/mobileapis/directory/airlines/homework?name=jsonp',
            adapter: jsonpAdapter,
            callbackParamName: 'jsonp' 
        })

        return res.data

        
    } catch (error) {
        console.log(error);
    }
        
    
   
}