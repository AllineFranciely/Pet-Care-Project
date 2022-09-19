import React from 'react';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import './Styles/Footer.css';
import Logo from '../images/Logo.png';
import Instagram from '../images/instagram.png';
import LinkedIn from '../images/linkedin.png';

function Footer() {
  return (
    <div className="footerInteiro">
      <div classname="Acima">
        <Flex
          flexGrow={1}
          id="content"
          justifyContent="center"
          height={65}
        >
          <Grid
            gridTemplateColumns="repeat(12, 1fr)"
            gap={'10px'}
            width="100%"
            height="fit-content"
          >
            <Box  gridColumn={gridColumn.gc12} >
              <Grid
                gridTemplateColumns="repeat(12, 1fr)"
              >
                <Box ml={10} gridColumn={gridColumn.gc6} >
                  <img src={Logo} alt="Logo" className="LogoFooter" />
                </Box>
                <Box ml={370} gridColumn={gridColumn.gc6} >
                  <Grid
                    gridTemplateColumns="repeat(12, 1fr)"
                  >
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
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Flex>
      </div>
      <hr size="1000" width="100%" className="footerLine"></hr>
      <p className="pFooter">© 2022 <b>Alline Franciely</b>. Política de Privacidade.</p>
    </div >
  );
}

export default Footer;