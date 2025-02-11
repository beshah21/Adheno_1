import React from 'react';

const Resources = ({ isDarkMode }) => {
    return (
        <div style={outerContainerStyle(isDarkMode)}>
            <h1 style={headerStyle(isDarkMode)}>Resources</h1>
            
            <section style={sectionStyle(isDarkMode)}>
                <h2 style={sectionHeaderStyle(isDarkMode)}>Educational Materials</h2>
                <p style={sectionDescriptionStyle(isDarkMode)}>Explore our educational resources to learn more about ADHENO’s areas of focus:</p>
                <ul style={listStyle(isDarkMode)}>
                    <li style={listItemStyle}>
                        <strong>Environmental Conservation:</strong> Discover how we promote sustainable practices and protect natural resources.
                        <a href="/resources/environmental-conservation" style={linkStyle}> Learn more</a>
                    </li>
                    <li style={listItemStyle}>
                        <strong>Health Initiatives:</strong> Read about our health programs aimed at improving community well-being.
                        <a href="/resources/health-initiatives" style={linkStyle}> Learn more</a>
                    </li>
                </ul>
            </section>

            <section style={sectionStyle(isDarkMode)}>
                <h2 style={sectionHeaderStyle(isDarkMode)}>Reports and Research</h2>
                <p style={sectionDescriptionStyle(isDarkMode)}>Access our latest reports, newsletters, and research findings:</p>
                <ul style={listStyle(isDarkMode)}>
                    <li style={listItemStyle}>
                        <a href="/reports/annual-report-2023" style={linkStyle}>Annual Report 2023</a>
                    </li>
                    <li style={listItemStyle}>
                        <a href="/reports/environment-report" style={linkStyle}>Environmental Impact Report</a>
                    </li>
                    <li style={listItemStyle}>
                        <a href="/newsletters/newsletter-feb-2023" style={linkStyle}>February 2023 Newsletter</a>
                    </li>
                    <li style={listItemStyle}>
                        <a href="/research/community-health-study" style={linkStyle}>Community Health Study</a>
                    </li>
                </ul>
            </section>
        </div>
    );
};

// Internal styles
const outerContainerStyle = (isDarkMode) => ({
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: isDarkMode ? '#34495e' : '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Arial', sans-serif",
    color: isDarkMode ? '#ecf0f1' : '#333',
});

const headerStyle = (isDarkMode) => ({
    textAlign: 'center',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    fontSize: '2.5rem',
    marginBottom: '30px',
});

const sectionStyle = (isDarkMode) => ({
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: isDarkMode ? '#2c3e50' : '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});

const sectionHeaderStyle = (isDarkMode) => ({
    fontSize: '1.8rem',
    color: '#2980b9',
    marginBottom: '10px',
});

const sectionDescriptionStyle = (isDarkMode) => ({
    fontSize: '1.1rem',
    color: isDarkMode ? '#ecf0f1' : '#555',
    marginBottom: '15px',
});

const listStyle = (isDarkMode) => ({
    listStyleType: 'disc',
    paddingLeft: '20px',
    fontSize: '1rem',
    color: isDarkMode ? '#ecf0f1' : '#444',
});

const listItemStyle = {
    marginBottom: '10px',
};

const linkStyle = {
    color: '#3498db',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'color 0.3s',
};

export default Resources;