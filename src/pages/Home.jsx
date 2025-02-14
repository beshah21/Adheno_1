import React from 'react';

const Home = ({ isDarkMode }) => {
    const styles = {
        container: {
            width: '100vw',
            minHeight: '100vh',
            padding: '10vh 2em',
            backgroundColor: isDarkMode ? '#34495e' : '#e0f7fa',
            color: isDarkMode ? '#ecf0f1' : '#333',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        content: {
            maxWidth: '800px',
            width: '100%',
            backgroundColor: isDarkMode ? '#2c3e50' : '#fff',
            padding: '2em',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
        },
        header: {
            color: isDarkMode ? '#FFD700' : '#00796b',
            marginBottom: '1em',
        },
        paragraph: {
            lineHeight: '1.6',
            fontSize: '1em',
        },
        list: {
            textAlign: 'left',
            padding: '0',
            listStyleType: 'none',
            marginTop: '1.5em',
        },
        listItem: {
            marginBottom: '1em',
        },
        strong: {
            color: isDarkMode ? '#FFD700' : '#00796b',
            fontWeight: 'bold',
        },
        button: {
            display: 'inline-block',
            padding: '10px 20px',
            marginTop: '20px',
            backgroundColor: '#00796b',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textDecoration: 'none',
            fontSize: '1em',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.header}>Welcome to ADHENO Integrated Rural Development Association</h1>
                <p style={styles.paragraph}>
                    ADHENO Integrated Rural Development Association is an Ethiopian non-profit, non-governmental organization based in Addis Ababa, Ethiopia. It was established in 2003 by concerned citizens and registered with the Ethiopian Ministry of Justice for the purpose of contributing toward the alleviation of extreme poverty in North Shoa, one of the poorest regions of the country. Its specific objectives include:
                </p>

                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <strong style={styles.strong}>Environmental Rehabilitation:</strong>
                        <p style={styles.paragraph}>
                            Recovering the productive potential of the natural environment through afforestation and conservation of natural resources (soil, water, and flora).
                        </p>
                    </li>

                    <li style={styles.listItem}>
                        <strong style={styles.strong}>Basic Education:</strong>
                        <p style={styles.paragraph}>
                            Development of the human productive capacity through improved access to basic education and skills development.
                        </p>
                    </li>

                    <li style={styles.listItem}>
                        <strong style={styles.strong}>Entrepreneurship and Economic Empowerment:</strong>
                        <p style={styles.paragraph}>
                            Providing training and capital to help women and youth start small local businesses to generate revenue and develop a way out of poverty and dependency.
                        </p>
                    </li>

                    <li style={styles.listItem}>
                        <strong style={styles.strong}>Health and Nutrition:</strong>
                        <p style={styles.paragraph}>
                            Providing access to basic healthcare and improved nutrition (especially for children).
                        </p>
                    </li>
                </ul>

                <p style={styles.paragraph}>
                    Gudifetcha of Trees is a strategy devised by ADHENO to improve survival of planted trees, based on an Ethiopian tradition for adopting children. This award-winning concept promotes environmentalism among farmers by fostering a sense of caring for trees.
                </p>

                <p style={styles.paragraph}>
                    The project has forged close partnerships with the community, melding indigenous traditional approaches to resource management with modern conservation principles. It is critical in ensuring that the land recovers some of its productivity.
                </p>

                <a href="#donate" style={styles.button}>Donate Now</a>
            </div>
        </div>
    );
};

export default Home;
