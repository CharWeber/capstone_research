import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignInForm from "./SignInForm";
import Home from "./Home";
import {useSigninCheck} from 'reactfire';
import Navbar from "./Navbar";


export default function MainRouter(){

  const {status, data: signInCheckResult} = useSigninCheck();

  
  if(status === 'loading'){
    return <span> Loading...</span>
  }

  if (signInCheckResult.signedIn === true){
    return(
      <Router>
      <Navbar />
      <Routes>
        <Route path='/signIn' element={<SignInForm/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
} else {
  return <SignInForm />
}
}