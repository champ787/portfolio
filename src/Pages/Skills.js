import React, { useEffect } from 'react';  
import { GithubDark, JavaScript, ReactDark, AndroidStudioLight, Bootstrap, CSS, Git, HTML, JavaDark, NodeJSDark } from "@fdorantesm/react-skill-icons";  
import '../Css/Application.css';  
import snow from '../Images/snow.png';  
  
export const Skills = () => {  
    // Function to generate random animation properties  
    const getRandomAnimationProps = () => {  
        const duration = (Math.random() * 1.5 + 0.5).toFixed(2); // Random duration between 0.5s and 2s  
        const degree = Math.random() * 20 - 10; // Random rotation between -10deg and 10deg  
        return { duration, degree };  
    };  
  
    useEffect(() => {  
        document.querySelectorAll('.icons').forEach(icon => {  
            const { duration, degree } = getRandomAnimationProps();  
            icon.style.animationDuration = `${duration}s`;  
            icon.style.setProperty('--teeter-degree', `${degree}deg`);  
        });  
    }, []);  
  
    return (  
        <div className="skills-main">  
            <h1 style={{ fontSize: '30px', textAlign: 'center' }}>Know-how</h1>  
            <div className='skills-inner'>  
                <div className='skill-item'>  
                    <img className='icons' style={{ borderRadius: '10px' }} src={snow} alt="Snow" />  
                    <p>ServiceNow</p>  
                </div>  
                <div className='skill-item'>  
                    <JavaScript className='icons' />  
                    <p>JavaScript</p>  
                </div>  
                <div className='skill-item'>  
                    <JavaDark className='icons' />  
                    <p>Java</p>  
                </div>  
                <div className='skill-item'>  
                    <ReactDark className='icons' />  
                    <p>React Js</p>  
                </div>  
                <div className='skill-item'>  
                    <NodeJSDark className='icons' />  
                    <p>Node Js</p>  
                </div>  
                <div className='skill-item'>  
                    <AndroidStudioLight className='icons' />  
                    <p>Android Studio</p>  
                </div>  
                <div className='skill-item'>  
                    <HTML className='icons' />  
                    <p>HTML</p>  
                </div>  
                <div className='skill-item'>  
                    <CSS className='icons' />  
                    <p>CSS</p>  
                </div>  
                <div className='skill-item'>  
                    <Bootstrap className='icons' />  
                    <p>Bootstrap</p>  
                </div>  
                <div className='skill-item'>  
                    <Git className='icons' />  
                    <p>Git</p>  
                </div>  
                <div className='skill-item'>  
                    <GithubDark className='icons' />  
                    <p>GitHub</p>  
                </div>  
            </div>  
        </div>  
    );  
};  
  
export default Skills;  
