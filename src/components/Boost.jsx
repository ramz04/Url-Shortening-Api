import React from 'react'

function Boost(props) {
  return (
    <div>
      <div className='boosts'>
        <section className="boost relative">
            <picture>
            <source media="(min-width: 768px)" srcSet={props.bgDesktop} />
            <img src={props.bgMobile} alt="" />
            </picture>

            <div className="flex items-center justify-center flex-col boost-inner">
            <h2 className="mb-5 text-3xl md:text-4xl text-white font-bold text-center">
                Boost your links today
            </h2>
            <button className="btn-cta rounded-full">Get Started</button>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Boost