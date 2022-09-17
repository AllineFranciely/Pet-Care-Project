import React from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { gridColumn } from '../utils/gridcolumn';
import './Styles/Boddy3.css';
import Vetor1 from '../images/vetor1.jpeg';
import Vetor2 from '../images/vetor2.jpeg';
import Vetor3 from '../images/vetor3.jpeg';
import Vetor4 from '../images/vetor4.jpeg';
import Vetor5 from '../images/vetor5.jpeg';
import Vetor6 from '../images/vetor6.jpeg';

function Boddy3() {

  return (
    <div boddy3Inteiro>
      <h1 className="titlePart3"><b>Conheça a nossa equipe</b></h1>
      <h1 className="subTitlePart3"><b>Todos os profissionais são capacitados e apaixonados por pets</b></h1>
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
          <Box p={4} gridColumn={gridColumn.gc12} >
            <Grid
              gridTemplateColumns="repeat(12, 1fr)"
              gap={'10px'}
              width="100%"
              height="fit-content"
            >
              <Box mt={3} mb={5} ml={5} mr={7} p={4} gridColumn={gridColumn.gc4} className="Card" >
                <img className="iconPart3" src={Vetor1} alt="Vetor1"></img>
                <h1 className="Title2BoddyPart3"><b>Paulo</b></h1>
                <p className="pBoddyPart3">Atendente</p>
              </Box>
              <Box mt={3} mb={5}ml={5} mr={7} p={4} gridColumn={gridColumn.gc4} className="Card">
                <img className="iconPart3" src={Vetor2} alt="Vetor2"></img>
                <h1 className="Title2BoddyPart3"><b>Gabriel</b></h1>
                <p className="pBoddyPart3">Motorista</p>
              </Box>
              <Box mt={3} mb={5} ml={5} mr={7} p={4} gridColumn={gridColumn.gc4} className="Card">
                <img className="iconPart3" src={Vetor3} alt="Vetor3"></img>
                <h1 className="Title2BoddyPart3"><b>Michelle</b></h1>
                <p className="pBoddyPart3">Esteticista</p>
              </Box>
              <Box mt={3} mb={5} ml={5} mr={7} p={4} gridColumn={gridColumn.gc4} className="Card">
                <img className="iconPart3" src={Vetor4} alt="Vetor4"></img>
                <h1 className="Title2BoddyPart3"><b>Sabrina</b></h1>
                <p className="pBoddyPart3">Esteticista</p>
              </Box>
              <Box mt={3} mb={5} ml={5} mr={7} p={4} gridColumn={gridColumn.gc4} className="Card">
                <img className="iconPart3" src={Vetor5} alt="Vetor5"></img>
                <h1 className="Title2BoddyPart3"><b>Gabiela</b></h1>
                <p className="pBoddyPart3">Gerente do Pet Hotel</p>
              </Box>
              <Box mt={3} mb={5} ml={5} mr={7} p={4} gridColumn={gridColumn.gc4} className="Card">
                <img className="iconPart3" src={Vetor6} alt="Vetor6"></img>
                <h1 className="Title2BoddyPart3"><b>Alice</b></h1>
                <p className="pBoddyPart3">Veterinária</p>
              </Box>
              <h1 className="title3BoddyPart3"><b>SSSSSS</b></h1>
              <h1 className="title3BoddyPart33"><b>SSSSSS</b></h1>
              <p className="texto3BoddyPart3">SSSSSS</p>
              <p className="texto3BoddyPart3">SSSSSS</p>
            </Grid>
          </Box>
        </Grid>
      </Flex>
    </div>
  );
}

export default Boddy3;