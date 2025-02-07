import React from 'react';

const Home = () => {
    return (
        <div className="home-container" style={containerStyle}><br></br><br></br><br></br>
            <h1 style={headerStyle}>Welcome to ADHENO Integrated Rural Development Association</h1>
            <p style={paragraphStyle}>
                ADHENO Integrated Rural Development Association is an Ethiopian non-profit, non-governmental organization based in Addis Ababa, Ethiopia. It was established in 2003 by concerned citizens and registered with the Ethiopian Ministry of Justice for the purpose of contributing toward the alleviation of extreme poverty in North Shoa, one of the poorest regions of the country. Its specific objectives include:
            </p>
            
            <ul style={listStyle}>
                <li style={listItemStyle}>
                    <strong style={strongStyle}>Environmental Rehabilitation:</strong>
                    <p style={paragraphStyle}>
                        Recovering the productive potential of the natural environment through afforestation and conservation of natural resources (soil, water, and flora). This will help rehabilitate the degraded land and restore its productive capacity, thus improving the crop yield which, in turn, will mitigate the endemic poverty in the area.
                    </p>
                </li>
                
                <li style={listItemStyle}>
                    <strong style={strongStyle}>Basic Education:</strong>
                    <p style={paragraphStyle}>
                        Development of the human productive capacity through improved access to basic education and skills development.
                    </p>
                </li>
                
                <li style={listItemStyle}>
                    <strong style={strongStyle}>Entrepreneurship and Economic Empowerment:</strong>
                    <p style={paragraphStyle}>
                        Providing training and capital to help women and youth start small local businesses to generate revenue, and develop a way out of poverty and dependency.
                    </p>
                </li>
                
                <li style={listItemStyle}>
                    <strong style={strongStyle}>Health and Nutrition:</strong>
                    <p style={paragraphStyle}>
                        Providing access to basic healthcare and improved nutrition (especially for children).
                    </p>
                </li>
            </ul>

            <div style={textContainerStyle}>
                <p style={paragraphStyle}>
                    Gudifetcha of Trees or Tree Gudifecha is a strategy devised by ADHENO to improve survival of planted trees. It is based on an Ethiopian tradition (known as Gudifecha) for adopting children. Gudifetcha of Trees is an award-winning concept developed by the ADHENO Executive Director, Dr. Fisseha Haile Meskal, to encourage environmentalism among farmers by developing in them a sense of caring and nurturing for trees, much as they would have for children. The project idea won a World Bank prize in 2003 for innovation and best practices and won grants from the Embassy of Ireland and Christian Relief and Development Association (CRDA). It has been successfully implemented in the North Shewa region of Ethiopia.
                </p>
            </div>

            <div style={textContainerStyle}>
                <p style={paragraphStyle}>
                    The project has forged close partnerships with the community in melding indigenous local traditional approaches to resource management with modern concepts of conservation and sound agro-economic principles. In addition, the project builds on over a thousand years of local Christian tradition of reverence for trees around churches through focused efforts aimed at resuscitating native species in specially designated area enclosures around churches.
                </p>
                <p style={paragraphStyle}>
                    Given the alarming rate of deforestation and desertification in Ethiopia, and the associated falling of agricultural yields, Gudifetcha of Trees is especially critical in ensuring that the land recovers some of its productivity.
                </p>
            </div>
        </div>
    );
};

// Internal styles
const containerStyle = {
    padding: '2em',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#e0f7fa', // Light blue background
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    paddingTop: '10vh', // Added top padding to account for the fixed header
};

const headerStyle = {
    textAlign: 'center',
    color: '#00796b', // Darker blue for contrast
};

const paragraphStyle = {
    lineHeight: '1.6',
    color: '#555',
    fontSize: '1em', // Responsive font size
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
};

const listItemStyle = {
    marginBottom: '1.5em', // Responsive margin
};

const strongStyle = {
    color: '#00796b', // Darker blue for emphasis
};

const textContainerStyle = {
    marginTop: '2em', // Increased margin for spacing
};

export default Home;