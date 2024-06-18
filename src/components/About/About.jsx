import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './about.css';
import Education from './Education';

export default function About() {

    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end center"]
    })

    const scale = useTransform(scrollYProgress, [0.1, 0.8, 1], [0.5, 1.1, 1])
    const x = useTransform(scrollYProgress, [0.1, 0.25, 0.5, 0.6], ["60%", "55%", "-25%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    return (
        <motion.section
            style={{ opacity }}
            ref={targetRef}
            className='about' id="about">
            <div>
                <h1 className='about-heading'>About</h1>
                <div className='underline'></div>
            </div>

            <div className='about-main'>
                <div>
                    <h4>Experience</h4>
                    <Education className="education" />
                </div>

                <motion.div
                    style={{ x, scale }}
                    className='about-me'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis nostrum voluptatibus? Ea corrupti eum est minus consectetur, nam aliquam. Explicabo harum maiores iste, sint eaque beatae est non in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis nostrum voluptatibus? Ea corrupti eum est minus consectetur, nam aliquam. Explicabo harum maiores iste, sint eaque beatae est non in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis nostrum voluptatibus? Ea corrupti eum est minus consectetur, nam aliquam. Explicabo harum maiores iste, sint eaque beatae est non in<br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis nostrum voluptatibus? Ea corrupti eum est minus consectetur, nam aliquam. Explicabo harum maiores iste, sint eaque beatae est non in.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis nostrum voluptatibus? Ea corrupti eum est minus consectetur, nam aliquam. Explicabo harum maiores iste, sint eaque beatae est non in.
                </motion.div>
            </div>
        </motion.section>
    )
}
