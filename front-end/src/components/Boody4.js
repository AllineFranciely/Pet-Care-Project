import React, { useState } from 'react';
import './Styles/Boddy4.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
// import ModalVideo from 'react-modal-video';

function Boddy4() {
  const [open, setOpen] = useState(false);
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
            <Grid
              gridTemplateColumns="repeat(12, 1fr)"
              gap={'10px'}
              mx={6}
              width="100%"
              height="100%"
              maxBlockSize={'300px'}
            >

              <Box className="anuncio" gridColumn={gridColumn.gc6}>
                <h1 className="h1Anuncio"><b>SSSSSS</b></h1>
                <h1 className="h1Anuncio"><b>SSSSSS</b></h1>
                <h1 className="h1Anuncio"><b>SSSSS</b></h1>
                <button
                  className="buttonPlay"
                  onClick={() => setOpen(!open)}
                >
                  ASSISTA A DEMONSTRAÇÃO
                </button>
              </Box>
              <Box gridColumn={gridColumn.gc6}>

              </Box>
            </Grid>
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
      </Flex>
    </div>
  );
}

export default Boddy4;