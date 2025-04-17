import React, { useState } from 'react';
import '../Css/Application.css';

const projectDetails = [
  {
    title: "ServiceNow GRC-IRM Implementation for PwC Client (2024 - Current)",
    details: [
      "Highlighted **ServiceNow** instance upgrade, customizations, and testing on **GRC-IRM** module for PwC client.",
      "Majorly worked on customizing out-of-the-box functionalities: **custom tables**, **ACLs**, **business rules**, **client scripts**, **script includes**, **declarative actions**, **transform maps**, **data sources**, etc.",
      "Implemented **weekly digests** with minimal **event-triggered notifications** having **dynamic recipients** and body.",
      "Created test cases for **Automated Testing Framework (ATF)** for testing instance customizations.",
      "Successfully managed **backups** during instance **upgrades** in **ServiceNow**."
    ]
  },
  {
    title: "ServiceNow ITSM & Portal Customization for PwC Healthcare Client (2023 - 2024)",
    details: [
      "**ServiceNow** instance upgrade and **portal customization** in **ITSM**.",
      "Created **tables/fields**, **system properties**, **UI policies**, **business rules**, **script includes**, **client scripts**, **scheduled jobs**, and **email notifications**.",
      "Developed **portal pages** and **custom widgets** based on the client’s wireframe.",
      "Implemented **fix scripts** and **transform maps** for rectifying and uploading records.",
      "Actively engaged with offshore team in **UAT testing**, **scrum meetings**, **sprint planning**, and **retrospective meetings**."
    ]
  },
  {
    title: "ServiceNow ITSM Implementation for PwC Healthcare Client",
    details: [
      "Supported **IT Service Management** development, **UAT Testing**, and **deployment** on production.",
      "Extensively worked on **Employee Center** portal and **Core UI modification** requirements.",
      "Collaborated with offshore team for **data correction**, **data import**, and moving across various **instances**."
    ]
  }
];

export const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const renderDetail = (detail) => {
    const parts = detail.split(/\*\*(.*?)\*\*/g); // Split by **text**
    return parts.map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };

  return (
    <div style={{ 
      display: 'flex', 
      width: '80%', 
      margin: '0 auto', 
      padding: '20px', 
      textAlign: 'left', 
      fontFamily: 'Arial, Helvetica, sans-serif' 
    }}>
      <div style={{ flex: 2, paddingRight: '20px' }}>
        <h1 style={{ fontSize: '30px' }}>Projects Experience @ PwC</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {projectDetails.map((project, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              <button
                onClick={() => setSelectedProjectIndex(index)}
                style={{
                  backgroundColor: selectedProjectIndex === index ? '#d3d3d3' : 'transparent',
                  border: 'none',
                  color: '#007bff',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontSize: '16px',
                  padding: '10px',
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 3, padding: '20px', borderLeft: '1px solid #ccc' }}>
        {selectedProjectIndex !== null ? (
          <div>
            <ul style={{ textAlign: 'left' }}>
              {projectDetails[selectedProjectIndex].details.map((detail, index) => (
                <li key={index}>{renderDetail(detail)}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div style={{ color: '#777' }}>Select a project to see the details.</div>
        )}
      </div>
    </div>
  );
};

export default Projects;
