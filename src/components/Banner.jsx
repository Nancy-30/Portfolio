import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeaderImg from '../assets/images/headerIcon.svg'
import { useState, useEffect } from 'react'


export default function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(500);
    const toRotate = ["web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) }
    }, [text , isDeleting, loopNum, delta])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (!isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='banner' id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Nancy Yadav `}<span className='wrap'>{text}</span></h1>

                        <p>I am a third year computer science student at the Indian Institute of Information Technology (IIIT) Dharwad, India.I am confident that my combination of technical skills and positive attitude will make me a valuable asset to any organization.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt='header' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
