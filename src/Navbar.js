import React from 'react';

const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: 'rgba(40, 44, 52, 0.4)',
      padding: '20px',
      textAlign: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 4,
    },
    heading: {
      fontSize: '2.5em',
      fontWeight: 'bold',
      color: '#61dafb',
      margin: 0,
    },
    subheading: {
      fontSize: '1.2em',
      color: '#ffffff',
      margin: 0,
    },
  };

  return (
    <div style={styles.navbar}>
      <h1 style={styles.heading}>TCode Analyzr</h1>
      <p style={styles.subheading}>An AI powered Code Quality Analyzer</p>
    </div>
  );
};

export default Navbar;