import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import JavaLogo from '../../assets/images/java-icon.svg'
import CppLogo from '../../assets/images/Cpp-logo.svg'
import CLogo from '../../assets/images/C-logo.svg'
import PythonLogo from '../../assets/images/Python-logo.svg'

export default function DSA() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
                <img src={CppLogo} alt="img" />
                <h5>C++</h5>
            </div>

            <div className='item'>
                <img src={CLogo} alt="img" />
                <h5>C language</h5>
            </div>

            <div className='item'>
                <img src={JavaLogo} alt="img" />
                <h5>Java</h5>
            </div>

            <div className='item'>
                <img src={PythonLogo} alt="img" />
                <h5>Python</h5>
            </div>
        </Carousel>
    )
}
