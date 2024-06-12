import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import WebD from '../skillsCarousel/WebD';
import DSA from '../skillsCarousel/DSA';
import OtherTools from '../skillsCarousel/OtherTools';
import './skill.css';

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
