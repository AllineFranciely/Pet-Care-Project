import React from 'react';
import './Styles/Footer.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import Twitter from '../images/twitter.jpeg';
import Facebook from '../images/facebook.jpeg';
import LinkedIn from '../images/linkedin.jpeg';
import Instagram from '../images/instagram.jpeg';
import YouTube from '../images/youtube.jpeg';

function Footer() {
  return (
    <div className="footerInteiro">
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
          maxBlockSize={'100px'}
        >
          <Box className="footer" gridColumn={gridColumn.gc12}>
            <Grid
              gridTemplateColumns="repeat(12, 1fr)"
              gap={'10px'}
              mx={6}
              width="100%"
              height="100%"
              maxBlockSize={'100px'}
            >
              <Box gridColumn={gridColumn.gc12}>
                <Grid
                  gridTemplateColumns="repeat(12, 1fr)"
                  gap={'10px'}
                  mx={6}
                  width="100%"
                  height="100%"
                  maxBlockSize={'100px'}
                >
                  <Box gridColumn={gridColumn.gc6}>

                  </Box>
                  <Box gridColumn={gridColumn.gc6}>
                    <button>
                      <a
                        href="https://twitter.com/rd_station"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img className="rede" src={Twitter} alt="Twitter"></img>
                      </a>

                    </button>
                    <button>
                      <a
                        href="https://www.facebook.com/ResultadosDigitais/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img className="rede" src={Facebook} alt="Facebook"></img>
                      </a>

                    </button>
                    <button>
                      <a
                        href="https://www.linkedin.com/company/resultadosdigitais"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img className="rede" src={LinkedIn} alt="LinkedIn"></img>
                      </a>

                    </button>
                    <button>
                      <a
                        href="https://www.instagram.com/resdigitais/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img className="rede" src={Instagram} alt="Instagram"></img>
                      </a>

                    </button>
                    <button>
                      <a
                        href="https://www.youtube.com/channel/UC5lPKvmw6-DFya_qreisENQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img className="rede" src={YouTube} alt="YouTube"></img>
                      </a>
                    </button>
                  </Box>
                </Grid>
              </Box>
              <Box gridColumn={gridColumn.gc12}>
                <hr size="1000" width="100%" className="footerLine"></hr>
                <Box gridColumn={gridColumn.gc6}>
                  <p className="pFooter">© 2022 <b>RD Station</b>. Política de Privacidade.</p>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Flex>

    </div>
  );
}

export default Footer;