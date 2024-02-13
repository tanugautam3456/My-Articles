import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import DashBoard from './pages/DashBoard'
import Project from './pages/Project'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  </BrowserRouter>
    
  )
}

export default App
