import React from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { gridColumn } from '../utils/gridcolumn';
import './Styles/Header.css';
import Logo from '../images/Logo.png';

function Header() {

  return (
    <div className="headerInteiro">
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        minHeight="100vh"
      >
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          gap={'10px'}
          width="100%"
          height="fit-content"
        >
          <Box ml={10} gridColumn={gridColumn.gc2} >
            <img className="logo" src={Logo} alt="logo" />
          </Box>
          <Box mt={5} gridColumn={gridColumn.gc2} className="menu">
            <p>Pet Shop</p>
          </Box>
          <Box mt={5} gridColumn={gridColumn.gc2} className="menu">
            <p>Banho e Tosa</p>
          </Box>
          <Box mt={5} gridColumn={gridColumn.gc2} className="menu">
            <p>Veterinário</p>
          </Box>
          <Box mt={5} gridColumn={gridColumn.gc2} className="menu">
            <p>Hotel Pet</p>
          </Box>
          <Box mt={5} gridColumn={gridColumn.gc2} >
            <button className="whiteButton">BUTTON</button>
          </Box>
        </Grid>
      </Flex>
    </div>
  );
}

export default Header;