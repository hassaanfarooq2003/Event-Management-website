import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image1 from '../temp/bd.jpeg'
import Image2 from '../temp/book.jpg'
import Image3 from '../temp/wed.jpeg'
import './slideshow.css'
const Slideshow = () => {
  return (
    <div className='carousel-t'>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={Image1}
            alt='First slide'
          />
          <Carousel.Caption className='carousel-caption'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={Image2}
            alt='Second slide'
          />
          <Carousel.Caption className='carousel-caption'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={Image3}
            alt='third slide'
          />
          <Carousel.Caption className='carousel-caption'>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slideshow
