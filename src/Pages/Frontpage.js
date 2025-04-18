import React, { useState, useEffect } from 'react';  
import '../Css/Application.css';  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import { Avatar } from "@material-ui/core";  
import { faInstagram, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';  
import { faEnvelope as faEnvelopeSolid, faDownload } from '@fortawesome/free-solid-svg-icons';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  

export const Frontpage = () => {  
    const [isExiting, setIsExiting] = useState(false);  

    const navigateToHome = () => {
        setIsExiting(true);  
        setTimeout(() => {  
            window.location.href = "#/home";

        }, 1000);  
    };

    useEffect(() => {  
        const handleScroll = () => {  
            if (window.scrollY > 50) {  
                navigateToHome();  
            }  
        };  

        const handleWheel = (e) => {  
            if (e.deltaY > 0) {  
                navigateToHome();  
            }  
        };  

        window.addEventListener('scroll', handleScroll);  
        window.addEventListener('wheel', handleWheel);  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
            window.removeEventListener('wheel', handleWheel);  
        };  
    }, []);  

    return (  
        <div className={`front-main ${isExiting ? 'fly-out' : ''}`}>  
            <div className='front-header'>  
                <div style={{ width: '50%', textAlign: 'center', alignContent: 'center', paddingTop: '80px' }}>  
                    <span style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', marginLeft: '100px' }}>  
                        <h1 style={{ fontSize: '200px' }}>P</h1>  
                        <h1 style={{ marginTop: '30px', fontSize: '80px', display: 'flex', flexDirection: 'row' }}>ranjal</h1>  
                        <h1 style={{ fontSize: '200px', marginLeft: '50px' }}>T</h1>  
                        <h1 style={{ marginTop: '30px', fontSize: '80px', display: 'flex', flexDirection: 'row' }}>iwari</h1>  
                    </span>  
                </div>  
                <div style={{ alignContent: 'end', marginLeft: '350px', fontFamily: 'sans-serif', fontStyle: 'italic', fontSize: '25px', whiteSpace: 'nowrap', fontWeight:'100px', zIndex:'999' }}>  
                 Certified ServiceNow Developer 
                </div>  
            </div>  

            <div className="triangle-button-wrapper">  
                <span style={{ color: 'white', opacity: '0.5' }}>Scroll Down</span>  
                <div className="triangle-button" onClick={navigateToHome}>  
                    <div className="triangle"></div>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default Frontpage;
