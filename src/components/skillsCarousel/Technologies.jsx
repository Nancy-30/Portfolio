import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import RAG from "../../assets/images/rag.jpg";
import Langchain from "../../assets/images/langchain.png";
import Maven from "../../assets/images/maven.svg";
import Docker from "../../assets/images/docker.svg"
import Flask from "../../assets/images/flask.svg";
import Jenkins from "../../assets/images/jenkins.svg";

export default function Technologies() {
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
                <img src={RAG} alt="img" />
                <h5>RAG</h5>
            </div>

            <div className='item'>
                <img src={Langchain} alt="img" />
                <h5>Langchain</h5>
            </div>

            <div className='item'>
                <img src={Docker} alt="img" />
                <h5>Docker</h5>
            </div>

            <div className='item'>
                <img src={Maven} alt="img" />
                <h5>Maven</h5>
            </div>

            <div className='item'>
                <img src={Flask} alt="img" />
                <h5>Flask</h5>
            </div>

            <div className='item'>
                <img src={Jenkins} alt="img" />
                <h5>Jenkins</h5>
            </div>
            
        </Carousel>
    )
}
