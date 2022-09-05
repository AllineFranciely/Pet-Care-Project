import React from 'react';
import Header from '../components/Header';
import Boddy1 from '../components/Boddy1';
import Boddy2 from '../components/Boddy2';
import Boddy3 from '../components/Boddy3';
import Boddy4 from '../components/Boody4';
import Footer from '../components/Footer';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';

function Home() {
  return (
    <div>
      <Flex
        id="content"
        justifyContent="center"
        minHeight="100vh"
      >
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          width="100%"
          height="fit-content"
        >
          <Box gridColumn={gridColumn.gc12}>
            <Header />
          </Box>
          <Box gridColumn={gridColumn.gc12}>
            <Boddy1 />
          </Box>
          <Box gridColumn={gridColumn.gc12}>
            <Boddy2 />
          </Box>
          <Box gridColumn={gridColumn.gc12}>
            <Boddy3 />
          </Box>
          <Box gridColumn={gridColumn.gc12}>
            <Boddy4 />
          </Box>
          <Box gridColumn={gridColumn.gc12}>
            <Footer />
          </Box>
        </Grid>
      </Flex>
    </div>
  );
}

export default Home;