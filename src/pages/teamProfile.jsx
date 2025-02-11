import React from 'react';

function TeamProfile() {
  return (
    <div style={styles.teamProfile}>
      <div style={styles.header}>
        <h1>ADHENO - Integrated Rural Development Association</h1>
      </div>
      <div style={styles.content}>
        <h2>Staff Profile</h2>
        
        {staffMembers.map((member, index) => (
          <section key={index} style={styles.staffMember}>
            <h3>
              {member.id}) <strong>{member.name}</strong>
            </h3>
            <img src={member.image} alt={member.name} style={styles.image} />
            <br /> {/* New line added here */}
            <p style={styles.paragraph}>
              {member.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}

// Sample data for staff members
const staffMembers = [
  {
    id: 'I',
    name: 'Yonathan Fikre - Executive Director of ADHENO',
    description: `Mr. Yonathan holds Bachelor of Commerce (B.Com), Bachelor of Social Work and Social Administration (B.SWSA) and MA in Social Sector Planning and Management. He worked with Save the Children USA, as Curriculum Development Specialist and later as Monitoring, Evaluation and Documentation Officer. Mr. Yonathan then joined Fredskorpset as Africa Regional Program Officer and he has closely worked with many professionals in Eastern and Southern Africa. Thus, he has extensively travelled within Africa and interacted with different global and Inter-Africa organizations. Furthermore, Mr. Yonathan has also worked in some parts of Asia and in Norway.`,
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    id: 'II',
    name: 'Selomie Hailu - Administrative and Financial Head',
    description: `Selomie holds a diploma in Secretariat Science from Entoto Polytechnique College. She also did a one year internship program with the World Young Women Christian Association, on Young Women Leadership Development Program in Geneva, Switzerland. She has a couple of years’ experience in non-governmental and multi-lateral organizations in Ethiopia. She worked in the African Union (AU) where she was mainly responsible for all secretarial and mail distribution activities in the Refugee Department. Currently, she is the Administration and Finance Head at Adheno where she is responsible for activities including secretarial and administrative support, collecting funds from donor organizations, annual budget preparations, and more.`,
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    id: 'III',
    name: 'Rebecca Getiye - Finance Officer',
    description: `Rebeka holds a BA in Accounting and Finance from Addis Ababa University. She also holds a Diploma in Computer Science from Alpha University. Currently, she is a Finance Officer at ADHENO where she manages financial tasks including payment vouchers and budget reports.`,
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    id: 'IV',
    name: 'Isayias Fikre - Project Coordinator',
    description: `Isayias holds a B.ED in Geography and minor in Economics from Bahir Dar University. He has nearly four years of experience working in various agricultural offices and has coordinated more than 15 different developmental programs at ADHENO.`,
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    id: 'V',
    name: 'Sefinew Demlie – Program Officer',
    description: `Sefinew holds dual master's degrees and has extensive experience in development programs addressing the protection of vulnerable groups and human rights issues in Ethiopia and Uganda. Currently, he is a Program Officer at ADHENO where he focuses on resource mobilization and project implementation.`,
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    id: 'VI',
    name: 'Ayele Beyene - Field Officer',
    description: `Ayele holds a Diploma in Natural Resources from Alage Technical and Vocational College and has worked extensively in government civil service sectors focusing on natural resource management and rural development activities.`,
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    id: 'VII',
    name: 'Eden Hailemichael – Project Cashier',
    description: `Eden holds a diploma in Accounting and has experience as a cashier in various organizations. Currently, she is serving as a project Cashier at Adheno.`,
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
];

const styles = {
  teamProfile: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px', // Bottom margin added here
  },
  header: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#e0f7fa',
    borderRadius: '8px',
  },
  content: {
    textAlign: 'left',
    color: '#333',
  },
  staffMember: {
    padding: '15px',
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.3s',
  },
  image: {
    width: '130px',
    height: '150px',
    borderRadius: '5px',
    marginRight: '15px',
    float: 'left',
  },
  paragraph: {
    transition: 'background-color 0.3s',
  },
};

// Add hover effect to paragraphs
// const handleMouseEnter = (e) => {
//   e.target.style.backgroundColor = '#f0f0f0';
// };

// const handleMouseLeave = (e) => {
//   e.target.style.backgroundColor = 'transparent';
// };

// Assign mouse event handlers to paragraphs (optional)
// document.querySelectorAll('p').forEach(paragraph => {
//   paragraph.addEventListener('mouseenter', handleMouseEnter);
//   paragraph.addEventListener('mouseleave', handleMouseLeave);
// });

export default TeamProfile;