import React from 'react';

const Stories = () => {
    const sampleStories = [
        {
            name: "Amina's Journey",
            story: "Amina, a single mother of three, faced immense challenges in providing for her family. Through the training programs offered by ADHENO, she learned sustainable farming techniques. Today, Amina runs a successful vegetable garden that not only feeds her family but also provides income, allowing her to send her children to school."
        },
        {
            name: "Daniel's Dream",
            story: "Daniel was once a child who struggled to attend school due to financial constraints. With the support of ADHENO's education initiatives, he received the necessary materials and mentorship. Now, Daniel is not only a high school graduate but also a role model for other children in his community, inspiring them to pursue their dreams."
        },
        {
            name: "Fatima's Business",
            story: "Fatima, a talented artisan, had difficulty marketing her handmade crafts. ADHENO provided her with training in entrepreneurship and marketing. Today, Fatima's crafts are sold in local markets, and she has expanded her business to include online sales, significantly improving her family's quality of life."
        },
        {
            name: "Samuel's Hope",
            story: "Samuel, a young farmer, faced the threat of land degradation and crop failure. Through ADHENO's environmental rehabilitation programs, he learned about sustainable land management practices. Now, Samuel's farm is thriving, and he has become an advocate for environmental conservation in his community."
        }
    ];

    const styles = {
        container: {
            padding: '30px',
            maxWidth: '900px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif',
        },
        header: {
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '15px',
            fontSize: '2.5rem',
        },
        paragraph: {
            lineHeight: '1.8',
            color: '#2c3e50',
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '1.3rem',
            fontWeight: '600',
            letterSpacing: '0.5px',
        },
        list: {
            listStyleType: 'none',
            padding: 0,
        },
        listItem: {
            marginBottom: '25px',
            padding: '20px',
            border: '1px solid #ecf0f1',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
        },
        listItemHover: {
            transform: 'translateY(-5px)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        },
        storyTitle: {
            fontSize: '1.6rem',
            color: '#e74c3c',
        },
        storyParagraph: {
            lineHeight: '1.8',
            color: '#555',
            fontSize: '1.1rem',
            fontWeight: '400',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Inspiring Stories</h1>
            <p style={styles.paragraph}>Discover the journeys of the individuals we've empowered:</p>
            <ul style={styles.list}>
                {sampleStories.map((story, index) => (
                    <li 
                        key={index} 
                        style={styles.listItem} 
                        onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.listItemHover)}
                        onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.listItem)}
                    >
                        <strong style={styles.storyTitle}>{story.name}</strong>
                        <p style={styles.storyParagraph}>{story.story}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Stories;
