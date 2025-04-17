import React, { useState, useEffect } from 'react';
import '../Css/Application.css';

export const Timeline = () => {
    return (

        <div className="timeline-main">
            <div style={{ width: '20%' }}>
                <h1 style={{ fontSize: '70px', transform: 'rotate(270deg)', transformOrigin: 'center bottom', marginLeft: '-20%', marginTop: '40%', color: '#283940' }}>Timeline</h1>
            </div>


            <div style={{ paddingLeft: '0%',  }}>
                <ul class="events" >
                    <li>
                        <time datetime="17/08/2023" >17/08/2023</time>
                        <span><strong>ServiceNow Developer- Associate2</strong> PricewaterhouseCoopers AC, Bangalore</span></li>

                    <li>
                        <time datetime="16/03/2023">16/03/2023</time>
                        <span><strong>Cyber Security &amp; Risk Regulatory- Intern</strong> PricewaterhouseCoopers AC, Bangalore</span></li>
                    <hr style={{ color: 'red' }}></hr>
                    <li>
                        <time datetime="31/05/2023">31/05/2023</time>
                        <span><strong>Master of Technology- Information Technology</strong> Indian Institute of Information Technology, Gwalior</span></li>

                    <li>
                        <time datetime="01/09/2021">01/09/2021</time>
                        <span><strong>Bachelor of Technology- Computer Science & Engineering</strong> Institute of Engineering &amp; Technology, Bundelkhand University, Jhansi</span></li>
                    <hr style={{ color: 'red' }}></hr>
                    <li>
                        <time datetime="30/05/2016">30/05/2016</time>
                        <span><strong>Higher Secondary Education- PCM</strong> Central Board of Secondary Education</span></li>

                    <li>
                        <time datetime="21/04/2014">21/04/2014</time>
                        <span><strong>Secondary Education</strong> Central Board of Secondary Education</span></li>
                    <li>
                        <time datetime="08/08/1998">08/08/1998</time>
                        <span><strong>Born</strong> Jhansi</span></li>
                </ul>
            </div>
        </div>
    );
};
export default Timeline;
