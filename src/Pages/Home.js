import React, { useState, useEffect } from 'react';
import '../Css/Application.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelopeSolid, faDownload } from '@fortawesome/free-solid-svg-icons';

import TestimonialCarousel from "./TestimonialCarousel";

export const Home = () => {
const intro = [
  'I am a dedicated software developer with over 1 year of experience at PwC Acceleration Center Bangalore. Specializing in ServiceNow development, I have a strong background in modules like ITSM and GRC, with a successful track record of completing 4+ projects. My expertise includes working on various functionalities such as Portals, Workspaces, Widgets, REST APIs, and ACLs.',
  'Apart from my professional pursuits, I have a passion for staying updated on industry trends and exploring topics like geopolitics. Sci-fi movies captivate my interest, and I have a deep fascination with astronomical science, always eager to delve into this field.',
];

return (
  <div>
    <div className="home-page">
      <div style={{textAlign:'left'}}>
        <h1 className='name-title'>Pranjal Tiwari</h1>
        {/* <h10 className='works-at-title'>Works at PwC AC(Bangalore).INDIA</h10> */}
      </div>

      {/* <div className='icons'>
        <a href="https://www.instagram.com/indian__brain" target="_blank" rel="noopener noreferrer" title='Instagram'>
          <FontAwesomeIcon icon={faInstagram} size="sm" className="icon" style={{ color: '#BFA181' }} />
        </a>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" title='GitHub'>
          <FontAwesomeIcon icon={faGithub} size="sm" className="icon" style={{ color: '#BFA181' }} />
        </a>
        <a href="https://www.linkedin.com/in/pranjal-tiwari332" target="_blank" rel="noopener noreferrer" title='LinkedIn'>
          <FontAwesomeIcon icon={faLinkedin} size="sm" className="icon" style={{ color: '#BFA181' }} />
        </a>
        <a href="mailto:pranjal.tiwari332@gmail.com" title='E-mail'>
          <FontAwesomeIcon icon={faEnvelopeSolid} size="sm" className="icon" style={{ color: '#BFA181' }} />
        </a>
        <a href="https://wa.me/9621792087" target="_blank" rel="noopener noreferrer" title='WhatsApp'>
          <FontAwesomeIcon icon={faWhatsapp} size="sm" className="icon" style={{ color: '#BFA181' }} />
        </a>
        <a href="https://drive.google.com/file/d/1Mcscp2BnXz9I9cUwFs01GCDnq3CUQ_KF/view?usp=drive_link" target="_blank" rel="noopener noreferrer" title='Download Resume'>
          <FontAwesomeIcon icon={faDownload} size="sm" className="icon" style={{ color: '#BFA181' }} />
        </a>
      </div> */}

    </div>

 
  </div>
);
};  
