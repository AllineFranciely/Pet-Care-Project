import React from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { gridColumn } from '../utils/gridcolumn';
import './Styles/Boddy2.css';
import { CheckIcon } from '@chakra-ui/icons'
import Cat from '../images/cat.jpg';

function Boddy2() {
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
          width="100%"
          height="fit-content"
        >
          <Box mt={100}  p={4} gridColumn={gridColumn.gc6} className="searchbuttons">
            <img src={ Cat } alt="cat" />
          </Box>
          <Box mt={250} gridColumn={gridColumn.gc6} className="searchbuttons">
            <h1 className="title1Part2"><b>Aqui o seu pet tem</b></h1>
            <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>Produtos de qualidade</b></p>
            <p className="linhaExtra">Só utilizamos produtos confiáveis para segurança do seu amigo</p>
            <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>Pet táxi</b></p>
            <p className="linhaExtra">Buscamos e entregamos seu amigo com conforto e segurança</p>
            <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>Água quentinha e secagem anti bacteriana</b></p>
            <p className="linhaExtra">Seu pet não passa frio</p>
            <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>"Quarto" confortável</b></p>
            <p className="linhaExtra">Seu pet tem conforto e segurança caso precise se instalar por algus dias em nosso hotel</p>
            <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>Variedade de produtos</b></p>
            <p className="linhaExtra">Contamos com um estoque diversificado de brinquedos, petiscos, roupas, ração e tudo que seu amigo precisa</p>
          </Box>
        </Grid>
      </Flex>
    </div >
  );
}

export default Boddy2;