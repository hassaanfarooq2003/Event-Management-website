// Homepage.jsx
import React from 'react'
import './Homepage.css'
import { Image } from 'react-bootstrap'
import Pic1 from '../Images/event-homepage.svg'
import Slideshow from '../Back-end/ImageCarousel/Slideshow'
import Aboutus from './Aboutus'

const Homepage = () => {
  return (
    <>
      <main>
        <section>
          <div className='hero-section'>
            <div className='hero-content'>
              <h1>Host, Connect, Celebrate: Your Events, Our Platform!</h1>
              <p>
                Book and learn helpful tips from 3,168+ mentors in world-class
                companies with our global community.
              </p>
              <button className='explore-btn'>Explore Now</button>
            </div>
            <div className='hero-images'>
              <Image src={Pic1} alt='pic1' width={500} height={500} />
            </div>
          </div>
        </section>
        <section>
          <Slideshow/>
        </section>
        <section>
          <Aboutus/>
        </section>
      </main>
    </>
  )
}

export default Homepage
