import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logoStyle = {
        fontSize: '24px',
        color: 'white',
        fontWeight: 'bold',
    };

    return (
        <header style={headerStyle}>
            <div style={navBarStyle}>
                <div style={logoStyle}>
                    <h1>ADHENO</h1>
                </div>
                
                <button onClick={toggleMenu} style={toggleButtonStyle}>
                    {isMenuOpen ? '✖' : '☰'}
                </button>

                <nav style={navListStyle(isMenuOpen)}>
                    <ul style={navListStyle(isMenuOpen)}>
                        <li><Link to="/" style={linkStyle}>Home</Link></li>
                        <li><Link to="/about" style={linkStyle}>About</Link></li>
                        <li><Link to="/stories" style={linkStyle}>Stories</Link></li>
                        <li><Link to="/projects" style={linkStyle}>Projects</Link></li>
                        <li><Link to="/news" style={linkStyle}>News</Link></li>
                        <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
                        <li><Link to="/donate" style={linkStyle}>Donate</Link></li>
                        <li><Link to="/get-involved" style={linkStyle}>Get Involved</Link></li>
                        <li><Link to="/resources" style={linkStyle}>Resources</Link></li>
                        <li><Link to="/faqs" style={linkStyle}>FAQs</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

// Internal styles for Header
const headerStyle = {
    position: 'fixed',  // Changed from absolute to fixed
    zIndex: 1000,
    left: 0,
    top: 0,
    width: '100vw',
    backdropFilter: 'blur(10px)',
};

const navBarStyle = {
    minHeight: '8vh',
    backgroundColor: 'rgba(31, 30, 30, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
};

const navListStyle = (isMenuOpen) => ({
    listStyleType: 'none',
    display: isMenuOpen ? 'block' : 'flex',
    margin: 0,
    padding: isMenuOpen ? '10px 0' : 0,
    backgroundColor: isMenuOpen ? 'rgba(31, 30, 30, 0.9)' : 'transparent',
    position: isMenuOpen ? 'absolute' : 'static',
    top: '8vh',
    right: 0,
    width: '100%',
    transition: 'all 0.3s ease',
});

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 600,
    padding: '20px',
    transition: 'color 0.3s ease',
};

const toggleButtonStyle = {
    display: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
};

// Media query for responsive button
const mediaQuery = window.matchMedia('(max-width: 1000px)');

if (mediaQuery.matches) {
    toggleButtonStyle.display = 'block'; // Show toggle button on mobile
}

export default Header;