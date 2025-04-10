import React from 'react'
import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Categories from './components/Categories'
import Slider from './components/Slider'
import Products from './components/Products'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import './App.css'

const App = () => {
  return (
    <>
    <Announcement />
    <Navbar />
    <Slider />
    <Categories />
    <Products />
    <AboutUs />
    <Footer />
    </>
  )
}

export default App