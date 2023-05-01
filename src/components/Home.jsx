import React from 'react'
import illustration from '../assets/images/illustration-working.svg'

function Home() {
  return (
    <div className='overflow-x-hidden'>
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
      <div className='advanced--stats'>

      </div>
      <div className='boosts'>

      </div>
      <div className='footer'>

      </div>
    </div>
  )
}

export default Home