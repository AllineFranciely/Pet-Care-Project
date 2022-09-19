import React, { useState, useEffect } from 'react';
import './Styles/Formulario.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import InputSelect from '../components/InputSelect';
import { useFormik } from 'formik';
import * as yup from "yup";
import api from '../services/api';

function Formulario() {

  const optionsPet = [
    'Selecione',
    'Cachorro',
    'Gato',
    'Hamster',
    'Ave',
    'Outros'
  ];
  const [user, setUser] = useState({});

  useEffect(() => {
    async function GetUser() {
      let res = await api.post(formik);
      let data = res.data;
      console.log(data);
      setUser(data);
    }
    GetUser();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues:
      Object.keys(user).length > 0
        ? user
        : {
          Nome: '',
          Nomepet: '',
          Email: '',
          Phone: '',
          Pet: '',
        },

    validationSchema: yup.object({
      Nome: yup.string().required('O campo nome é obrigatório.').nullable(),
      NomePet: yup.string().required('O campo nome do pet é obrigatório.').nullable(),
      Email: yup.string().email('Entre com um email válido').required('O campo email é obrigatório.').nullable(),
      Phone: yup.number().typeError('Digite apenas números').required('O campo telefone é obrigatório').nullable(),
    }),

    onSubmit: values => {
      alert(JSON.stringify('Dados enviados com sucesso'));
    },
  });

  return (
    <div className="formInteiro">
      <form className="boddyForm" onSubmit={formik.handleSubmit}>
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
            <Box gridColumn={gridColumn.gc12}>
              <Box mt={2} mb={4} gridColumn={gridColumn.gc4}>
                <h1 className="titleForm"><b>Cadastre-se para ficar por dentro das novidades</b></h1>
                <p className="boddy1P">Prometemos não enviar muitos emails 😉</p>
                <hr size="50" width="100%" className="dropLine"></hr>
              </Box>
              <Box gridColumn={gridColumn.gc4}>
                <Box p={3} gridColumn={gridColumn.gc6}>
                  <p><b>Diga, qual seu nome?</b></p>
                  <Input
                    id="Nome"
                    name="Nome"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Nome}
                  />
                  {formik.touched.Nome && formik.errors.Nome ? (
                    <div>{formik.errors.Nome}</div>
                  ) : null}
                </Box>
                <Box p={3} gridColumn={gridColumn.gc6}>
                  <p><b>E o nome do seu Pet?</b></p>
                  <Input
                    id="NomePet"
                    name="NomePet"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.NomePet}
                  />
                  {formik.touched.NomePet && formik.errors.NomePet ? (
                    <div>{formik.errors.NomePet}</div>
                  ) : null}
                </Box>
                <Box p={3} gridColumn={gridColumn.gc6}>
                  <p><b>Seu email</b></p>
                  <Input
                    id="Email"
                    name="Email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Email}
                  />
                  {formik.touched.Email && formik.errors.Email ? (
                    <div>{formik.errors.Email}</div>
                  ) : null}
                </Box>
                <Box p={3} gridColumn={gridColumn.gc6}>
                  <p><b>Seu telefone</b></p>
                  <Input
                    id="Phone"
                    name="Phone"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Phone}
                  />
                  {formik.touched.Phone && formik.errors.Phone ? (
                    <div>{formik.errors.Phone}</div>
                  ) : null}
                </Box>
                <Box p={3} gridColumn={gridColumn.gc6}>
                  <p><b>Qual a espécie do seu pet</b></p>
                  <InputSelect
                    options={optionsPet}
                    id="Pet"
                    name="Pet"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Pet}
                  />
                  {formik.touched.Pet && formik.errors.Pet ? (
                    <div>{formik.errors.Pet}</div>
                  ) : null}
                </Box>
                <Box ml={8} mt={3} gridColumn={gridColumn.gc6}>
                  <ul>
                    <li>*Você pode alterar suas permissões de comunicação a qualquer tempo.
                    </li>
                  </ul>
                </Box>
                <Box ml={5} mt={3} gridColumn={gridColumn.gc6}>
                  <button className="buttonCreate" type="submit">
                    ENVIAR
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Flex>
      </form>
    </div >
  );
}

export default Formulario;