import React from 'react';

const Glossary = ({ isDarkMode }) => {
    return (
        <div style={containerStyle(isDarkMode)}>
            <div style={contentStyle(isDarkMode)}>
                <h2 style={headerStyle(isDarkMode)}>Glossary of Terms</h2>
                <br />
                <p><strong>Gudifecha:</strong> Adoption of a tree</p>
                <p><strong>Woreda:</strong> Social unit of a specific area</p>
                <p><strong>Kebele:</strong> A group of villages</p>
                <p><strong>Afforestation:</strong> The process of planting trees in barren land.</p>
                <p><strong>Reforestation:</strong> The process of replanting trees in a deforested area.</p>
                <p><strong>Birr:</strong> The name of Ethiopian legal currency. Current exchange rate is ~$1.00 US = 28 Birr</p>
            </div>
        </div>
    );
};

// Styles
const containerStyle = (isDarkMode) => ({
    backgroundColor: isDarkMode ? '#34495e' : '#FFFFFF',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const contentStyle = (isDarkMode) => ({
    backgroundColor: isDarkMode ? '#2c3e50' : '#FFFFFF',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    color: isDarkMode ? '#ecf0f1' : '#333',
    fontFamily: "'Arial', sans-serif",
});

const headerStyle = (isDarkMode) => ({
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    marginBottom: '20px',
});

export default Glossary;