import React from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { gridColumn } from '../utils/gridcolumn';
import './Styles/Boddy1.css';
import Formulario from './Formulario';

function Boddy1() {
  return (
    <div boddy1Inteiro>
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
          <Box gridColumn={gridColumn.gc6} >
            <h1 className="boddy1Title"><b>Proporcione mais <font color="#ce1998">amor e cuidado</font> para seu pet</b></h1>
            <p className="boddy1Text">O Pet Care Project oferece todo o cuidado, amor e conforto que o seu pet precisa.</p>
          </Box>
          <Box className="boddy2" gridColumn={gridColumn.gc6}>
            <h1 className="boddy2Title"><b>Daremos sempre o nosso melhor pelo seu pet!</b></h1>
            <p className="boddy2Text">Oferecemos serviços de Banho e Tosa para seu amigo ficar sempre lindão.</p>
            <p className="boddy2Text">Temos produtos de petshop que vão desde as melhores rações até os brinquedos mais divertidos.</p>
            <p className="boddy2Text">Contamos com os melhores veterinários para cuidar da saúde do seu companheiro.</p>
            <p className="boddy2Text2"><b>E ainda temos o Hotel Pet para cuidar do seu amigo durante suas viagens!</b></p>
          </Box>
          <Box mt={10} ml={20} gridColumn={gridColumn.gc6} >
            <Formulario />
          </Box>
        </Grid>
      </Flex>
    </div>
  );
}

export default Boddy1;