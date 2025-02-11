import React from 'react';

const FAQs = ({ isDarkMode }) => {
    return (
        <div style={containerStyle(isDarkMode)}>
            <h1 style={headerStyle(isDarkMode)}>Frequently Asked Questions (FAQs)</h1>

            <section style={sectionStyle(isDarkMode)}>
                <h2 style={subHeaderStyle(isDarkMode)}>About ADHENO</h2>
                <div style={faqItemStyle}>
                    <strong>What is ADHENO's mission?</strong>
                    <p>ADHENO is dedicated to promoting sustainable development, environmental conservation, and health initiatives in the community.</p>
                </div>
                <div style={faqItemStyle}>
                    <strong>How can I learn more about ADHENO?</strong>
                    <p>You can visit our <a href="/resources" style={linkStyle(isDarkMode)}>Resources</a> page for educational materials and reports.</p>
                </div>
            </section>

            <section style={sectionStyle(isDarkMode)}>
                <h2 style={subHeaderStyle(isDarkMode)}>Getting Involved</h2>
                <div style={faqItemStyle}>
                    <strong>How can I volunteer with ADHENO?</strong>
                    <p>We welcome volunteers! Please visit our <a href="/get-involved" style={linkStyle(isDarkMode)}>Get Involved</a> page for more information on available opportunities.</p>
                </div>
                <div style={faqItemStyle}>
                    <strong>What are the ways to support ADHENO?</strong>
                    <p>You can support us through donations, participating in fundraising events, or advocating for our mission. Check our <a href="/donate" style={linkStyle(isDarkMode)}>Donate</a> page for more details.</p>
                </div>
            </section>

            <section style={sectionStyle(isDarkMode)}>
                <h2 style={subHeaderStyle(isDarkMode)}>Donations</h2>
                <div style={faqItemStyle}>
                    <strong>How can I make a donation?</strong>
                    <p>Donations can be made through our <a href="/donate" style={linkStyle(isDarkMode)}>Donate</a> page, where you can choose your donation type and amount.</p>
                </div>
                <div style={faqItemStyle}>
                    <strong>Is my donation tax-deductible?</strong>
                    <p>Yes, all donations to ADHENO are tax-deductible to the extent allowed by law. Please consult your tax advisor for details.</p>
                </div>
            </section>
        </div>
    );
};

// Updated styles with a standard color palette
const containerStyle = (isDarkMode) => ({
    padding: '40px',
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: isDarkMode ? '#34495e' : '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 30px rgba(0,0,0,0.15)',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    color: isDarkMode ? '#ecf0f1' : '#333',
});

const headerStyle = (isDarkMode) => ({
    textAlign: 'center',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    marginBottom: '25px',
});

const sectionStyle = (isDarkMode) => ({
    marginBottom: '40px',
    borderBottom: `1px solid ${isDarkMode ? '#7f8c8d' : '#dcdcdc'}`,
    paddingBottom: '20px',
});

const subHeaderStyle = (isDarkMode) => ({
    color: '#2980b9',
    marginBottom: '15px',
    fontSize: '1.5em',
});

const faqItemStyle = {
    marginBottom: '20px',
};

const linkStyle = (isDarkMode) => ({
    color: isDarkMode ? '#e74c3c' : '#3498db',
    textDecoration: 'underline',
});

export default FAQs;