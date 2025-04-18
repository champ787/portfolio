import React, { useEffect, useState } from 'react';
import '../Css/Application.css';
import { faInstagram, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelopeSolid, faDownload } from '@fortawesome/free-solid-svg-icons';
import snow from '../Images/snow.png';
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
import { useNavigate } from 'react-router-dom';
export const HomeLanding = () => {
    const navigate = useNavigate();
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
            </div>
            <div className="floating-ribbon-menu">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/pranjal-tiwari332" target="_blank" rel="noopener noreferrer" style={{ color: 'White', marginLeft: '40px' }} className='social-icons'>
                            <a>LinkedIn</a>
                            <FontAwesomeIcon icon={faLinkedin} size="xl" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:pranjal.tiwari332@gmail.com" style={{ color: 'White', marginLeft: '40px' }} className='social-icons'>
                            <a>Mail</a>
                            <FontAwesomeIcon icon={faEnvelopeSolid} size="xl" />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/9621792087" target="_blank" rel="noopener noreferrer" style={{ color: 'White', marginLeft: '40px' }} className='social-icons'>
                            <a>WhatsApp</a>
                            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1Mcscp2BnXz9I9cUwFs01GCDnq3CUQ_KF/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: 'White', marginLeft: '40px' }} className='social-icons'>
                            <a>Resume</a>
                            <FontAwesomeIcon icon={faDownload} size="xl" />
                        </a>
                    </li>

                    {/* <li>
                        <a href="https://www.instagram.com/indian__brain" target="_blank" rel="noopener noreferrer" style={{ color: 'White', marginLeft: '40px' }} className='social-icons'>
                            <a>Instagram</a>
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                        </a>
                    </li> */}
                    <li>
                        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" style={{ color: 'White', marginLeft: '40px' }} className='social-icons'>
                            <a>GitHub</a>
                            <FontAwesomeIcon icon={faGithub} size="xl" />
                        </a>
                    </li>
                    <li onClick={() => navigate('/integrations')}>
                        <a
                          
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white', marginLeft: '0px', alignItems: 'center' }}
                            className='social-icons'
                        >
                            <span style={{ marginRight: '10px' }}>Integrations</span>
                            <img
                                src={snow}
                                alt="snow icon"
                                style={{ height: '30px', borderRadius: '30px', marginLeft: '10px' }}
                            />
                        </a>
                    </li>


                </ul>
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

