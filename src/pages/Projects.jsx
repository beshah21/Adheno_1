import React from 'react';

const Projects = () => {
    const sampleProjects = [
        {
            title: "Community Water Supply Project",
            description: "This project aimed to provide clean drinking water to the villages in the North Shewa region. By drilling boreholes and installing water pumps, we ensured that local communities have access to safe and reliable water sources."
        },
        {
            title: "School Building Initiative",
            description: "ADHENO facilitated the construction of a new primary school in Workegur, providing children with a safe and conducive learning environment. The school is equipped with modern facilities and trained teachers to enhance educational outcomes."
        },
        {
            title: "Sustainable Agriculture Training",
            description: "This project focused on educating local farmers about sustainable farming practices. Workshops and hands-on training were provided to improve crop yields and promote environmental conservation."
        },
        {
            title: "Women Empowerment Program",
            description: "Through this initiative, ADHENO offered skills training and micro-financing options to women in the community. This program has helped many women start their own businesses and gain financial independence."
        }
    ];

    return (
        <div style={containerStyle}><br></br><br></br><br></br><br></br>
            <h1 style={headerStyle}>Our Projects</h1>
            <p style={paragraphStyle}>Here are some of the projects we've undertaken:</p>
            <ul style={listStyle}>
                {sampleProjects.map((project, index) => (
                    <ListItem key={index} title={project.title} description={project.description} />
                ))}
            </ul>
        </div>
    );
};

// Internal styles
const containerStyle = {
    padding: '30px',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Arial", sans-serif',
};

const headerStyle = {
    textAlign: 'center',
    color: '#2c3e50', // A dark navy color
    marginBottom: '20px',
    fontSize: '2.5rem',
};

const paragraphStyle = {
    lineHeight: '1.7',
    color: '#34495e', // A softer dark color
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1.1rem',
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
};

const listItemStyle = {
    marginBottom: '25px',
    padding: '20px',
    border: '1px solid #ecf0f1',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
};

// Hover style
const hoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
};

const projectTitleStyle = {
    fontSize: '1.6rem',
    color: '#e74c3c', // A vibrant red for emphasis
};

const projectDescriptionStyle = {
    lineHeight: '1.6',
    color: '#7f8c8d', // A muted gray for the paragraph text
};

// Wrapper component to handle hover state
const ListItem = ({ title, description }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <li
            style={{
                ...listItemStyle,
                ...(isHovered ? hoverStyle : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <strong style={projectTitleStyle}>{title}</strong>
            <p style={projectDescriptionStyle}>{description}</p>
        </li>
    );
};

export default Projects;