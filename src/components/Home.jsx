import React, {useState, useEffect} from 'react'
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
import shortenMobile from "../assets/images/bg-shorten-mobile.svg"
import shortenDesktop from "../assets/images/bg-shorten-desktop.svg"


const getLocalStorage = () => {
  let links = localStorage.getItem("links")

  if (links) {
    return JSON.parse(localStorage.getItem("links"))
  } else {
    return []
  }
}

function Home() {

  const [text, setText] = useState("")
  const [links, setLinks] = useState(getLocalStorage())
  const [buttonText, setButtonText] = useState("Copy")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Input is empty")
    } else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const data = await res.json()
        console.log(data.result)
        setLinks(data.result)
        setText("")
      }

      shortenLink()
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link)
    setButtonText("Copied!")
  }

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links))
  }, [links])

  return (
    <div className='overflow-x-hidden h-full'>
      <div className='hero--section'>
        <div className='hero md:mt-8 md:flex md:flex-row-reverse md:items-center'>
            <div className='relative basis-1/2'>
              <img alt='Illustration' className='relative -right-8 md:-right-40' src={illustration} loading='lazy' />
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
        <section className="max-width shortener relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>

        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <input
              type="url"
              placeholder="Shorten a link here"
              className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-[2rem] rounded-lg shadow">
          <article>
            <h6 className="mb-3 md:mb-0">{links.original_link}</h6>
          </article>

          <article>
            <ul className="md:flex md:items-center">
              <li className="md:mr-5">
                <button className="text-cyan-500">
                  {links.full_short_link}
                </button>
              </li>
              <li>
                <button
                  onClick={handleCopy}
                  className="btn-cta rounded-lg text-sm focus:bg-slate-800"
                >
                  {buttonText}
                </button>
              </li>
            </ul>
          </article>
        </div>
        </section>
      </div>
      <div className='advanced--stats md:pb-24'>
        <h2 className='stats--header'>Advanced Statistics</h2>
        <p className='stats--text'>
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
        <div className='card pb-20'>
          <div className='line'></div>
          <div className='card--wrapper  md:grid md:grid-cols-3 md:gap-24'>
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
              <article className='card--items md:mt-6'>
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
            <img src={logo} alt="" className="footer--img" />
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