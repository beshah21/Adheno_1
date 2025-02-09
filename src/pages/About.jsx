import React from 'react';

const About = () => {
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
                            <td style={imageCellStyle} align="center">
                                <img src="/assets/img/st.%20Gabriel%20Church%20Workegur.jpg" alt="St. Gabriel Church Workegur" style={imageStyle} />
                                <br />St. Gabriel Church Workegur
                            </td>
                        </tr>
                        <tr>
                            <td style={textCellStyle}>
                                <p style={paragraphStyle}>
                                    The close interaction that ADHENO has with the local farmers, women, and youth, as well as the success of several well-executed local projects, have earned ADHENO a significant amount of credibility among the local population. The trust and cooperation of the local people have made ADHENO especially effective in implementing development projects in this region. Many projects, including the school building and phases I to III of the environmental rehabilitation projects, were developed by ADHENO based on the specific requests of the local population, who have subsequently been enthusiastic participants, supporters, and beneficiaries of these projects. ADHENO has recently been awarded prizes by the local administration for its contributions to the community.
                                </p>
                            </td>
                            <td style={imageCellStyle} align="center">
                                <img src="/assets/img/Local%20youth,%20women%20and%20farmers%20receive%20Project%20Training.jpg" alt="Local youth, women, and farmers receive project training" style={imageStyle} />
                                <br />Local youth, women, and farmers receive project training
                            </td>
                        </tr>
                        <tr>
                            <td style={textCellStyle}>
                                <p style={paragraphStyle}>
                                    A key success factor for ADHENO's development projects has been a very hands-on approach and a very close relationship with the local population. ADHENO listens to the local people to understand their needs and works directly with them to leverage their local knowledge to develop solutions. Local farmers, women, and youth have been organized into local committees that are responsible for managing and monitoring the various projects. For example, the committee of farmers that monitors the environmental initiatives ensures that no local animals are allowed to graze on protected land. The members of these committees are given training on how to implement projects and manage finances. Thus far, there are four such committees that have been formed.
                                </p>
                            </td>
                            <td style={imageCellStyle} align="center">
                                <img src="../../public/img/Local-women-at-ADHENO-office-in-Workegur.jpeg" alt="Local women at ADHENO office in Workegur" style={imageStyle} />
                                <br />Local women at ADHENO office in Workegur
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={textCellStyle}>
                                <p style={paragraphStyle}>
                                    ADHENO staff also includes two community development workers that were hired from the community and are based in the project area. ADHENO has a small office (funded by SIDA) in the village of Workegur to coordinate project activity.
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
                    <a href="/team-profile" style={linkStyle}>Click here to view the ADHENO Team Profile</a>.
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
                    <a href="/board-profile" style={linkStyle}>Click here to view the ADHENO Board Profile</a>.
                </p>
            </div>
        </div>
    );
};

// Internal styles
const pageStyle = {
    backgroundColor: '#e6f7ff',
    padding: '20px',
    minHeight: '100vh',
};

const containerStyle = {
    padding: '2em',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
};

const headerStyle = {
    textAlign: 'center',
    color: '#00796b',
};

const tableStyle = {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderCollapse: 'collapse',
};

const textCellStyle = {
    padding: '1em',
    verticalAlign: 'top',
};

const imageCellStyle = {
    textAlign: 'center',
    verticalAlign: 'top',
};

const paragraphStyle = {
    lineHeight: '1.6',
    color: '#555',
};

const teamHeaderStyle = {
    marginTop: '30px',
    color: '#00796b',
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
};

// Image styles for consistency
const imageStyle = {
    maxWidth: '100%', // Responsive image
    height: 'auto',
    borderRadius: '8px',
};

export default About;