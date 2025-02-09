import React from 'react';

const FAQs = () => {
    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Frequently Asked Questions (FAQs)</h1>

            <section style={sectionStyle}>
                <h2 style={subHeaderStyle}>About ADHENO</h2>
                <div style={faqItemStyle}>
                    <strong>What is ADHENO's mission?</strong>
                    <p>ADHENO is dedicated to promoting sustainable development, environmental conservation, and health initiatives in the community.</p>
                </div>
                <div style={faqItemStyle}>
                    <strong>How can I learn more about ADHENO?</strong>
                    <p>You can visit our <a href="/resources" style={linkStyle}>Resources</a> page for educational materials and reports.</p>
                </div>
            </section>

            <section style={sectionStyle}>
                <h2 style={subHeaderStyle}>Getting Involved</h2>
                <div style={faqItemStyle}>
                    <strong>How can I volunteer with ADHENO?</strong>
                    <p>We welcome volunteers! Please visit our <a href="/get-involved" style={linkStyle}>Get Involved</a> page for more information on available opportunities.</p>
                </div>
                <div style={faqItemStyle}>
                    <strong>What are the ways to support ADHENO?</strong>
                    <p>You can support us through donations, participating in fundraising events, or advocating for our mission. Check our <a href="/donate" style={linkStyle}>Donate</a> page for more details.</p>
                </div>
            </section>

            <section style={sectionStyle}>
                <h2 style={subHeaderStyle}>Donations</h2>
                <div style={faqItemStyle}>
                    <strong>How can I make a donation?</strong>
                    <p>Donations can be made through our <a href="/donate" style={linkStyle}>Donate</a> page, where you can choose your donation type and amount.</p>
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
const containerStyle = {
    padding: '40px',
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 30px rgba(0,0,0,0.15)',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
};

const headerStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '25px',
};

const sectionStyle = {
    marginBottom: '40px',
    borderBottom: '1px solid #dcdcdc',
    paddingBottom: '20px',
};

const subHeaderStyle = {
    color: '#2980b9',
    marginBottom: '15px',
    fontSize: '1.5em',
};

const faqItemStyle = {
    marginBottom: '20px',
};

const linkStyle = {
    color: '#e74c3c',
    textDecoration: 'underline',
};

export default FAQs;