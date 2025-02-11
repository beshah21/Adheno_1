import React from 'react';

const Projects = ({ isDarkMode }) => {
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
        <div style={containerStyle(isDarkMode)}>
            <h1 style={headerStyle(isDarkMode)}>Our Projects</h1>
            <p style={paragraphStyle(isDarkMode)}>Here are some of the projects we've undertaken:</p>
            <ul style={listStyle}>
                {sampleProjects.map((project, index) => (
                    <ListItem key={index} title={project.title} description={project.description} isDarkMode={isDarkMode} />
                ))}
            </ul>
        </div>
    );
};

// Internal styles
const containerStyle = (isDarkMode) => ({
    padding: '30px',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: isDarkMode ? '#34495e' : '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Arial", sans-serif',
});

const headerStyle = (isDarkMode) => ({
    textAlign: 'center',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    marginBottom: '20px',
    fontSize: '2.5rem',
});

const paragraphStyle = (isDarkMode) => ({
    lineHeight: '1.7',
    color: isDarkMode ? '#ecf0f1' : '#34495e',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1.1rem',
});

const listStyle = {
    listStyleType: 'none',
    padding: 0,
};

const listItemStyle = (isDarkMode) => ({
    marginBottom: '25px',
    padding: '20px',
    border: `1px solid ${isDarkMode ? '#7f8c8d' : '#ecf0f1'}`,
    borderRadius: '8px',
    backgroundColor: isDarkMode ? '#2c3e50' : '#f8f9fa',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
});

// Hover style
const hoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
};

const projectTitleStyle = {
    fontSize: '1.6rem',
    color: '#e74c3c',
};

const projectDescriptionStyle = (isDarkMode) => ({
    lineHeight: '1.6',
    color: isDarkMode ? '#ecf0f1' : '#7f8c8d',
});

// Wrapper component to handle hover state
const ListItem = ({ title, description, isDarkMode }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <li
            style={{
                ...listItemStyle(isDarkMode),
                ...(isHovered ? hoverStyle : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <strong style={projectTitleStyle}>{title}</strong>
            <p style={projectDescriptionStyle(isDarkMode)}>{description}</p>
        </li>
    );
};

export default Projects;