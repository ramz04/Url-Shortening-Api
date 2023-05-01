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


function Home() {
  return (
    <div className='overflow-x-hidden h-full'>
      <div className='hero--section'>
        <div className='hero'>
            <div className='relative'>
              <img alt='Illustration' className='relative -right-8' src={illustration} loading='lazy' />
            </div>
            <article>
              <h1 className='article--heading'>More than just shorter links</h1>
              <p className='article--paragraph'>Build your brand’s recognition and get detailed insights 
                on how your links are performing.
              </p>
              <div className='flex justify-center mt-5'>
                <button className='sign--up '>Get started</button>
              </div>
            </article>
        </div>
        <div className='shortening--form p-4'>
            <div className='h-[150px] bg-DarkViolet bg-blend-multiply rounded-xl bg-designmobile bg-auto bg-right-top bg-no-repeat flex flex-col
            items-center justify-center px-5 gap-4'>
              <input  type='text'className='py-2 px-2 w-full rounded-lg focus:outline-green-600 border-2 focus:border-green-600' placeholder='Shorten a link here'/>
              <button className='bg-Cyan w-full py-2 rounded-lg text-white font-bold'>Shorten it</button>
            </div>
        </div>
      </div>
      <div className='advanced--stats '>
        <h2 className='stats--header'>Advanced Statistics</h2>
        <p className='stats--text'>
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
        <div className='card pb-20'>
          <div className='line'></div>
          <div className='card--wrapper'>
              <article className='card--items'>
                <img src={brand} alt="Brand" loading='lazy' />
                <h3 className='card--header'>  
                  Brand Recognition
                </h3>
                <p className='card--text'>
                  Boost your brand recognition with each click. Generic links don’t 
                  mean a thing. Branded links help instil confidence in your content.
                </p>
              </article>
              <article className='card--items'>
                <img src={records} alt="Brand" loading='lazy' />
                <h3 className='card--header'>  
                  Detailed Records
                </h3>
                <p className='card--text'>
                Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.
                </p>
              </article>
              <article className='card--items'>
                <img src={customizable} alt="Brand" loading='lazy' />
                <h3 className='card--header'>  
                  Fully Customizable
                </h3>
                <p className='card--text'>
                Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement.
                </p>
              </article>
            </div>
        </div>
        <div>

        </div>
      </div>
      <div className='boosts'>
      <section className="boost relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>

        <div className="flex items-center justify-center flex-col boost-inner">
          <h2 className="mb-5 text-3xl md:text-4xl text-white font-bold text-center">
            Boost your links today
          </h2>
          <button className="btn-cta rounded-full">Get Started</button>
        </div>
      </section>
      </div>
      <div className='footer'>
      <footer className="bg-slate-900 py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3 lg:grid-cols-5">
          <article>
            <img src={logo} alt="" />
          </article>

          <article>
            <h3 className="text-white text-lg footer--article font-bold tracking-wide">
              Features
            </h3>
            <ul className='footer--list'>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Analytics
                </button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg footer--article font-bold tracking-wide">
              Resources
            </h3>
            <ul className='footer--list'>
              <li>
                <button className="text-slate-200 text-sm mt-1">Blog</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Developers
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Support</button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg footer--article font-bold tracking-wide">
              Company
            </h3>
            <ul className='footer--list'>
              <li>
                <button className="text-slate-200 text-sm mt-1">About</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Our Team
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Careers</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Contact</button>
              </li>
            </ul>
          </article>

          <article>
            <ul className="flex items-center">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li className="ml-4">
                <img src={twitter} alt="" />
              </li>
              <li className="mx-5">
                <img src={pinterest} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default Home