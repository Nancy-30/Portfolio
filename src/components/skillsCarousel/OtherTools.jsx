import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import VSCodeLogo from '../../assets/images/postgresql-icon.svg'
import GithubLogo from '../../assets/images/Github-logo.svg'
import FigmaLogo from '../../assets/images/figma-logo.svg'
import MySqlLogo from '../../assets/images/mysql-logo.svg'


export default function OtherTools() {

    const responsive = {
        superLargeDesktop: {
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
                <img src={GithubLogo} alt="img" />
                <h5>Github</h5>
            </div>

            <div className='item'>
                <img src={FigmaLogo} alt="img" />
                <h5>Figma</h5>
            </div>

            <div className='item'>
                <img src={MySqlLogo} alt="img" />
                <h5>MySQL</h5>
            </div>

            <div className='item'>
                <img src={VSCodeLogo} alt="img" />
                <h5>PostgreSQL</h5>
            </div>
        </Carousel>
    )
}
