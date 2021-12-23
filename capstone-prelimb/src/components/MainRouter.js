import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import FacilityControl from "./FacilitiesComponents/FacilityControl";
import AthleticControl from "./AthleticComponents/AthleticControl";
import CraftControl from "./CraftComponents/CraftControl";
import UserControl from "./UserComponents/UserControl";
import TheatreControl from './TheatreComponents/TheatreControl'
import Navbar from "./Navbar";



export default function MainRouter(){

    return(
      <Router>
    
      <Navbar />
      
        <Routes>
          <Route path='/facility' element={<FacilityControl />} />
          <Route path='/theatre' element={<TheatreControl />} />
          <Route path='/crafts' element={<CraftControl />} />
          <Route path='/athletics' element={<AthleticControl />} />
          <Route path='/user' element={<UserControl/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
    </Router>
  )

}

