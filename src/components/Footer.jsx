import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ isMobile, isDarkMode }) => {
    return (
        <footer style={footerStyle(isDarkMode)}>
            <div style={footerContentStyle}>
                <div style={footerSectionStyle}>
                    <h2 style={footerTitleStyle(isDarkMode)}>About Us</h2>
                    <p>
                        ADHENO, founded in 1998, is an Ethiopian NGO dedicated to poverty alleviation in Northern Shewa through community-driven development projects. It works closely with local farmers, women, and youth, implementing environmental rehabilitation, education, and training initiatives. With strong local trust, ADHENO ensures sustainable impact by involving the community in project planning and execution.
                    </p>
                </div>
                <div style={footerSectionStyle}>
                    <h2 style={footerTitleStyle(isDarkMode)}>Quick Links</h2>
                    <ul style={isMobile ? mobileNavListStyle : desktopNavListStyle}>
                        {['Home', 'About', 'News', 'Contact', 'Donate'].map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    style={isMobile ? mobileLinkStyle : desktopLinkStyle}
                                    onMouseEnter={(e) => !isMobile && (e.target.style.color = '#FFD700')}
                                    onMouseLeave={(e) => !isMobile && (e.target.style.color = '#fff')}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={footerSectionStyle}>
                    <h2 style={footerTitleStyle(isDarkMode)}>Contact Us</h2>
                    <p>Email: <a href="mailto:adheneo@ethionet.et" style={linkStyle}>adheneo@ethionet.et</a></p>
                    <p>Phone: <a href="tel:0912121314" style={linkStyle}>0912121314</a></p>
                </div>
            </div>
            <div style={footerBottomStyle(isDarkMode)}>
                <p>&copy; 2025 ADHENO. All rights reserved.</p>
            </div>
        </footer>
    );
};

// Internal styles for Footer
const footerStyle = (isDarkMode) => ({
    backgroundColor: isDarkMode ? '#1a1a1a' : '#008080', // Dark mode footer color
    color: '#fff',
    padding: '20px',
    textAlign: 'left',
});

const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

const footerSectionStyle = {
    flex: '1',
    padding: '10px',
};

const footerTitleStyle = (isDarkMode) => ({
    marginBottom: '10px',
    color: isDarkMode ? '#ecf0f1' : '#fff',
});

const mobileNavListStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
};

const desktopNavListStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
};

const mobileLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
};

const desktopLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
};

const footerBottomStyle = (isDarkMode) => ({
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
    color: isDarkMode ? '#ecf0f1' : '#fff',
});

export default Footer;