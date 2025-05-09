
import React from 'react';

const LoadingPage = ({ darkMode }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: darkMode ? '#121212' : '#f4f4f4',
        color: darkMode ? '#f1f1f1' : '#000',
      }}
    >
      <div
        style={{
          border: '16px solid #f3f3f3',
          borderTop: '16px solidrgb(0, 0, 0)',
          borderRadius: '50%',
          width: '80px',
          height: '80px',
          animation: 'spin 2s linear infinite',
        }}
      ></div>
    </div>
  );
};

export default LoadingPage;
