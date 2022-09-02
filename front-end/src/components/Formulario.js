import React, { useState, useEffect } from 'react';
import './Styles/Formulario.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import InputSelect from '../components/InputSelect';
import InputMask from "react-input-mask";
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
          Password: '',
          PasswordConfirm: '',
        },

    validationSchema: yup.object({
      Nome: yup.string().required('O campo nome é obrigatório.').nullable(),
      NomePet: yup.string().required('O campo nome é obrigatório.').nullable(),
      Email: yup.string().email('Entre com um email válido').required('O campo email é obrigatório.').nullable(),
      Phone: yup.number().typeError('Digite apenas números').required('O campo telefone é obrigatório').nullable(),
      Pet: yup.string().required('O campo cargo de ocupação é obrigatório').nullable(),
      Password: yup.string().required('O campo de senha é obrigatótio')
        .min(6, 'A senha deve ter pelo menos 56 caracteres').max(10, 'A senha deve possuir no máximo 10 caracteres'),
      PasswordConfirm: yup.string().required('O campo de confirmação de senha é obrigatório')
        .oneOf([yup.ref('Password')], 'As senhas devems er iguais').nullable(),
      Site: yup.string().url('Entre com um endereço válido').nullable()
    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="formInteiro">

      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="fit-content"
      >
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          gap={'10px'}
          width="100%"
          height="100%"
          maxBlockSize={'200px'}
        >
          <form className="boddyForm" onSubmit={formik.handleSubmit}>
            <Box mt={2} mb={4} gridColumn={gridColumn.gc4}>
              <h1 className="titleForm"><b>Cadastre-se para ficar por dentro das novidades</b></h1>
              <p className="boddy1P">Prometemos não enviar muitos emails 😉</p>
              <hr size="50" width="100%" className="dropLine"></hr>
            </Box>
            <Box gridColumn={gridColumn.gc4}>
              <Box mt={3} gridColumn={gridColumn.gc6}>
                <p><b>Diga, qual seu nome?</b></p>
                <Input
                  id="Nome"
                  name="Nome"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Nome}
                />
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc6}>
                <p><b>E o nome do seu Pet?</b></p>
                <Input
                  id="NomePet"
                  name="NomePet"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.NomePet}
                />
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc6}>
                <p><b>Seu email</b></p>
                <Input
                  id="Email"
                  name="Email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Email}
                />
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc6}>
                <p><b>Seu telefone</b></p>
                <InputMask
                  className="inputMask"
                  id="Phone"
                  name="Phone"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Phone}
                />
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc6}>
                <p><b>Qual a espéciedo seu pet</b></p>
                <InputSelect
                  options={optionsPet}
                  id="Pet"
                  name="Pet"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Pet}
                />
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc6}>
                <p><b>Crie uma senha</b></p>
                <Input
                  type="password"
                  id="Password"
                  name="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Password}
                />
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc6}>
                <p><b>Confirme sua senha</b></p>
                <Input
                  type="password"
                  id="PasswordConfirm"
                  name="PasswordConfirm"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.PasswordConfirm}
                />
              </Box>
              <Box ml={5} mt={3} gridColumn={gridColumn.gc6}>
                <ul>
                  <li>*Você pode alterar suas permissões de comunicação a qualquer tempo.
                  </li>
                </ul>
              </Box>
              <Box ml={5} mt={3} gridColumn={gridColumn.gc6}>
                <button className="buttonCreate">
                  CRIAR MINHA CONTA
                </button>
              </Box>
            </Box>
          </form>
        </Grid>
      </Flex>
    </div>
  );
}

export default Formulario;