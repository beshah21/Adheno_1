import React from 'react';
// import './css/screen.css'; // Include your CSS file if needed

const Glossary = () => {
    return (
        <div className="container" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="content" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <h2>Glossary of Terms</h2>
                <br />
                <p><strong>Gudifecha:</strong> Adoption of a tree</p>
                <p><strong>Woreda:</strong> Social unit of a specific area</p>
                <p><strong>Kebele:</strong> A group of villages</p>
                <p><strong>Afforestation:</strong> The process of planting trees in a barren land.</p>
                <p><strong>Reforestation:</strong> The process of replanting trees in a deforested area.</p>
                <p><strong>Birr:</strong> The name of Ethiopian legal currency. Current exchange rate is ~$1.00 US = 28 Birr</p>
            </div>
        </div>
    );
};

export default Glossary;