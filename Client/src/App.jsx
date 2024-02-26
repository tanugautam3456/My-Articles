import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import DashBoard from './pages/DashBoard'
import Project from './pages/Project'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import FooterComponents from './components/FooterComponents'


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<SignUp />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/project" element={<Project />} />
    </Routes>
    <FooterComponents/>
  </BrowserRouter>
    
  )
}

export default App
