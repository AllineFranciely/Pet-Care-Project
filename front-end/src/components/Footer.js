import React from 'react';
import './Styles/Footer.css';
import Logo from '../images/Logo.png';

function Footer() {
  return (
    <div className="footerInteiro">
      <img img={Logo} alt="Logo" className="Logo" />
      <hr size="1000" width="100%" className="footerLine"></hr>
      <p className="pFooter">© 2022 <b>Alline Franciely</b>. Política de Privacidade.</p>
    </div >
  );
}

export default Footer;