import React, { useState } from 'react';
import './Styles/Boddy4.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
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
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
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
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="30vh"
      >
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          gap={'10px'}
          mx={6}
          width="100%"
          height="100%"
          maxBlockSize={'300px'}
        >
          <Box gridColumn={gridColumn.gc12}>
              <Carousel responsive={responsive}>
                <img className="petImg" src={Lucky1} alt="Lucky1" />
                <img className="petImg" src={Lucky2} alt="Lucky2" />
                <img className="petImg" src={Lucky3} alt="Lucky3" />
                <img className="petImg" src={Lucky4} alt="Lucky4" />
                <img className="petImg" src={Toddy1} alt="Toddy1" />
                <img className="petImg" src={Toddy2} alt="Toddy2" />
                <img className="petImg" src={Toddy3} alt="Toddy3" />
                <img className="petImg" src={Toddy4} alt="Toddy4" />
              </Carousel>
          </Box>
          <Box className="anuncio2" gridColumn={gridColumn.gc12}>
            <Grid
              gridTemplateColumns="repeat(12, 1fr)"
              gap={'10px'}
              mx={6}
              width="100%"
              height="100%"
              maxBlockSize={'300px'}
            >
              <Box gridColumn={gridColumn.gc6}>
                <h1 className="h1Anuncio2"><b>SSSSSSSSSSSSSSSS</b></h1>
                <h1 className="h1Anuncio2"><b>sssssss</b></h1>
                <p className="p1Anuncio2">SSSSSSSSSSSSSSs</p>
                <p className="p2Anuncio2">ssssssssssss</p>
                <button className="buttonCreatePart4">
                  <a
                    href="sssssss"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CRIAR CONTA GRATUITA
                  </a>
                </button>
              </Box>
              <Box gridColumn={gridColumn.gc6}>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Flex >
    </div >
  );
}

export default Boddy4;