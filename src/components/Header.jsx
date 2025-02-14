import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isDarkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const text = 'Adheno'; // Set the logo text here

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
            if (window.innerWidth >= 1000) {
                setIsMenuOpen(false); // Close menu on resize to larger screens
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const headerStyle = {
        backgroundColor: isDarkMode ? '#1E1E2F' : '#ffffff',
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    };

    const navBarStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const textStyle = {
        fontSize: '24px',
        fontWeight: '500',
        color: 'red',
        fontFamily: '"Pacifico", cursive',
        display: 'inline-block',
        animation: 'rotate 5s infinite linear', // Logo animation remains
    };

    return (
        <header style={headerStyle}>
            <div style={navBarStyle}>
                <div style={textStyle}>{text}</div>

                {/* Mobile Navigation (Displayed when screen width < 1000px) */}
                {isMobile ? (
                    <>
                        <button onClick={toggleMenu} style={{
                            background: 'none',
                            border: 'none',
                            color: '#FFD700',
                            fontSize: '15px',
                            cursor: 'pointer'
                        }}>
                            {isMenuOpen ? '✖' : '☰'}
                        </button>

                        {/* Background Overlay (Only visible when menu is open) */}
                        {isMenuOpen && (
                            <div style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                                zIndex: 998,
                            }} onClick={toggleMenu}></div>
                        )}

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <nav style={{
                                position: 'absolute',
                                top: '50px',
                                left: '10%',
                                width: '80%',
                                backgroundColor: isDarkMode ? '#1E1E2F' : '#ffffff',
                                boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                                borderRadius: '10px',
                                padding: '10px',
                                zIndex: 999,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <ul style={{ listStyleType: 'none', padding: 0, width: '100%', textAlign: 'center' }}>
                                    {['Home', 'About', 'Stories', 'Projects', 'News', 'Contact', 'Donate', 'Get Involved', 'Resources', 'FAQs'].map((item, index) => (
                                        <li key={index} style={{ padding: '10px 0' }}>
                                            <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: isDarkMode ? '#fff' : '#000',
                                                    fontWeight: 600,
                                                    fontSize: '16px'
                                                }}
                                                onClick={toggleMenu} // Close menu on link click
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        )}
                    </>
                ) : (
                    /* Desktop Navigation (Displayed when screen width >= 1000px) */
                    <nav>
                        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
                            {['Home', 'About', 'Stories', 'Projects', 'News', 'Contact', 'Donate', 'Get Involved', 'Resources', 'FAQs'].map((item, index) => (
                                <li key={index} style={{ marginRight: '15px' }}>
                                    <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        style={{
                                            textDecoration: 'none',
                                            color: isDarkMode ? '#fff' : '#000',
                                            fontWeight: 600,
                                            padding: '10px 15px',
                                            display: 'block'
                                        }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                <button onClick={toggleDarkMode} style={{
                    background: 'none',
                    border: 'none',
                    color: '#FFD700',
                    fontSize: '20px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                }}>
                    {isDarkMode ? '🌙' : '☀️'}
                </button>
            </div>

            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

                    @keyframes rotate {
                        from {
                            transform: rotateY(0deg);
                        }
                        to {
                            transform: rotateY(360deg);
                        }
                    }
                `}
            </style>
        </header>
    );
};

export default Header;
