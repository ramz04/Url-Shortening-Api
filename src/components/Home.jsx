import React from 'react'
import illustration from '../assets/images/illustration-working.svg'
import brand from '../assets/images/icon-brand-recognition.svg'
import records from '../assets/images/icon-detailed-records.svg'
import customizable from '../assets/images/icon-fully-customizable.svg'
import bgMobile from "../assets/images/bg-boost-mobile.svg"
import bgDesktop from "../assets/images/bg-boost-desktop.svg"


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

      </div>
    </div>
  )
}

export default Home