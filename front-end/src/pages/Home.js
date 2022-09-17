import React from 'react';
import {
  Box,
  Flex,
  Grid,
} from '@chakra-ui/react';
import { gridColumn } from '../utils/gridcolumn';
import Header from '../components/Header';
import Boddy1 from '../components/Boddy1';
import Boddy2 from '../components/Boddy2';
import Boddy3 from '../components/Boddy3';
import Boddy4 from '../components/Boody4';
import Footer from '../components/Footer';

function Home() {
  return (
    <div clasName="homeInteiro">
      <Box gridColumn={gridColumn.gc12}>
        <Header />
      </Box>
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        minHeight="100vh"
      >
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          gap={'10px'}
          mx={6}
          width="100%"
          height="fit-content"
        >
          <Box gridColumn={gridColumn.gc12}>
            <Boddy1 />
          </Box>
          <Box mt={15} gridColumn={gridColumn.gc12}>
            <Boddy2 />
          </Box>
          <Box gridColumn={gridColumn.gc12}>
            <Boddy3 />
          </Box>
          <Box gridColumn={gridColumn.gc12}>
            <Boddy4 />
          </Box>
        </Grid>
      </Flex>
      <Box gridColumn={gridColumn.gc12}>
        <Footer />
      </Box>
    </div>
  );
}

export default Home;