import React  from 'react'
import './App.css';
import { useEffect} from 'react'
import { Route,
  HashRouter as Router, Routes } from 'react-router-dom'


import AirlineGrid from './pages/AirlineGrid';
import { useStorage } from './context/useStorage';
import { NavBar } from './components/NavBar';


function App() {
   
   const {airlines, setAirlines } =  useStorage()

   

  useEffect(() => {
    if(airlines.length === 0){
     setAirlines()
    }
  })
  
  



  return (
   
   <div >
      <NavBar />

   <Router>
     

     <Routes>
        <Route path="/" element={<AirlineGrid/>}/>

      </Routes>

    
     </Router>
   </div> 
    

  



   
  );
}

export default App;
