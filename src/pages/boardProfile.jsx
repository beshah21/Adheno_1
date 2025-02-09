import React from 'react';


const BoardProfile = () => {
    return (
        <div className="container">
            <main className="content" style={{ position: 'relative', margin: '20px' }}>
                <h2>Board Profile</h2>
                <ul>
                    <h3>
                        <li>Executive Director - Ato Yonathan Fikre</li>
                        <li>Chairperson - Dr. Yamerot Kinfu</li>
                        <li>Vice Chairperson - Dr. Yared Amare</li>
                        <li>Board Member - Dr. Yayehyirad Kitaw</li>
                        <li>Board Member - Eng. Tewoderos W/Amelak</li>
                        <li>Board Member - Sosena Demissie</li>
                        <li>Board Member - Elezabeth Mulugeta</li>
                        <li>Board Member - Ato Asenak Atakure</li>
                    </h3>
                </ul>
            </main>

            <footer className="footer" style={{ backgroundColor: '#E0FFAD', padding: '10px' }}>
                <table width="100%" border="0">
                    <tbody>
                        <tr>
                            <td width="11%" align="center"><h4><a href="glossary.html" title="Glossary" target="_self">Glossary of terms</a></h4></td>
                            <td width="11%" align="center"><h4><a href="contact.html" title="Contact" target="_blank">Contact</a></h4></td>
                        </tr>
                    </tbody>
                </table>
            </footer>
        </div>
    );
};

export default BoardProfile;