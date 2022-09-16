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
          <Box ml={10} gridColumn={gridColumn.gc3} >
            <img className="logo" src={Logo} alt="logo" />
          </Box>
          <Box mt={5} gridColumn={gridColumn.gc2} >
            <p>Menu 1</p>
          </Box>
          <Box mt={5} gridColumn={gridColumn.gc2} >
            <p>Menu 2</p>
          </Box>
          <Box mt={5} gridColumn={gridColumn.gc2} >
            <p>Menu 3</p>
          </Box>
          <Box mt={5} gridColumn={gridColumn.gc3} >
            <button mr={5} className="whiteButton">BUTTON</button>
            <button className="pinkButton">BUTTON</button>
          </Box>
        </Grid>
      </Flex>
    </div>
  );
}

export default Header;