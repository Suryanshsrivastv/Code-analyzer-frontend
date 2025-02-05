import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: 'rgba(40, 44, 52, 0.8)', // Transparent background
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      bottom: 0,
      left: 40,
      width: '90%',
      zIndex: 4,
    },
    link: {
      color: '#61dafb',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      width: '24px',
      height: '24px',
      marginRight: '8px',
      objectFit: 'contain', // Ensure the image fits within the box
    },
  };

  return (
    <div style={styles.footer}>
      <a href="https://www.linkedin.com/in/suryansh-srivastava-909036291" style={styles.link}>
        <img src="public/icons8-linkedin-240.png" alt="LinkedIn" style={styles.logo} />
        LinkedIn
      </a>
      <a href="https://github.com/Suryanshsrivastv" style={styles.link}>
        <img src="public/icons8-github-150.png" alt="GitHub" style={styles.logo} />
        GitHub
      </a>
    </div>
  );
};

export default Footer;