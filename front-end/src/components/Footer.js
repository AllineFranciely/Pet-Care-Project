import React from 'react';
import './Styles/Footer.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import Logo from '../images/Logo.png';

function Footer() {
  return (
    <div className="footerInteiro">
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="20vh"
      >
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          gap={'10px'}
          mx={6}
          width="100%"
          height="100%"
          maxBlockSize={'100px'}
        >
          <Box gridColumn={gridColumn.gc12}>
            <img img={Logo} alt="Logo" className="Logo"/>
          </Box>
          <Box gridColumn={gridColumn.gc12}>
            <hr size="1000" width="100%" className="footerLine"></hr>
            <Box gridColumn={gridColumn.gc6}>
              <p className="pFooter">© 2022 <b>Alline Franciely</b>. Política de Privacidade.</p>
            </Box>
          </Box>
        </Grid>
      </Flex >
    </div >
  );
}

export default Footer;