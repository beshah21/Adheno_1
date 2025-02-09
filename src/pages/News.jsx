import React, { useState } from 'react';

const News = () => {
    
    const sampleNews = [
        {
            title: "ADHENO Launches New Water Project",
            date: "January 15, 2025",
            description: "ADHENO has officially launched a new water supply project aimed at providing clean drinking water to over 1,000 households in the North Shewa region. The project will include the installation of boreholes and water purification systems."
        },
        {
            title: "Community Training Program Graduates First Cohort",
            date: "February 1, 2025",
            description: "The first cohort of participants in ADHENO's community training program has graduated successfully. The program provided essential skills in sustainable farming and entrepreneurship, empowering local residents to improve their livelihoods."
        },
        {
            title: "ADHENO Recognized for Environmental Efforts",
            date: "February 20, 2025",
            description: "ADHENO has received an award from the local government for its outstanding contributions to environmental conservation. The organization’s initiatives have significantly improved land management practices in the region."
        },
        {
            title: "Women's Empowerment Initiative Expands",
            date: "March 5, 2025",
            description: "ADHENO's women's empowerment initiative has expanded to include additional training programs and micro-financing opportunities. This expansion aims to support more women in starting their own businesses and achieving financial independence."
        }
    ];

    const [email, setEmail] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmationMessage(`Thank you for signing up with email: ${email}`);
        setEmail('');
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Latest News</h1>
            <p style={paragraphStyle}>Stay updated with the latest news from ADHENO:</p>
            <ul style={listStyle}>
                {sampleNews.map((newsItem, index) => (
                    <ListItem key={index} title={newsItem.title} date={newsItem.date} description={newsItem.description} />
                ))}
            </ul>
            <h2 style={signupHeaderStyle}>Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Sign Up</button>
            </form>
            {confirmationMessage && (
                <p style={confirmationMessageStyle}>{confirmationMessage}</p>
            )}
        </div>
    );
};

// Internal styles
const containerStyle = {
    padding: '30px',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Arial", sans-serif',
};

const headerStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px',
    fontSize: '2.5rem',
};

const paragraphStyle = {
    lineHeight: '1.7',
    color: '#34495e',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1.1rem',
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
};

const listItemStyle = {
    marginBottom: '25px',
    padding: '20px',
    border: '1px solid #ecf0f1',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
};

// Hover style
const hoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
};

const newsTitleStyle = {
    fontSize: '1.6rem',
    color: '#e74c3c',
};

const newsDateStyle = {
    fontSize: '0.9rem',
    color: '#777',
};

const newsDescriptionStyle = {
    lineHeight: '1.6',
    color: '#7f8c8d',
};

// Wrapper component to handle hover state
const ListItem = ({ title, date, description }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <li
            style={{
                ...listItemStyle,
                ...(isHovered ? hoverStyle : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <strong style={newsTitleStyle}>{title}</strong>
            <p style={newsDateStyle}>{date}</p>
            <p style={newsDescriptionStyle}>{description}</p>
        </li>
    );
};

const signupHeaderStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    marginTop: '40px',
    fontSize: '2rem',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
};

const inputStyle = {
    padding: '10px',
    width: '80%',
    maxWidth: '400px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
};

const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
};

const confirmationMessageStyle = {
    textAlign: 'center',
    color: '#2ecc71', // Green color for success
    marginTop: '20px',
    fontSize: '1rem',
};

export default News;