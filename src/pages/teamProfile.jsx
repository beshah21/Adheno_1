import React from 'react';

function TeamProfile() {
    return (
        <div className="container">
            <div className="header">
                <table width="100%" border="3" cellspacing="3" cellpadding="3" align="center" bgcolor="#E0FFAD" id="rcorners2">
                    <tbody>
                        <tr>
                            <td width="12%" align="center">
                                {/* <img src="../../public/logo.jpg" alt="Logo ADHENO" width="360" style={{ background: '#C6D580', display: 'block' }} /> */}
                            </td>
                            <td width="81%" align="center" colSpan="7"><br></br><br></br>
                                <h1 style={{ color: '#486616' }}>ADHENO - Integrated Rural Development Association</h1>
                            </td>
                        </tr>
                    </tbody>
                </table>
            
            </div>
            <div className="content" style={{ position: 'relative', top: '100px', left: '1%' }}>
                <h2>Staff Profile</h2><br />
                
                <section>
                    <h3>I) <strong>Yonathan Fikre - Executive Director of ADHENO</strong></h3>
                    {/* <img src="img/Jonathan.jpg" width="130" height="150" alt="Yonathan" /> */}
                    <p>
                        Mr. Yonathan holds Bachelor of Commerce (B.Com), Bachelor of Social Work and Social Administration (B.SWSA) and MA in Social Sector Planning and Management. He worked with Save the Children USA, as Curriculum Development Specialist and later as Monitoring, Evaluation and Documentation Officer. Mr. Yonathan then joined Fredskorpset as Africa Regional Program Officer and he has closely worked with many professionals in Eastern and Southern Africa. Thus, he has extensively travelled within Africa and interacted with different global and Inter-Africa organizations. Furthermore, Mr. Yonathan has also worked in some parts of Asia and in Norway.
                    </p>
                </section>

                <hr />

                <section>
                    <h3>II) <strong>Selomie Hailu - Administrative and Financial Head</strong></h3>
                    {/* <img src="img/Selomi.jpg" width="130" height="150" alt="Selomie" /> */}
                    <p>
                        Selomie holds a diploma in Secretariat Science from Entoto Polytechnique College. She also did a one year internship program with the World Young Women Christian Association, on Young Women Leadership Development Program in Geneva, Switzerland. She has a couple of years’ experience in non-governmental and multi-lateral organizations in Ethiopia. She worked in the African Union (AU) where she was mainly responsible for all secretarial and mail distribution activities in the Refugee Department. Currently, she is the Administration and Finance Head at Adheno where she is responsible for activities including secretarial and administrative support, collecting funds from donor organizations, annual budget preparations, and more.
                    </p>
                </section>

                <hr />

                <section>
                    <h3>III) <strong>Rebecca Getiye - Finance Officer</strong></h3>
                    {/* <img src="img/Rebeka.jpg" width="126" height="151" alt="Rebecca" /> */}
                    <p>
                        Rebeka holds a BA in Accounting and Finance from Addis Ababa University. She also holds a Diploma in Computer Science from Alpha University. Currently, she is a Finance Officer at ADHENO where she manages financial tasks including payment vouchers and budget reports.
                    </p>
                </section>

                <hr />

                <section>
                    <h3>IV) <strong>Isayias Fikre - Project Coordinator</strong></h3>
                    {/* <img src="img/Isayas.jpg" width="139" height="190" alt="Isayias" /> */}
                    <p>
                        Isayias holds a B.ED in Geography and minor in Economics from Bahir Dar University. He has nearly four years of experience working in various agricultural offices and has coordinated more than 15 different developmental programs at ADHENO.
                    </p>
                </section>

                <hr />

                <section>
                    <h3>V) <strong>Sefinew Demlie – Program Officer</strong></h3>
                    {/* <img src="img/Sefinew.jpg" width="139" height="190" alt="Sefinew" /> */}
                    <p>
                        Sefinew holds dual master's degrees and has extensive experience in development programs addressing the protection of vulnerable groups and human rights issues in Ethiopia and Uganda. Currently, he is a Program Officer at ADHENO where he focuses on resource mobilization and project implementation.
                    </p>
                </section>

                <hr />

                <section>
                    <h3>VI) <strong>Ayele Beyene - Field Officer</strong></h3>
                    {/* <img src="img/Ayele.jpg" width="130" height="150" alt="Ayele" /> */}
                    <p>
                        Ayele holds a Diploma in Natural Resources from Alage Technical and Vocational College and has worked extensively in government civil service sectors focusing on natural resource management and rural development activities.
                    </p>
                </section>

                <hr />

                <section>
                    <h3>VII) <strong>Eden Hailemichael – Project Cashier</strong></h3>
                    {/* <img src="img/Eden.jpg" width="130" height="150" alt="Eden" /> */}
                    <p>
                        Eden holds a diploma in Accounting and has experience as a cashier in various organizations. Currently, she is serving as a project Cashier at Adheno.
                    </p>
                </section>

                <br /><br />
            </div>

            <div className="footer" bgcolor="#E0FFAD" style={{ position: 'relative', bottom: '-100px' }}>
                <table width="100%" bgcolor="#E0FFAD" border="0" cellpadding="1" cellspacing="1" align="center" height="50px">
                    <tbody>
                        <tr>
                            <td width="11%">
                                <div align="center">
                                    <h4><a href="glossary.jsx" title="Glossary" target="_self">Glossary of terms</a></h4>
                                </div>
                            </td>
                            <td width="11%">
                                <div align="center">
                                    <h4><a href="contact.jsx" title="Contact" target="_blank">Contact</a></h4>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TeamProfile;