import React, { useState, useEffect } from 'react';  
import { useNavigate } from 'react-router-dom';  
import '../Css/Application.css';  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import { Avatar } from "@material-ui/core";  
import { faInstagram, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';  
import { faEnvelope as faEnvelopeSolid, faDownload } from '@fortawesome/free-solid-svg-icons';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
  
// const MobileWarning = () => {  
//     return (  
//         <div className="mobile-warning">  
//             <p>This website does not support mobile or tablet view due to security concerns. Please open it on a laptop or desktop.</p>  
//             <p>सुरक्षा चिंताओं के कारण यह वेबसाइट मोबाइल या टैबलेट व्यू का समर्थन नहीं करती है। कृपया इसे लैपटॉप या डेस्कटॉप पर खोलें।</p>
//         </div>  
//     );  
// };  
  
export const Frontpage = () => {  
    const navigate = useNavigate();  
    const [isExiting, setIsExiting] = useState(false);  
    // const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);  
  
    // useEffect(() => {  
    //     const checkMobileOrTablet = () => {  
    //         setIsMobileOrTablet(window.innerWidth <= 1024); // Adjust the threshold as needed  
    //     };  
  
    //     checkMobileOrTablet();  
    //     window.addEventListener('resize', checkMobileOrTablet);  
  
    //     return () => {  
    //         window.removeEventListener('resize', checkMobileOrTablet);  
    //     };  
    // }, []);  
  
    const handleClick = () => {  
        setIsExiting(true);  
        setTimeout(() => {  
            navigate('/home');  
        }, 1000); // Match this duration with the fly-in animation of HomeLanding      
    };  
  
    const handleScroll = () => {  
        if (window.scrollY > 50) { // You can adjust this threshold as needed  
            setIsExiting(true);  
            setTimeout(() => {  
                navigate('/home');  
            }, 1000);  
        }  
    };  
  
    const handleWheel = (e) => {  
        if (e.deltaY > 0) { // Scrolling down  
            setIsExiting(true);  
            setTimeout(() => {  
                navigate('/home');  
            }, 1000);  
        }  
    };  
  
    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  
        window.addEventListener('wheel', handleWheel);  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
            window.removeEventListener('wheel', handleWheel);  
        };  
    }, []);  
  
    // if (isMobileOrTablet) {  
    //     return <MobileWarning />;  
    // }  
  
    return (  
        <div className={`front-main ${isExiting ? 'fly-out' : ''}`}>  
            <div className='front-header'>  
                <div style={{ width: '50%', textAlign: 'center', alignContent: 'center', paddingTop: '80px', textAlign: 'center' }}>  
                    <span style={{ fontWeight: 'bold', display: 'block', fontSize: '80px', display: 'flex', flexDirection: 'row', marginLeft: '100px' }}>  
                        <h1 style={{ fontWeight: 'bold', fontSize: '200px' }}>P</h1>  
                        <h1 style={{ fontWeight: 'bold', display: 'block', marginTop: '30px', fontSize: '80px', display: 'flex', flexDirection: 'row' }}>ranjal</h1>  
                        <h1 style={{ fontWeight: 'bold', fontSize: '200px', marginLeft: '50px' }}>T</h1>  
                        <h1 style={{ fontWeight: 'bold', display: 'block', marginTop: '30px', fontSize: '80px', display: 'flex', flexDirection: 'row' }}>iwari</h1>  
                    </span>  
                </div>  
                <div style={{ alignContent: 'end', marginLeft: '500px', fontFamily: 'sans-serif', fontStyle: 'italic', fontSize: '25px', whiteSpace: 'nowrap' }}>  
                    -: दुर्लभं हि सदा सुखं // :-  
                </div>  
            </div>  
  
            <div className="triangle-button-wrapper">  
                <span style={{ color: 'white', opacity: '0.5' }}>Scroll Down</span>  
                <div className="triangle-button" onClick={handleClick}>  
                    <div className="triangle"></div>  
                </div>  
            </div>  
        </div>  
    );  
};  
  
export default Frontpage;  
