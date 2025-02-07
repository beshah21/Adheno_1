const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <h2 style={footerTitleStyle}>ADHENO - Integrated Rural Development Association</h2>
                <div style={linksContainerStyle}>
                    <a 
                        href="https://twitter.com/AdhenoO" 
                        style={socialItemStyle} 
                        onMouseEnter={handleHover} 
                        onMouseLeave={handleLeave}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=000000" 
                            alt="Twitter" 
                            style={iconStyle} 
                        />
                    </a>
                    <a 
                        href="https://www.youtube.com/channel/UCSoSJtTyc4NwiQhChlQHHGw/featured" 
                        style={socialItemStyle} 
                        onMouseEnter={handleHover} 
                        onMouseLeave={handleLeave}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" 
                            alt="YouTube" 
                            style={iconStyle} 
                        />
                    </a>
                    <a 
                        href="https://t.me/adheno22" 
                        style={socialItemStyle} 
                        onMouseEnter={handleHover} 
                        onMouseLeave={handleLeave}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="https://img.icons8.com/?size=100&id=k4jADXhS5U1t&format=png&color=000000" 
                            alt="Telegram" 
                            style={iconStyle} 
                        />
                    </a>
                    <a 
                        href="mailto:adheno@ethionet.et" 
                        style={socialItemStyle} 
                        onMouseEnter={handleHover} 
                        onMouseLeave={handleLeave}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="https://img.icons8.com/?size=100&id=LPcVDft9Isqt&format=png&color=000000" 
                            alt="Email" 
                            style={iconStyle} 
                        />
                    </a>
                </div>
                <p style={footerTextStyle}>© 2025 adheno. All rights reserved.</p>
            </div>
        </footer>
    );
};

// Internal styles for Footer
const footerStyle = {
    backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
    padding: '50px 20px',
    color: 'white',
};

const footerContentStyle = {
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const footerTitleStyle = {
    fontSize: '2rem',
    fontWeight: 600,
    margin: '10px 0',
};

const linksContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '10px',
};

const socialItemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    width: '50px',
    margin: '0 10px',
    transition: 'transform 0.3s ease',
};

const iconStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
};

// Hover effect handlers
const handleHover = (event) => {
    event.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
};

const handleLeave = (event) => {
    event.currentTarget.style.transform = 'scale(1)'; // Scale back on leave
};

const footerTextStyle = {
    fontSize: '1.3rem',
    textAlign: 'center',
    marginTop: '10px',
};

export default Footer;