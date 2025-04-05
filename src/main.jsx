import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import App from './App'
import { RouterProvider } from 'react-router/dom'
import HeroSection from './Components/HeroSection'
import Feature from './Components/Feature'
import Workflow from './Components/Workflow'
import Testimonials from './Components/Testimonials'
import Pricing from './Components/Pricing'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<HeroSection/>}/>
      <Route path='feature' element={<Feature/>}/>
      <Route path='workflow' element={<Workflow/>}/>
      <Route path='testimonials' element={<Testimonials/>}/>
      <Route path='pricing' element={<Pricing/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
