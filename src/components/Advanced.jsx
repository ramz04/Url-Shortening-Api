import React from 'react'

function Advanced(props) {
  return (
    <div>
      <div className='advanced--stats md:pb-24'>
        <h2 className='stats--header'>Advanced Statistics</h2>
        <p className='stats--text'>
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
        <div className='card pb-20'>
          <div className='line'></div>
          <div className='card--wrapper  md:grid md:grid-cols-3 md:gap-x-24'>
              <article className='card--items'>
                <img src={props.brand} alt="Brand" loading='lazy' />
                <h3 className='card--header'>  
                  Brand Recognition
                </h3>
                <p className='card--text'>
                  Boost your brand recognition with each click. Generic links don’t 
                  mean a thing. Branded links help instil confidence in your content.
                </p>
              </article>
              <article className='card--items '>
                <img src={props.records} alt="Brand" loading='lazy' />
                <h3 className='card--header'>  
                  Detailed Records
                </h3>
                <p className='card--text '>
                Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.
                </p>
              </article>
              <article className='card--items md:mt-6'>
                <img src={props.customizable} alt="Brand" loading='lazy' />
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
      </div>
    </div>
  )
}

export default Advanced