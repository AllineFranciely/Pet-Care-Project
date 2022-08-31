import React from 'react';
import './Styles/MenuDropdown.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';

function MenuDropdown() {
  return (
    <div>
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="30vh"
      >
          <Box mt={3} gridColumn={gridColumn.gc12}>
          <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          gap={'10px'}
          mx={6}
          width="100%"
          height="100%"
          maxBlockSize={'200px'}
        >
              <Box mt={3} gridColumn={gridColumn.gc4}>
                <h2 className="dropTitle">METODOLOGIA</h2>
                <hr size="50" width="90%" className="dropLine"></hr>
                <p>Tudo sobre Inbound Marketing</p>
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc4}>
                <h2 className="dropTitle" mb={13} >CURSOS</h2>
                <hr size="50" width="90%" className="dropLine"></hr>
                <p>RD University</p>
                <p>Introdução ao Inbound Marketing</p>
                <p>RD Station Marketing Basic</p>
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc4}>
                <h2 className="dropTitle">FERRAMENTAS</h2>
                <hr size="50" width="90%" className="dropLine"></hr>
                <p>Avalie seu funil de vendas</p>
                <p>Compare suas métricas de Email Marketing</p>
                <p>Calcule o ROI do RD Station Marketing</p>
              </Box>
              </Grid>
          </Box>
      </Flex>
    </div>
  );
}

export default MenuDropdown;