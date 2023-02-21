import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Navbar from '../Header/Navbar'

export default function CustomRoutes() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/services' element={<Services/>} />
         <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}
