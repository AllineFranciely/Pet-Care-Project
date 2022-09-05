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
      <Flex>
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          width="100%"
        >
          <Box gridColumn={gridColumn.gc12}>
            <Grid
              gridTemplateColumns="repeat(12, 1fr)"
            >
              <Box gridColumn={gridColumn.gc2}>
                <img className="logo" src={Logo} alt="logo" />
              </Box>
              <Box className="menus" gridColumn={gridColumn.gc6}>
                <Grid
                  gridTemplateColumns="repeat(12, 1fr)"
                >
                  <p>Menu 1</p>
                  <p>
                    Menu 2
                    <button
                      onClick={() => setShowMenuDropdown(!showMenuDropdown)}>
                      <img className="drop" src={Drop} alt="Menu Drop"></img>
                    </button>
                  </p>
                  <p>Menu 3</p>
                  <p>Menu 4</p>
                  <p>Menu 5</p>
                </Grid>
              </Box>
              <Box gridColumn={gridColumn.gc4}>
              <Grid
                  gridTemplateColumns="repeat(12, 1fr)"
                >
                <button className="whiteButton">BUTTON</button>
                <button className="pinkButton">BUTTON</button>
                </Grid>
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