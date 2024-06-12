import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HTMLLogo from '../../assets/images/HTML-logo.svg'
import ReactIconLogo from '../../assets/images/React-icon.svg'
import TailwindLogo from '../../assets/images/Tailwind-logo.svg'
import JavascriptLogo from '../../assets/images/javaScript-logo.svg'
import MongoDB from "../../assets/images/mongodb.svg"
import Nodejs from "../../assets/images/nodejs.svg"
import Framer from "../../assets/images/framer-motion.svg"
export default function WebD() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
      <div className='item'>
        <img src={HTMLLogo} alt="img" />
        <h5>HTML</h5>
      </div>

      <div className='item'>
        <img src={TailwindLogo} alt="img" />
        <h5>TailwindCSS</h5>
      </div>

      <div className='item'>
        <img src={JavascriptLogo} alt="img" />
        <h5>Javascript</h5>
      </div>

      <div className='item'>
        <img src={ReactIconLogo} alt="img" />
        <h5>React JS</h5>
      </div>

      <div className='item'>
        <img src={Nodejs} alt="img" />
        <h5>Node JS</h5>
      </div>

      <div className='item'>
        <img src={MongoDB} alt="img" />
        <h5>MongoDB</h5>
      </div>

      <div className='item'>
        <img src={Framer} alt="img" />
        <h5>Framer Motion</h5>
      </div>
    </Carousel>
  )
}
