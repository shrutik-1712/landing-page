import React from 'react'
import BannerSlider from './BannerSlider'
import Vendors from './Vendors'
import Awards from './Awards'
import { Contact } from 'lucide-react'
import Footer from './Footer'
import Navbar from './NavBar'
import Contact from './Contact'
const HomePage = () => {
  return (
    <>
        <Navbar />
        <BannerSlider />
        <Vendors />
        <Awards />
        <Contact />
        <Footer/>
    </>
  )
}

export default HomePage