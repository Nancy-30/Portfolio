import React, { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderImg from '../../assets/images/profile.jpg';
import './banner.css'

export default function Banner() {
    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end center"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200);
    const toRotate = ["Web Developer", "AI/ML Developer", "DevOps"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, isDeleting, loopNum]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(100);  // Faster deletion
        } else {
            setDelta(200);  // Slower typing
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);  // Pause at the end of typing
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);  // Reset for the next word
        }
    };

    return (
        <motion.section
            style={{ opacity }}
            ref={targetRef}
            className='banner' id="home">
            <motion.div style={{ scale, opacity }}>
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={12} md={6} xl={7}>
                            <span className='tagline'>Welcome to my Portfolio</span>
                            <h1>{`Hi I'm Nancy Yadav `}<span className='wrap'>{text}</span></h1>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={HeaderImg} alt='header' />
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </motion.section>
    );
}
