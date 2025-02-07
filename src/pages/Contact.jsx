import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmationMessage(`Message sent from ${formData.name}`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div style={containerStyle}><br></br><br></br><br></br><br></br>
            <h1 style={headerStyle}>Contact Us</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, height: '120px' }}
                        required
                    />
                </div>
                <button type="submit" style={buttonStyle}>Send Message</button>
            </form>
            {confirmationMessage && (
                <p style={confirmationMessageStyle}>{confirmationMessage}</p>
            )}
            <div style={contactInfoStyle}>
                <h2 style={infoHeaderStyle}>Contact Information</h2>
                <p>Email: <a href="mailto:adheneo@ethionet.et">adheneo@ethionet.et</a></p>
                <p>Phone: <a href="tel:+251912121313">+251912121313</a></p>
                <p>Address: 22, Addis Ababa, Ethiopia</p>
            </div>
            <div style={mapContainerStyle}>
                <h2 style={infoHeaderStyle}>Our Location</h2>
                <iframe
                    title="Map showing the location of the organization"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509896!2d144.95373531531635!3d-37.81627997975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f2c69%3A0x5045675218ceed2!2s22%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1612115204196!5m2!1sen!2set"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

// Internal styles
const containerStyle = {
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Arial', sans-serif",
};

const headerStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '2.5rem',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const formGroupStyle = {
    marginBottom: '20px',
};

const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
};

const inputStyle = {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    '&:hover': {
        borderColor: '#007bff',
        boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
    },
};

const buttonStyle = {
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s',
    '&:hover': {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)',
    },
};

const confirmationMessageStyle = {
    textAlign: 'center',
    color: '#28a745', // Green color for success
    marginTop: '20px',
    fontSize: '1rem',
};

const contactInfoStyle = {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const infoHeaderStyle = {
    marginTop: '20px',
    color: '#333',
};

const mapContainerStyle = {
    marginTop: '30px',
};

export default Contact;