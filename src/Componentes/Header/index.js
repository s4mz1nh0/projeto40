import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <div className="tx">
      <nav>
        <NavLink to="/" end>
          Meus Favoritos - Séries
        </NavLink>{' '}
        | <NavLink to="cadastro">Cadastro de Séries</NavLink>
      </nav>
    </div>
  );
};

export default Header;
