import React from 'react';

const Resources = () => {
    return (
        <div style={outerContainerStyle}><br></br><br></br><br></br><br></br>
            <h1 style={headerStyle}>Resources</h1>
            
            <section style={sectionStyle}>
                <h2 style={sectionHeaderStyle}>Educational Materials</h2>
                <p style={sectionDescriptionStyle}>Explore our educational resources to learn more about ADHENO’s areas of focus:</p>
                <ul style={listStyle}>
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

            <section style={sectionStyle}>
                <h2 style={sectionHeaderStyle}>Reports and Research</h2>
                <p style={sectionDescriptionStyle}>Access our latest reports, newsletters, and research findings:</p>
                <ul style={listStyle}>
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
const outerContainerStyle = {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Arial', sans-serif",
    color: '#333',
};

const headerStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    fontSize: '2.5rem',
    marginBottom: '30px',
};

const sectionStyle = {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const sectionHeaderStyle = {
    fontSize: '1.8rem',
    color: '#2980b9',
    marginBottom: '10px',
};

const sectionDescriptionStyle = {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '15px',
};

const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    fontSize: '1rem',
    color: '#444',
};

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