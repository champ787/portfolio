import React from 'react';    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { faPhone } from '@fortawesome/free-solid-svg-icons';    
import '../Css/Application.css';    
    
export const ContactMe = () => {    
    return (    
        <div style={{ height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>  
            <div    
                className='contact-main'    
                style={{    
                    display: 'flex',    
                    justifyContent: 'center',    
                    alignItems: 'center',    
                    fontSize: '24px',    
                    textAlign: 'center',    
                    marginBottom: '20px', // Adds space between the two sections  
                }}    
            >    
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />    
                Contact me @ +91-9621792087  
            </div>    
            <div  
                className='thank-you'  
                style={{  
                    fontSize: '24px',  
                    textAlign: 'center',  
                }}  
            >  
               -: Thank You :- 
            </div>  
        </div>  
    );    
};    
    
export default ContactMe;  
