import React from 'react'
import PropTypes from 'prop-types';

function Footer(props) {
  return (
    <div>
        <div className='footer'>
      <footer className="bg-slate-900 py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3 lg:grid-cols-5">
          <article>
            <img src={props.logo} alt="" className="footer--img" />
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
                <img src={props.facebook} alt="" />
              </li>
              <li className="ml-4">
                <img src={props.twitter} alt="" />
              </li>
              <li className="mx-5">
                <img src={props.pinterest} alt="" />
              </li>
              <li>
                <img src={props.instagram} alt="" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default Footer