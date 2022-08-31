import React from 'react';
import './Styles/Boddy1.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import Formulario from './Formulario';

function Boddy1() {
  return (
    <div boddy1Inteiro>
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="30vh"
      >
        <Box className="boddy1" mt={3} gridColumn={gridColumn.gc12}>
          <Grid
            gridTemplateColumns="repeat(12, 1fr)"
            gap={'10px'}
            mx={6}
            width="100%"
            height="100%"
            maxBlockSize={'200px'}
          >
            <Box mt={3} gridColumn={gridColumn.gc6}>
              <h1 className="boddy1Title"><b>Proporcione mais <font color="#07E5EB">amor e cuidado</font> para seu pet</b></h1>
              <p className="boddy1Text">O Pet Care Project oferece todo o cuidado, amor e conforto que o seu pet precisa</p>
            </Box>
            <Box mt={3} gridColumn={gridColumn.gc6}>
              <Formulario />
            </Box>
            <Box className="boddy2" mt={3} gridColumn={gridColumn.gc6}>
              <h1 className="boddy2Title"><b>Daremos sempre o nosso melhor pelo seu pet!</b></h1>
              <p className="boddy2Text">Oferecemos serviços de Banho e Tosa para seu amigo ficar sempre lindão.</p>
              <p className="boddy2Text">Temos produtos de petshop que vão desde as melhores rações até os brinquedos mais divertidos.</p>
              <p className="boddy2Text">Contamos com os melhores veterinários para cuidar da saúde do seu companheiro.</p>
              <p className="boddy2Text2"><b>E ainda temos o Hotel Pet, para cuidar com muito amor e carinho do seu amigo durante suas viagens!</b></p>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </div>
  );
}

export default Boddy1;