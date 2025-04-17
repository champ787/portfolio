import React, { useState } from 'react';
import '../Css/Application.css';
import Carousel from 'react-bootstrap/Carousel';
import CSA from '../Images/csa.jpg';
import ITSM from '../Images/itsm.jpg';
import CSM from '../Images/csm.jpg';

export const Certifications = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
      
        <div className='certification-main'>

            <div className='certification-left'>
                <Carousel interval={2000} activeIndex={activeIndex} onSelect={handleSelect} >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CSA}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ITSM}
                            alt="Second slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CSM}
                            alt="Third slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="certification-right">
                <h1 style={{ fontSize: '60px', transform: 'rotate(90deg)', transformOrigin: 'center bottom', marginLeft: '140%', color: '#283940' }}>Certifications</h1>
                <ol style={{ listStyleType: 'upper-roman', width: '100%', fontFamily:'Arial, Helvetica, sans-serif'}}>
                    <li className={activeIndex === 0 ? 'highlight' : ''}>ServiceNow - Certified System Administrator</li>
                    <li className={activeIndex === 1 ? 'highlight' : ''}>ServiceNow - CIS- IT Service Management</li>
                    <li className={activeIndex === 2 ? 'highlight' : ''}>ServiceNow - CIS- Customer Service Management</li>
                    
                </ol>
            </div>


        </div>

    );
};

export default Certifications;  
