import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Content Writing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Up to 4 blog posts every month.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Well Researched Articles.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>800+ words per post.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Primary and secondary keywords</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SEO Optimization​</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Post directly to your WordPress blog (Optional)​</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Social Media Management</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Identify target customers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Research competition</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Define marketing goals</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build a social media marketing calendar</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Content Creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Posting Schedule</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Monthly Performance Reports</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fully Responsive Web Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SEO and Mobile Friendly Structure.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Plugins/Extensions Installation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Contact Form, Google Analytics & Map, Blog Integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Best User Experience and CTA's.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media & Live Chat Integration.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services