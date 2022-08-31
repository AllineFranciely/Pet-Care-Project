import React, { useState } from 'react';
import './Styles/Header.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import Drop from '../images/drop.png';
import MenuDropdown from './MenuDropdown';
import Logo from '../images/Logo.png';

function Header() {

  const [showMenuDropdown, setShowMenuDropdown] = useState(false);

  return (
    <div className="headerInteiro">
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="10vh"
      >
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          gap={'10px'}
          mx={6}
          width="100%"
          height="100%"
          maxBlockSize={'200px'}
        >
          <Box mt={2} ml={10} gridColumn={gridColumn.gc2}>
            <img className="logo" src={Logo} alt="logo"/>
          </Box>
          <Box mt={3} gridColumn={gridColumn.gc10}>
            <Grid
              gridTemplateColumns="repeat(12, 1fr)"
              gap={'10px'}
              mx={1}
              width="100%"
              height="100%"
              maxBlockSize={'200px'}
            >
              <Box mt={3} gridColumn={gridColumn.gc2}>
                <p>Menu 1</p>
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc2}>
                <p>
                  Menu 2
                  <button
                    onClick={() => setShowMenuDropdown(!showMenuDropdown)}>
                    <img className="drop" src={Drop} alt="Menu Drop"></img>
                  </button>
                </p>
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc2}>
                <p>Menu 3</p>
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc2}>
                <p>Menu 4</p>
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc2}>
                <p>Menu 5</p>
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc1}>
                <button className="whiteButton">BUTTON</button>
              </Box>
              <Box mt={3} mr={3} gridColumn={gridColumn.gc1}>
                <button className="blueButton">BUTTON</button>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Flex>
      {showMenuDropdown ? (
        <MenuDropdown />
      ) : (
        ''
      )}
    </div>
  );
}

export default Header;