import React from 'react'
import './aboutus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Aboutus = () => {
  return (
    <div className="about-work">
      <div className="content">
        <h1>About Work</h1>
        <p>Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing.</p>
        <p>He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.</p>
      </div>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
    </div>
  )
}

export default Aboutus