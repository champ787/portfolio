import React, { useEffect, useState } from 'react';
import '../Css/Application.css';
import { faInstagram, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelopeSolid, faDownload } from '@fortawesome/free-solid-svg-icons';
import background from '../Images/background.jpg';
import TestimonialCarousel from "./TestimonialCarousel";
import Timeline from "./Timeline";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Certifications from './Certifications';
import Research from './Research';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import { FaWeight } from 'react-icons/fa';
import Experience from './Experience';

export const HomeLanding = () => {
    const intro = [
        'Apart from my professional pursuits, I have a passion for staying updated on industry trends and exploring topics like geopolitics. Sci-fi movies captivate my interest, and I have a deep fascination with astronomical science, always eager to delve into this field.',
    ];

    const [isEntering, setIsEntering] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsEntering(false);
        }, 1000); // Match this duration with the fly-out animation of Frontpage  
    }, []);

    return (
        <div className={`main ${isEntering ? 'fly-in' : ''}`}>
            <div className='header'>
                <div style={{ width: '50%' }}> <span style={{ fontWeight: 'bold', paddingLeft: '2%' }}>Pranjal Tiwari</span>
                    <span style={{ fontSize: '12px', paddingTop: '2%', fontWeight: 'bold' }}>( Certified ServiceNow Developer |</span>
                    <span style={{ fontSize: '12px', paddingTop: '2%', fontWeight: 'bold' }}> Research Enthusiast )</span>

                </div>

                <div className="icon">
                    <a href="https://www.instagram.com/indian__brain" target="_blank" rel="noopener noreferrer" title='Instagram' style={{ color: 'black' }} className='social-icons'>
                        <FontAwesomeIcon icon={faInstagram} size="sm" />
                    </a>
                    <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" title='GitHub' style={{ paddingLeft: '15px', color: 'black' }} className='social-icons'>
                        <FontAwesomeIcon icon={faGithub} size="sm" />
                    </a>
                    <a href="https://www.linkedin.com/in/pranjal-tiwari332" target="_blank" rel="noopener noreferrer" title='LinkedIn' style={{ paddingLeft: '15px', color: 'black' }} className='social-icons'>
                        <FontAwesomeIcon icon={faLinkedin} size="sm" />
                    </a>
                    <a href="mailto:pranjal.tiwari332@gmail.com" title='E-mail' style={{ paddingLeft: '15px', color: 'black' }} className='social-icons'>
                        <FontAwesomeIcon icon={faEnvelopeSolid} size="sm" />
                    </a>
                    <a href="https://wa.me/9621792087" target="_blank" rel="noopener noreferrer" title='WhatsApp' style={{ paddingLeft: '15px', color: 'black' }} className='social-icons'>
                        <FontAwesomeIcon icon={faWhatsapp} size="sm" />
                    </a>
                    <a href="https://drive.google.com/file/d/1Mcscp2BnXz9I9cUwFs01GCDnq3CUQ_KF/view?usp=drive_link" target="_blank" rel="noopener noreferrer" title='Download Resume' style={{ paddingLeft: '15px', color: 'black' }} className='social-icons'>
                        <FontAwesomeIcon icon={faDownload} size="sm" />
                    </a>
                </div>
            </div>
            <div className='body-part'>
                <p className='bio'>
                <h1 style={{ fontSize: '30px' }}></h1>
  <span className="first-letter">I</span>am an experienced ServiceNow Developer with over 2 years of experience, skilled in 
  <strong> custom applications</strong>, <strong>scripting</strong>, <strong>Core UI Development</strong>, 
  <strong> Portal Development</strong>, and <strong>platform customization</strong>. Possesses effective 
  <strong> client interaction</strong> abilities, comfortable with <strong>gathering requirements</strong>, and committed to 
  delivering timely solutions.
</p>

                {intro.map((paragraph, index) => (
                    <p className='bio' key={index}>{paragraph}</p>
                ))}
                <hr></hr>
                <Experience></Experience>
                <hr></hr>
              
                <Projects></Projects>
                <hr></hr>
                <Timeline></Timeline>
                <hr></hr>
                <Skills></Skills>
                <hr></hr>
                <Certifications></Certifications>
                <hr></hr>
                <Research></Research>
                <hr></hr>

                {/* <TestimonialCarousel></TestimonialCarousel>  */}
                <ContactMe></ContactMe>
                {/* <div style={{ textAlign: 'center', marginTop: '15%' }}><a style={{ textDecoration: 'none' }} href='/r&d'>Click Here to visit my Research Work</a></div>  
                <div></div>   */}
                {/* <hr style={{marginTop:'30px'}}></hr> */}


            </div>
            {/* <div className='body-part2'>  
                
            </div>  */}
        </div>
    );
};

export default HomeLanding;

