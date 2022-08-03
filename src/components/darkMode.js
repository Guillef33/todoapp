import React from 'react'

import Moon from '../assets/icon-moon.svg'
import Sun from '../assets/icon-sun.svg'


function DarkMode({ theme, toggleTheme }) {
  return (
    <div>
      <img
        src={theme === "light" ? Sun : Moon}
        alt="darkModeToggle"
        onClick={toggleTheme}
      />
    </div>
  );
}

export default DarkMode;