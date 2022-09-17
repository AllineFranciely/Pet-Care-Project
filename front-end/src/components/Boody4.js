import React from 'react';
import './Styles/Boddy4.css';
// import ModalVideo from 'react-modal-video';
import Lucky1 from '../images/Lucky1.jpeg';
import Lucky2 from '../images/Lucky2.jpeg';
import Lucky3 from '../images/Lucky3.jpeg';
import Lucky4 from '../images/Lucky4.jpeg';
import Toddy1 from '../images/Toddy1.jpeg';
import Toddy2 from '../images/Toddy2.jpeg';
import Toddy3 from '../images/Toddy3.jpeg';
import Toddy4 from '../images/Toddy4.jpeg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Boddy4() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 1000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div boddy4Inteiro>
      <h1 className="title1Part4"><b>Conheça alguns dos nossos clientes</b></h1>
      <h1 className="subTitle1Part4"><b>mas cuidado, é muuuuuuita fofura</b></h1>
      <Carousel responsive={responsive} >
        <img className="petImg" src={Lucky1} alt="Lucky1" />
        <img className="petImg" src={Lucky2} alt="Lucky2" />
        <img className="petImg" src={Lucky3} alt="Lucky3" />
        <img className="petImg" src={Lucky4} alt="Lucky4" />
        <img className="petImg" src={Toddy1} alt="Toddy1" />
        <img className="petImg" src={Toddy2} alt="Toddy2" />
        <img className="petImg" src={Toddy3} alt="Toddy3" />
        <img className="petImg" src={Toddy4} alt="Toddy4" />
      </Carousel>
    </div >
  );
}

export default Boddy4;