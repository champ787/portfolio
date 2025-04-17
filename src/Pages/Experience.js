import React from 'react';

export const Experience = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '20px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            backgroundColor: '#ffffff'
        }}>

            {/* Left Section (for future use if needed) */}
           

            {/* Right Section */}
            <div style={{ flex: 2, position: 'relative' }}>
            

                <div style={{ paddingLeft: '60px' }}>
                    {/* Company Header */}
                    <h2 style={{ marginTop: '60px', color: '#1c3d57' }}>PricewaterhouseCoopers (PwC)</h2>

                    {/* Associate 2 Role */}
                    <div style={{
                        marginBottom: '30px',
                        padding: '20px',
                        backgroundColor: '#f5f9fa',
                        borderRadius: '10px',
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#1c3d57' }}>
                            ServiceNow Developer - Associate 2
                            <span style={{ fontSize: '0.9em', color: '#666', marginLeft: '10px' }}>| August 2023 – Current</span>
                        </h3>
                        <p style={{ margin: '0 0 10px 0' }}><strong>Location:</strong> Bangalore, Karnataka</p>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li><strong>Role:</strong> ServiceNow Developer specializing in <span style={{ color: '#0c5b8f', fontWeight: '600' }}>GRC-IRM</span> and <span style={{ color: '#0c5b8f', fontWeight: '600' }}>ITSM</span> modules.</li>
                            <li>Built <span style={{ color: '#0c5b8f', fontWeight: '600' }}>Custom UI</span>, <span style={{ color: '#0c5b8f', fontWeight: '600' }}>UI Components</span>, <span style={{ color: '#0c5b8f', fontWeight: '600' }}>Portal</span>, and developed <span style={{ color: '#0c5b8f', fontWeight: '600' }}>ATF test cases</span>.</li>
                            <li>Hands-on with <span style={{ color: '#0c5b8f', fontWeight: '600' }}>Business Rules</span>, <span style={{ color: '#0c5b8f', fontWeight: '600' }}>Client Scripts</span>, <span style={{ color: '#0c5b8f', fontWeight: '600' }}>Email Notifications</span>, <span style={{ color: '#0c5b8f', fontWeight: '600' }}>Scheduled Jobs</span>, <span style={{ color: '#0c5b8f', fontWeight: '600' }}>Script Includes</span>, <span style={{ color: '#0c5b8f', fontWeight: '600' }}>ACLs</span>, <span style={{ color: '#0c5b8f', fontWeight: '600' }}>Custom Tables</span>, <span style={{ color: '#0c5b8f', fontWeight: '600' }}>UI Actions</span>, and <span style={{ color: '#0c5b8f', fontWeight: '600' }}>UI Policies</span>.</li>
                            <li>Worked on <span style={{ color: '#0c5b8f', fontWeight: '600' }}>deployment</span> and <span style={{ color: '#0c5b8f', fontWeight: '600' }}>migrations</span> across ServiceNow instances.</li>
                        </ul>
                    </div>

                    {/* Intern Role */}
                    <div style={{
                        marginBottom: '30px',
                        padding: '20px',
                        backgroundColor: '#f5f9fa',
                        borderRadius: '10px',
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#1c3d57' }}>
                            ServiceNow Developer - Intern
                            <span style={{ fontSize: '0.9em', color: '#666', marginLeft: '10px' }}>| March 2023 – August 2023</span>
                        </h3>
                        <p style={{ margin: '0 0 10px 0' }}><strong>Location:</strong> Bangalore, Karnataka</p>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li>Focused on <span style={{ color: '#0c5b8f', fontWeight: '600' }}>ITSM module</span> for <span style={{ color: '#0c5b8f', fontWeight: '600' }}>UI customization</span>, enhancements, and defect resolution.</li>
                            <li>Took ownership of <span style={{ color: '#0c5b8f', fontWeight: '600' }}>Employee Center Portal</span> development and customization.</li>
                            <li>Worked closely with team and clients for <span style={{ color: '#0c5b8f', fontWeight: '600' }}>requirement gathering</span> and tailored ServiceNow solutions.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            <h1 style={{ fontSize: '60px', transform: 'rotate(90deg)', transformOrigin: 'center bottom', marginLeft: '60%', color: '#283940', fontFamily:'Times New Roman' }}>Experience</h1>
            </div>
        </div>
    );
};

export default Experience;
