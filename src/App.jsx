import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet, Routes, Route } from 'react-router'
import HeroSection from './Components/HeroSection'
import Feature from './Components/Feature'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/feature' element={<Feature/>}/>
      </Routes>
      <Footer/>
      <Footer/>
    </>
  )
}

export default App

