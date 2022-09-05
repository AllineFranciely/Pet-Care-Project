import React from 'react';
import './Styles/Boddy2.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'

function Boddy2() {
  return (
    <div boddy1Inteiro>
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
          maxBlockSize={'200px'}
        >
          <Box className="boddyPart2" gridColumn={gridColumn.gc12}>
            <Grid
              gridTemplateColumns="repeat(12, 1fr)"
              gap={'10px'}
              mx={6}
              width="100%"
              height="100%"
              maxBlockSize={'200px'}
            >
              <Box className="IMG1" gridColumn={gridColumn.gc6}>

              </Box>
            </Grid>
            <Box className="textoBoddyPart2" gridColumn={gridColumn.gc6}>
              <h1 className="title1Part2"><b>Conheça alguns dos nossos clientes</b></h1>
              <h1 className="title1Part2"><b>mas cuidado, é muuuuuuita fofura</b></h1>
              <p className="p1Part2" >SSSSSS</p>
              <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>SSSSSS</b> SSSSSS</p>
              <p className="linhaExtra">SSSSSS</p>
              <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>SSSSSS</b>SSSSSS</p>
              <p className="linhaExtra">SSSSSS</p>
              <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>SSSSSS</b>para apoiar  na</p>
              <p className="linhaExtra">SSSSSS</p>
              <p className="linhaExtra">SSSSSS</p>
              <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>SSSSSS</b>SSSSSS</p>
              <p className="linhaExtra">SSSSSS <b>SSSSSS</b> SSSSSS</p>
              <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>SSSSSS</b>SSSSSS <font color="#07E5EB">SSSSSS</font> SSSSSS</p>
              <p className="linhaExtra">SSSSSS</p>
            </Box>
          </Box>
        </Grid>
      </Flex>
    </div>
  );
}

export default Boddy2;