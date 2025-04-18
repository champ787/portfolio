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
      
      </div>

    </div>

 
  </div>
);
};  
