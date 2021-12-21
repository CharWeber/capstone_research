import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from "@mui/material";
import Home from "./Home";
import FacilityControl from "./FacilitiesComponents/FacilityControl";
import AthleticControl from "./AthleticComponents/AthleticControl";
import CraftControl from "./CraftComponents/CraftControl";

import Navbar from "./Navbar";
import User from "./User";


export default function MainRouter(){

    return(
      <Router>
      <Navbar />
      <Container maxwidth='lg'>
        <Routes>
          <Route path='/facility' element={<FacilityControl />} />
          <Route path='/crafts' element={<CraftControl />} />
          <Route path='/athletics' element={<AthleticControl />} />
          <Route path='/user' element={<User/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </Container>
    </Router>
  )

}

