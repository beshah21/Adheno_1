import React from 'react';
import { Link } from 'react-router-dom';

const About = ({ isDarkMode }) => {
    // Define styles based on dark mode
    const pageStyle = {
        backgroundColor: isDarkMode ? '#2c3e50' : '#F5F5DC', 
        padding: '20px',
        minHeight: '100vh',
    };

    const containerStyle = {
        padding: '2em',
        maxWidth: '1000px',
        margin: '0 auto',
        backgroundColor: isDarkMode ? '#34495e' : '#f9f9f9', 
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    };

    const headerStyle = {
        textAlign: 'center',
        color: isDarkMode ? '#ecf0f1' : '#00796b',
    };

    const tableStyle = {
        width: '100%',
        backgroundColor: isDarkMode ? '#2c3e50' : '#FFFFFF', 
        borderCollapse: 'collapse',
    };

    const textCellStyle = {
        padding: '1em',
        verticalAlign: 'top',
        color: isDarkMode ? '#ecf0f1' : '#555',
    };

    const imageCellStyle = {
        textAlign: 'center',
        verticalAlign: 'top',
    };

    const paragraphStyle = {
        lineHeight: '1.6',
        color: isDarkMode ? '#ecf0f1' : '#555',
    };

    const teamHeaderStyle = {
        marginTop: '30px',
        color: isDarkMode ? '#ecf0f1' : '#00796b',
    };

    const teamListStyle = {
        listStyleType: 'none',
        padding: 0,
    };

    const linkStyle = {
        color: '#007BFF',
        textDecoration: 'none',
    };

    const listItemStyle = {
        marginBottom: '1em',
        transition: 'background-color 0.3s ease',
        color: isDarkMode ? '#ecf0f1' : '#333',
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
    };

    return (
        <div style={pageStyle}>
            <div className="about-container" style={containerStyle}>
                <h2 style={headerStyle}>About ADHENO</h2>
                <table className="about-table" style={tableStyle}>
                    <tbody>
                        <tr>
                            <td style={textCellStyle}>
                                <p style={paragraphStyle}>
                                    In 1998, a group of Ethiopians from Addis Ababa formed a voluntary committee to reconstruct a historic church in the North Shewa Zone of Ethiopia. This church was built on the site of a much older church in the village of Workegur, which was burned down by Ahmed Gragn in the 16th century. Upon completion of the Church of Saint Gabriel, some members of the committee observed the extreme poverty of the region and decided to reorganize themselves toward providing assistance to the local people.
                                </p>
                                <p style={paragraphStyle}>
                                    A Non-Governmental Organization was established and registered with the government of Ethiopia as ADHENO: Integrated Rural Development Association. The principal goal of this NGO is the elimination of poverty in the Northern Shewa region by providing the local population "the opportunity to use their labor to good purpose."
                                </p>
                            </td>
                            <td style={imageCellStyle}>
                                <img src="https://img.icons8.com/?size=100&id=nXduhA13SMUu&format=png&color=000000" alt="St. Gabriel Church Workegur" style={imageStyle} />
                                <br />St. Gabriel Church Workegur
                            </td>
                        </tr>
                        <tr>
                            <td style={textCellStyle}>
                                <p style={paragraphStyle}>
                                    The close interaction that ADHENO has with the local farmers, women, and youth, as well as the success of several well-executed local projects, have earned ADHENO a significant amount of credibility among the local population. The trust and cooperation of the local people have made ADHENO especially effective in implementing development projects in this region.
                                </p>
                            </td>
                            <td style={imageCellStyle}>
                                <img src="https://img.icons8.com/?size=100&id=nXduhA13SMUu&format=png&color=000000" alt="Local youth, women, and farmers receive project training" style={imageStyle} />
                                <br />Local youth, women, and farmers receive project training
                            </td>
                        </tr>
                        <tr>
                            <td style={textCellStyle}>
                                <p style={paragraphStyle}>
                                    A key success factor for ADHENO's development projects has been a very hands-on approach and a very close relationship with the local population. ADHENO listens to the local people to understand their needs and works directly with them to leverage their local knowledge to develop solutions.
                                </p>
                            </td>
                            <td style={imageCellStyle}>
                                <img src="https://img.icons8.com/?size=100&id=nXduhA13SMUu&format=png&color=000000" alt="Local women at ADHENO office in Workegur" style={imageStyle} />
                                <br />Local women at ADHENO office in Workegur
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={textCellStyle}>
                                <p style={paragraphStyle}>
                                    ADHENO staff includes community development workers hired from the community and based in the project area. ADHENO has a small office (funded by SIDA) in the village of Workegur to coordinate project activity.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h3 style={teamHeaderStyle}>ADHENO Team</h3>
                <ul style={teamListStyle}>
                    <li style={listItemStyle}>Yonathan Fikre - Executive Director</li>
                    <li style={listItemStyle}>Selomie Hailu - Administration & Finance Head</li>
                    <li style={listItemStyle}>Rebecca Getiye - Finance Officer</li>
                    <li style={listItemStyle}>Isayas Fikre - Project Coordinator</li>
                    <li style={listItemStyle}>Sefinew Demlie - Program Officer</li>
                    <li style={listItemStyle}>Ayele Beyene - Field Officer</li>
                    <li style={listItemStyle}>Eden Hailemichael - Project Cashier</li>
                </ul>
                <p>
                    <Link to="/team-profile" style={linkStyle}>Click here to view the ADHENO Team Profile</Link>.
                </p>

                <h3 style={teamHeaderStyle}>ADHENO Executive Board Members</h3>
                <ul style={teamListStyle}>
                    <li style={listItemStyle}>Dr. Yamerot Kinfu - Board Chairperson</li>
                    <li style={listItemStyle}>Dr. Yared Amare - Vice Chairperson</li>
                    <li style={listItemStyle}>Dr. Yayehyirad Kitaw - Member</li>
                    <li style={listItemStyle}>Eng. Tewoderos W/Amelak - Member</li>
                    <li style={listItemStyle}>Sosena Demissie - Member</li>
                    <li style={listItemStyle}>Elezabeth Mulugeta - Member</li>
                    <li style={listItemStyle}>Ato Asenak Atakure - Member</li>
                </ul>
                <p>
                    <Link to="/board-profile" style={linkStyle}>Click here to view the ADHENO Board Profile</Link>.
                </p>
            </div>
        </div>
    );
};

export default About;