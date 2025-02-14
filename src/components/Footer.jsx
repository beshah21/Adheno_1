import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ isMobile, isDarkMode }) => {
    return (
        <>
            <div style={mainContentStyle}>
                {/* Main Content Goes Here */}
            </div>
            <footer style={footerStyle(isDarkMode)}>
                <div style={footerContentStyle}>
                    <div style={footerSectionStyle}>
                        <span style={footerTitleStyle(isDarkMode)}>About</span>
                        <span style={footerTextStyle}>ADHENO, founded in 1998, is an Ethiopian NGO.</span>
                    </div>
                    <div style={footerSectionStyle}>
                        <span style={footerTitleStyle(isDarkMode)}>Links</span>
                        <span style={linksTextStyle}>
                            {['Home', 'About', 'News', 'Contact', 'Donate'].map((item, index) => (
                                <Link
                                    key={index}
                                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    style={linkStyle}
                                >
                                    {item}{index < 4 ? ' | ' : ''}
                                </Link>
                            ))}
                        </span>
                    </div>
                    <div style={footerSectionStyle}>
                        <span style={footerTextStyle}>
                            Email: <a href="mailto:adheneo@ethionet.et" style={linkStyle}>adheneo@ethionet.et</a>
                            &nbsp; | &nbsp; © 2025 ADHENO.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

// Internal styles for Footer
const mainContentStyle = {
    paddingBottom: '60px', // Space for the footer
};

const footerStyle = (isDarkMode) => ({
    backgroundColor: isDarkMode ? '#1a1a1a' : '#008080',
    color: '#fff',
    padding: '5px', // Compact padding
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
});

const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center', // Center items vertically
};

const footerSectionStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
};

const footerTitleStyle = (isDarkMode) => ({
    marginBottom: '0', // Remove margin for compactness
    color: isDarkMode ? '#ecf0f1' : '#fff',
    fontSize: '12px', // Keep original font size
});

const footerTextStyle = {
    fontSize: '12px', // Keep original font size
};

const linksTextStyle = {
    fontSize: '12px', // Keep original font size
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '12px', // Keep original font size
};

export default Footer;