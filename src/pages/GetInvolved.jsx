import React from 'react';

const GetInvolved = ({ isDarkMode }) => {
    return (
        <div style={containerStyle(isDarkMode)}>
            <h1 style={headerStyle(isDarkMode)}>Get Involved</h1>
            
            <section style={sectionStyle(isDarkMode)}>
                <h2 style={subHeaderStyle(isDarkMode)}>Volunteer Opportunities</h2>
                <p style={textStyle(isDarkMode)}>Join our team of dedicated volunteers and make a difference in the community! We offer various opportunities that fit your skills and interests:</p>

                <ul style={listStyle(isDarkMode)}>
                    <li>Event Coordination</li>
                    <li>Community Outreach</li>
                    <li>Fundraising Campaigns</li>
                    <li>Administrative Support</li>
                </ul>
                <p style={textStyle(isDarkMode)}>If you're interested in volunteering, please <a href="mailto:adheno@ethionet.et" style={linkStyle}>contact us</a> for more information on how to get started!</p>
            </section>

            <section style={sectionStyle(isDarkMode)}>
                <h2 style={subHeaderStyle(isDarkMode)}>Support ADHENO</h2>
                <p style={textStyle(isDarkMode)}>There are many ways you can support ADHENO and help us achieve our mission:</p>
                <ul style={listStyle(isDarkMode)}>
                    <li><strong>Fundraising Events:</strong> Participate in or organize fundraising events to help raise awareness and funds for our programs.</li>
                    <li><strong>Advocacy:</strong> Help us advocate for important issues in our community by sharing our mission on social media and engaging with your network.</li>
                    <li><strong>In-Kind Donations:</strong> Contribute goods or services that can help our organization and the community we serve.</li>
                </ul>
                <p style={textStyle(isDarkMode)}>For more information on how to support us, please <a href="mailto:adheno@ethionet.et" style={linkStyle}>get in touch</a>.</p>
            </section>
        </div>
    );
};

// Internal styles
const containerStyle = (isDarkMode) => ({
    padding: '40px',
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: isDarkMode ? '#34495e' : '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Arial', sans-serif",
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    lineHeight: '1.6',
});

const headerStyle = (isDarkMode) => ({
    textAlign: 'center',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '30px',
});

const sectionStyle = (isDarkMode) => ({
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: isDarkMode ? '#2c3e50' : '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
});

const subHeaderStyle = (isDarkMode) => ({
    fontSize: '1.75rem',
    color: '#2980b9',
    marginBottom: '15px',
    fontWeight: '600',
});

const textStyle = (isDarkMode) => ({
    fontSize: '1.1rem',
    color: isDarkMode ? '#ecf0f1' : '#34495e',
    marginBottom: '15px',
});

const listStyle = (isDarkMode) => ({
    listStyleType: 'disc',
    paddingLeft: '25px',
    fontSize: '1.1rem',
    color: isDarkMode ? '#ecf0f1' : '#34495e',
});

const linkStyle = {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: '600',
};

export default GetInvolved;