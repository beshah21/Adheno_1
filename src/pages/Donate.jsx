import React, { useState } from 'react';

const Donate = ({ isDarkMode }) => {
    const [donationType, setDonationType] = useState('single');
    const [donationAmount, setDonationAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleTypeChange = (e) => {
        setDonationType(e.target.value);
    };

    const handleAmountChange = (e) => {
        setDonationAmount(e.target.value);
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (paymentMethod === 'creditCard') {
            alert(`Thank you for your ${donationType} donation of $${donationAmount} via Credit Card!`);
        } else {
            alert(`Thank you for your ${donationType} donation of $${donationAmount} via PayPal!`);
        }
    };

    return (
        <div style={outerContainerStyle(isDarkMode)}>
            <div style={containerStyle(isDarkMode)}>
                <h1 style={headerStyle(isDarkMode)}>Make a Donation</h1>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <div style={formGroupStyle}>
                        <label style={labelStyle(isDarkMode)}>Donation Type:</label>
                        <select value={donationType} onChange={handleTypeChange} style={inputStyle(isDarkMode)}>
                            <option value="single">Single Donation</option>
                            <option value="monthly">Monthly Donation</option>
                            <option value="other">Other Options</option>
                        </select>
                    </div>
                    <div style={formGroupStyle}>
                        <label style={labelStyle(isDarkMode)}>Donation Amount:</label>
                        <input
                            type="number"
                            value={donationAmount}
                            onChange={handleAmountChange}
                            style={inputStyle(isDarkMode)}
                            required
                        />
                    </div>

                    {/* Payment Method Selector */}
                    <div style={formGroupStyle}>
                        <label style={labelStyle(isDarkMode)}>Payment Method:</label>
                        <select
                            value={paymentMethod}
                            onChange={handlePaymentMethodChange}
                            style={inputStyle(isDarkMode)}
                        >
                            <option value="creditCard">Credit Card</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>

                    {/* Conditional Rendering for Payment Form */}
                    {paymentMethod === 'creditCard' ? (
                        <div>
                            <div style={formGroupStyle}>
                                <label style={labelStyle(isDarkMode)}>Credit Card Number:</label>
                                <input
                                    type="text"
                                    value={creditCardNumber}
                                    onChange={(e) => setCreditCardNumber(e.target.value)}
                                    style={inputStyle(isDarkMode)}
                                    required
                                />
                            </div>
                            <div style={formGroupStyle}>
                                <label style={labelStyle(isDarkMode)}>Expiration Date:</label>
                                <input
                                    type="text"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    style={inputStyle(isDarkMode)}
                                    required
                                    placeholder="MM/YY"
                                />
                            </div>
                            <div style={formGroupStyle}>
                                <label style={labelStyle(isDarkMode)}>CVV:</label>
                                <input
                                    type="text"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    style={inputStyle(isDarkMode)}
                                    required
                                />
                            </div>
                        </div>
                    ) : (
                        <div style={formGroupStyle}>
                            <label style={labelStyle(isDarkMode)}>PayPal Email:</label>
                            <input
                                type="email"
                                style={inputStyle(isDarkMode)}
                                placeholder="Enter your PayPal email"
                                required
                            />
                        </div>
                    )}

                    <button type="submit" style={buttonStyle(isDarkMode)}>Donate</button>
                </form>

                {/* Impact Statement Section */}
                <div style={impactStatementStyle(isDarkMode)}>
                    <h2 style={infoHeaderStyle(isDarkMode)}>Impact of Your Donation</h2>
                    <p>Your generous contributions help us provide essential services to those in need. 
                       Whether it's funding educational programs, providing resources for the community, 
                       or supporting crucial initiatives, every dollar makes a difference!</p>
                </div>

                {/* Donation Methods */}
                <div style={donationMethodsStyle(isDarkMode)}>
                    <h2 style={infoHeaderStyle(isDarkMode)}>Other Ways to Donate</h2>
                    <p>If you prefer to donate through other means, you can use the following options:</p>
                    <div style={methodStyle}>
                        <h3 style={methodHeaderStyle}>1) Wire Transfer to ADHENO Bank Account (Ethiopia)</h3>
                        <p><strong>ADHENO Integrated Rural Development Association</strong></p>
                        <p>Phone: +251 116 635080</p>
                        <p><strong>Bank:</strong> Commercial Bank of Ethiopia, Meskel Square Branch</p>
                        <p><strong>SWIFT Code:</strong> CBETETAA</p>
                        <p><strong>Account Number:</strong> 0170933512400</p>
                        <p>Please follow up on your wire by contacting ADHENO at <a href="mailto:ADHENO@ethionet.et">ADHENO@ethionet.et</a> or by phone at +251 116 635080. Please include your email and the amount wired so a confirmation can be sent to you once your donation is received.</p>
                    </div>
                    <div style={methodStyle}>
                        <h3 style={methodHeaderStyle}>2) Donate through "Way2Help"</h3>
                        <p><strong>Way2Help Verein zur Unterstützung humanitärer Aufgaben</strong></p>
                        <p>Phone: +43 6642122451</p>
                        <p><strong>Bank:</strong> Steiermärkische Sparkasse</p>
                        <p><strong>SWIFT Code:</strong> STSPAT2GXXX</p>
                        <p><strong>IBAN:</strong> AT44 2081 5000 2873 7534 "Äthiopien"</p>
                        <p>You can visit their website at <a href="http://www.way2help.at" target="_blank" rel="noopener noreferrer">www.way2help.at</a> for more information.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Internal styles (remains unchanged)
const outerContainerStyle = (isDarkMode) => ({
    backgroundColor: isDarkMode ? '#2c3e50' : '#e9eff1', // Softer background
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
});

const containerStyle = (isDarkMode) => ({
    padding: '40px',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: isDarkMode ? '#34495e' : '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
});

const headerStyle = (isDarkMode) => ({
    fontSize: '2rem',
    fontWeight: '600',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    marginBottom: '20px',
});

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
};

const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

const labelStyle = (isDarkMode) => ({
    fontSize: '1rem',
    fontWeight: 'bold',
    color: isDarkMode ? '#ecf0f1' : '#34495e',
    marginBottom: '8px',
});

const inputStyle = (isDarkMode) => ({
    padding: '12px 15px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: `1px solid ${isDarkMode ? '#7f8c8d' : '#ddd'}`,
    width: '100%',
    transition: 'border-color 0.3s ease',
    outline: 'none',
    color: isDarkMode ? '#ecf0f1' : '#34495e',
    backgroundColor: isDarkMode ? '#2c3e50' : '#ffffff',
});

const buttonStyle = (isDarkMode) => ({
    padding: '14px',
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s',
    width: '100%', // Full width for the button
});

const impactStatementStyle = (isDarkMode) => ({
    marginTop: '30px',
    padding: '15px',
    backgroundColor: isDarkMode ? '#2c3e50' : '#ecf0f1',
    borderRadius: '8px',
    color: isDarkMode ? '#ecf0f1' : '#34495e',
});

const infoHeaderStyle = (isDarkMode) => ({
    fontSize: '1.25rem',
    fontWeight: '600',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    marginBottom: '10px',
});

const donationMethodsStyle = (isDarkMode) => ({
    marginTop: '30px',
    padding: '20px',
    backgroundColor: isDarkMode ? '#34495e' : '#f4f6f7',
    borderRadius: '8px',
    color: isDarkMode ? '#ecf0f1' : '#34495e',
});

const methodStyle = {
    marginBottom: '20px',
    textAlign: 'left',
};

const methodHeaderStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#2980b9',
};

export default Donate;
