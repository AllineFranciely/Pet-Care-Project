  import React from 'react';
  import './Styles/Boddy3.css';
  import { gridColumn } from '../utils/gridcolumn';
  import { Box, Grid, Flex } from '@chakra-ui/react';
  import Vetor1 from '../images/vetor1.jpeg';
  import Vetor2 from '../images/vetor2.jpeg';
  import Vetor3 from '../images/vetor3.jpeg';
  import Vetor4 from '../images/vetor4.jpeg';
  import Vetor5 from '../images/vetor5.jpeg';
  import Vetor6 from '../images/vetor6.jpeg';

  function Boddy3() {

    return (
      <div boddy1Inteiro>
        <Flex
          flexGrow={1}
          id="content"
          justifyContent="center"
          height="30vh"
        >
          <Box className="boddyPart3" gridColumn={gridColumn.gc12}>
            <Grid
              gridTemplateColumns="repeat(12, 1fr)"
              gap={'10px'}
              mx={6}
              width="100%"
              height="100%"
              maxBlockSize={'200px'}
            >
              <Box gridColumn={gridColumn.gc6}>
                <h1 className="titlePart3"><b>AAAA</b></h1>
                <h1 className="titlePart3"><b>SSSSSS</b></h1>
              </Box>
            </Grid>
            <Box className="textoBoddyPart3" gridColumn={gridColumn.gc10}>
            <Grid
              gridTemplateColumns="repeat(12, 1fr)"
              gap={'10px'}
              mx={6}
              width="100%"
              height="100%"
              maxBlockSize={'200px'}
            >
            <Box mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
              <img className="iconPart3" src={Vetor1} alt="Vetor1"></img>
              <h1 className="Title2BoddyPart3"><b>SSSSSS</b></h1>
              <p className="pBoddyPart3">SSSSSS
              SSSSSS
              SSSSSS</p>
            </Box>
            <Box  mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
            <img className="iconPart3" src={Vetor2} alt="Vetor2"></img>
              <h1 className="Title2BoddyPart3"><b>SSSSSS</b></h1>
              <p className="pBoddyPart3">SSSSSS 
              </p>
            </Box>
            <Box  mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
            <img className="iconPart3" src={Vetor3} alt="Vetor3"></img>
              <h1 className="Title2BoddyPart3"><b>SSSSSS</b></h1>
              <p className="pBoddyPart3">SSSSSS
              </p>
            </Box>
            <Box  mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
            <img className="iconPart3" src={Vetor4} alt="Vetor4"></img>
              <h1 className="Title2BoddyPart3"><b>SSSSSS</b></h1>
              <p className="pBoddyPart3">SSSSSS
              </p>
            </Box>
            <Box  mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
            <img className="iconPart3" src={Vetor5} alt="Vetor5"></img>
              <h1 className="Title2BoddyPart3"><b>SSSSSS</b></h1>
              <p className="pBoddyPart3">SSSSSS
              </p>
            </Box>
            <Box  mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
            <img className="iconPart3" src={Vetor6} alt="Vetor6"></img>
              <h1 className="Title2BoddyPart3"><b>SSSSSS</b></h1>
              <p className="pBoddyPart3">SSSSSS
              </p>
            </Box>
            </Grid>
              </Box>
              <Box className="texto2BoddyPart3" gridColumn={gridColumn.gc12}>
            <h1 className="title3BoddyPart3"><b>SSSSSS</b></h1>
            <h1 className="title3BoddyPart33"><b>SSSSSS</b></h1>
            <p className="texto3BoddyPart3">SSSSSS</p>
            <p className="texto3BoddyPart3">SSSSSS</p>
            <div className="buttonPart3">
            <button className="buttonCreatePart3">
                  <a
                  href="SSSSSS"
                  target="_blank"
                  rel="noreferrer"
                  >
                      CRIAR CONTA
                  </a> 
              </button>
          </div>
            </Box>
          </Box>
        </Flex>
      </div>
    );
  }

  export default Boddy3;