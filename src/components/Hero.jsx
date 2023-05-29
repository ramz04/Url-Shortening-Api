import React from 'react'

function Hero(props) {
  return (
    <div>
        <div className='hero md:mt-8 md:flex md:flex-row-reverse md:items-center'>
            <div className='relative basis-1/2'>
              <img alt='Illustration' className='relative -right-8 md:-right-40' src={props.illustration} loading='lazy' />
            </div>
            <article className='basis-1/2 space-y-4'>
              <h1 className='article--heading md:text-7xl md:text-left'>More than just shorter links</h1>
              <p className='article--paragraph md:text-left md:text-2xl'>Build your brand’s recognition and get detailed insights 
                on how your links are performing.
              </p>
              <div className='flex justify-center md:justify-start mt-5'>
                <button className='sign--up '>Get started</button>
              </div>
            </article>
        </div>
    </div>
  )
}

export default Hero