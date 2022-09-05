import React, { useState } from 'react';
import './Styles/Header.css';
import Drop from '../images/drop.png';
import MenuDropdown from './MenuDropdown';
import Logo from '../images/Logo.png';

function Header() {

  const [showMenuDropdown, setShowMenuDropdown] = useState(false);

  return (
    <div className="headerInteiro">
      <img className="logo" src={Logo} alt="logo" />
      <p>Menu 1</p>
      <p>
        Menu 2
        <button
          onClick={() => setShowMenuDropdown(!showMenuDropdown)}>
          <img className="drop" src={Drop} alt="Menu Drop"></img>
        </button>
      </p>
      <p>Menu 3</p>
      <p>Menu 4</p>
      <p>Menu 5</p>
      <button className="whiteButton">BUTTON</button>
      <button className="pinkButton">BUTTON</button>
      {showMenuDropdown ? (
        <MenuDropdown />
      ) : (
        ''
      )}
    </div>
  );
}

export default Header;