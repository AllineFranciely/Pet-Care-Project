import React from 'react';
import './Styles/Footer.css';
import Logo from '../images/Logo.png';
import Instagram from '../images/instagram.png';
import LinkedIn from '../images/linkedin.png';

function Footer() {
  return (
    <div className="footerInteiro">
      <div classname="Acima">
        <img src={Logo} alt="Logo" className="LogoFooter" />
        <button>
          <a
            href="https://www.linkedin.com/in/alline-franciely-silva/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="rede" src={LinkedIn} alt="LinkedIn"></img>
          </a>
        </button>
        <button>
          <a
            href="https://www.instagram.com/alline_franciely/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="rede" src={Instagram} alt="Instagram"></img>
          </a>
        </button>
      </div>
      <hr size="1000" width="100%" className="footerLine"></hr>
      <p className="pFooter">© 2022 <b>Alline Franciely</b>. Política de Privacidade.</p>
    </div >
  );
}

export default Footer;