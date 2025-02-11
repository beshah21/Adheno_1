import React from 'react';

function BoardProfile() {
  return (
    <div style={styles.boardProfile}>
      <h2>Board Profile</h2>
      <ul style={styles.boardList}>
        {boardMembers.map((member, index) => (
          <li 
            key={index} 
            style={styles.listItem}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <img src={member.image} alt={member.name} style={styles.image} />
            <span>{member.role} - {member.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Sample data for board members
const boardMembers = [
  {
    role: 'Executive Director',
    name: 'Ato Yonathan Fikre',
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    role: 'Chairperson',
    name: 'Dr. Yamerot Kinfu',
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    role: 'Vice Chairperson',
    name: 'Dr. Yared Amare',
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    role: 'Board Member',
    name: 'Dr. Yayehyirad Kitaw',
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    role: 'Board Member',
    name: 'Eng. Tewoderos W/Amelak',
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    role: 'Board Member',
    name: 'Sosena Demissie',
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    role: 'Board Member',
    name: 'Elezabeth Mulugeta',
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
  {
    role: 'Board Member',
    name: 'Ato Asenak Atakure',
    image: 'https://img.icons8.com/?size=100&id=23309&format=png&color=000000', // Replace with actual image path
  },
];

const styles = {
  boardProfile: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  boardList: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.3s',
  },
  image: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '15px',
  },
};

export default BoardProfile;