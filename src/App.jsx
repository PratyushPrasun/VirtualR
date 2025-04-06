import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet, Routes, Route } from 'react-router'
import HeroSection from './Components/HeroSection'
import Feature from './Components/Feature'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Workflow from './Components/Workflow'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/feature' element={<Feature/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/workflow' element={<Workflow/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

