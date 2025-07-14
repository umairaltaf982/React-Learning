import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

// Use useContext to consume value
const ThemedButton = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: isDark ? '#333' : '#fff',
        color: isDark ? '#fff' : '#000',
        padding: "10px",
        borderRadius: "5px"
      }}
      onClick={toggleTheme}
    >
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemedButton;
