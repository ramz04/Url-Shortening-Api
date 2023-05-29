import React from 'react'
import illustration from '../assets/images/illustration-working.svg'
import brand from '../assets/images/icon-brand-recognition.svg'
import records from '../assets/images/icon-detailed-records.svg'
import customizable from '../assets/images/icon-fully-customizable.svg'
import bgMobile from "../assets/images/bg-boost-mobile.svg"
import bgDesktop from "../assets/images/bg-boost-desktop.svg"
import facebook from "../assets/images/icon-facebook.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import instagram from "../assets/images/icon-instagram.svg"
import logo from "../assets/images/logo.svg"
import Footer from './Footer'
import Boost from './Boost'
import Advanced from './Advanced'
import Hero from './Hero'
import Shortener from './Shortener'

function Home() {

  return (
    <div className='overflow-x-hidden h-full'>
      <div className='hero--section'>
        <Hero 
          illustration={illustration}
        />
        <Shortener 
          bgDesktop={bgDesktop}
          bgMobile={bgMobile}
        />
      </div>
      <Advanced 
        brand={brand}
        records={records}
        customizable={customizable}
      />
      <Boost
        bgDesktop={bgDesktop}
        bgMobile={bgMobile}
      />
      <Footer 
        logo={logo} 
        facebook={facebook}
        twitter={twitter}
        pinterest={pinterest}
        instagram={instagram}
        />
    </div>
  )
}

export default Home