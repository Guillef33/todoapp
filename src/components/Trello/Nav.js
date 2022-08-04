import React from 'react';

import './Nav.css';

function Nav() {
  return (
    <div className="nav-container">
      <div>Mi table</div>
      <div>
        <span>800 Golpes Enero</span>
        <span>Mi perfil</span>
        <span>Invitar gente</span>
      </div>
      <div>
        <span>Menu</span>
        <span>Aplicaciones</span>
      </div>
    </div>
  );
}

export default Nav