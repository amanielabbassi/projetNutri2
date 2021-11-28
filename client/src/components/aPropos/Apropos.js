import React from 'react'
import Navigation from '../navigaton/Navigation'
import { Carousel } from 'react-bootstrap'
import './Aprops.css'
const Apropos = () => {
    return (
        <div>
            <Navigation/>
            <div className="header">
            <p>Welcome !
Discover Nutrika… the remote nutrition specialist.
Our expertise and our seriousness will allow you to find the support you need.
Approved, recognized and specialized practitioners
An ethical, results-oriented approach and motivating feedback
Affordable rates for every need and 24/7 availability
A simplified reservation process and secure online payment</p>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://nutrika.fr/wp-content/uploads/2016/01/shutterstock_106914410-300x233.jpg" 
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://nutrika.fr/wp-content/uploads/2012/07/maxresdefault-3-e1462484917167-300x226.jpg"
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://nutrika.fr/wp-content/uploads/2016/03/Nutrika-offre-famille-e1462431135608-300x265.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://nutrika.fr/wp-content/uploads/2012/07/A-propos-slider2-1-300x233.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://nutrika.fr/wp-content/uploads/2012/07/A-propos-slider5-300x221.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            </div>
        
        <div>
            <h1>What can we do for you?</h1>
        </div>
        </div>
    )
}

export default Apropos
