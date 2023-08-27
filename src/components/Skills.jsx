import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import WebD from './skillsCarousel/WebD';
import DSA from './skillsCarousel/DSA';
import OtherTools from './skillsCarousel/OtherTools';


export default function Skills() {

  const [activeSection, setActiveSection] = useState('Web d');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  }
  return (
    <section className='skill' id="skills">
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>I have a strong command of frontend languages such as HTML, Tailwind CSS, JavaScript, and React. In addition to my frontend development skills, I am also practicing data structures and algorithms using the C++ language. Furthermore, I am proficient in coding with Python and Java.</p>

              <div className='skill-tabs'>
                <h5 className='skills-btn' onClick={() => handleSectionClick('Web d')}>Web D</h5>

                <h5 className='skills-btn' onClick={() => handleSectionClick('DSA')}>Languages</h5>

                <h5 className='skills-btn' onClick={() => handleSectionClick('other')}>Other Tools</h5>

              </div>

              {activeSection === 'Web d' && <WebD />}
              {activeSection === 'DSA' && <DSA />}
              {activeSection === 'other' && <OtherTools />}

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
