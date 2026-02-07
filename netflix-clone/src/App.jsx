import React from 'react'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Netflix from './pages/Netflix'
import Signup from './pages/Signup'
import Login from './pages/Login'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signup" element={<Signup/>} />
        <Route exact path="/" element={<Netflix />} />

      </Routes></BrowserRouter>
  )
}
