import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isDarkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

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

    const mobileHeaderStyle = {
        backgroundColor: isDarkMode ? '#1E1E2F' : '#ffffff',
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    };

    const mobileNavBarStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const mobileNavListStyle = {
        listStyleType: 'none',
        margin: 0,
        padding: '10px 0',
        backgroundColor: isDarkMode ? 'rgba(31, 30, 30, 0.9)' : '#ffffff',
        display: isMenuOpen ? 'flex' : 'none',
        flexWrap: 'wrap',
        transition: 'all 0.3s ease',
    };

    const mobileLinkStyle = {
        display: 'block',
        padding: '12px 20px',
        color: isDarkMode ? '#FFFFFF' : '#000000',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
        flex: '1 0 30%',
        textAlign: 'center',
    };

    const desktopHeaderStyle = {
        position: 'sticky',
        zIndex: 1000,
        left: 0,
        top: 0,
        width: '100%',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    };

    const desktopNavBarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: isDarkMode ? 'rgba(31, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    };

    const desktopNavListStyle = {
        listStyleType: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    };

    const desktopLinkStyle = {
        textDecoration: 'none',
        color: isDarkMode ? '#fff' : '#000',
        fontWeight: 600,
        padding: '15px 20px',
        transition: 'background-color 0.3s ease',
        display: 'block',
    };

    return (
        <header style={isMobile ? mobileHeaderStyle : desktopHeaderStyle}>
            <div style={isMobile ? mobileNavBarStyle : desktopNavBarStyle}>
                <img 
                    src="https://inceptum.s3.us-east-1.amazonaws.com/zEXOIjzwPltT/logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3HNMG24SATQ2TORO%2F20250211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250211T132255Z&X-Amz-Expires=345600&X-Amz-Signature=edf8aa71ff091c92cac4c85117cb93130bf2bf1fd2ce542de9795620ecf11f1d&X-Amz-SignedHeaders=host&x-id=GetObject"
                    alt="ADHENO Logo"
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }} 
                />

                {isMobile && (
                    <button onClick={toggleMenu} style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: '#FFD700', 
                        fontSize: '30px', 
                        cursor: 'pointer' 
                    }}>
                        {isMenuOpen ? '✖' : '☰'}
                    </button>
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

                <nav style={isMobile ? { display: 'block' } : { display: 'flex' }}>
                    <ul style={isMobile ? mobileNavListStyle : desktopNavListStyle}>
                        {['Home', 'About', 'Stories', 'Projects', 'News', 'Contact', 'Donate', 'Get Involved', 'Resources', 'FAQs'].map((item, index) => (
                            <li key={index}>
                                <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                                    style={isMobile ? mobileLinkStyle : desktopLinkStyle}
                                    onMouseEnter={(e) => !isMobile && (e.target.style.color = '#FFD700')}
                                    onMouseLeave={(e) => !isMobile && (e.target.style.color = isDarkMode ? '#FFFFFF' : '#000000')}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;