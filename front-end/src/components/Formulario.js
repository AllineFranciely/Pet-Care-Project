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

  const optionsCargo = [
    'Sócio(a) / CEO / Proprietário(a)',
    'Diretor(a) de Vendas',
    'Diretor(a) de Marketing',
    'Diretor(a) Outras Áreas',
    'Gerente de Marketing',
    'Gerente de Vendas',
    'Coordenador(a)/Supervisor(a) de Marketing',
    'Coordenador(a)/Supervisor(a) de Vendas',
    'Analista/Assistente de Marketing',
    'Analista/Assistente de Vendas',
    'Vendedor(a) / Executivo(a) de Contas',
    'Estudante',
    'Outros Cargos'
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
          Name: '',
          Email: '',
          Phone: '',
          Occupation: '',
          Password: '',
          PasswordConfirm: '',
          HasSite: false,
          Site: '',
        },

    validationSchema: yup.object({
      Name: yup.string().required('O campo nome é obrigatório.'),
      Email: yup.string().email('Entre com um email válido').required('O campo email é obrigatório.'),
      Phone: yup.number().required('O campo telefone é obrigatório'),
      Occupation: yup.string().required('O campo cargo de ocupação é obrigatório'),
      Password: yup.string().required('O campo de senha é obrigatótio')
        .min(6, 'A senha deve ter pelo menos 56 caracteres').max(10, 'A senha deve possuir no máximo 10 caracteres'),
      PasswordConfirm: yup.string().required('O campo de confirmação de senha é obrigatório')
        .oneOf([yup.ref('Password')], 'As senhas devems er iguais'),
      Site: yup.string().url('Entre com um endereço válido')
    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="formInteiro">
      <Box mt={2} mb={4} gridColumn={gridColumn.gc4}>
        <h1 className="titleForm"><b>SSSSSSSSSSSSSSSS</b></h1>
        <p className="boddy1P">SSSSSSSSSSSSSSSS 😉</p>
        <hr size="50" width="100%" className="dropLine"></hr>
      </Box>
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="100vh"
      >
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          gap={'10px'}
          width="100%"
          height="100%"
          maxBlockSize={'200px'}
        >
          <form className="boddyForm" onSubmit={formik.handleSubmit}>
            <Box gridColumn={gridColumn.gc4}>
              <Box mt={3} gridColumn={gridColumn.gc6}>
                <p><b>Diga, qual seu nome?</b></p>
                <Input
                  id="Name"
                  name="Name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Name}
                />
              </Box>
              <Box mt={3} gridColumn={gridColumn.gc6}>
                <p><b>Seu email de trabalho</b></p>
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
                  mask="(99)9999[9]-9999"
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
                <p><b>Seu cargo de ocupação</b></p>
                <InputSelect
                  options={optionsCargo}
                  id="Occupation"
                  name="Occupatio"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Occupatio}
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
              <Box mt={3} gridColumn={gridColumn.gc6}>
                <p><b>Qual o site da sua empresa?</b></p>
                <Input
                  id="Site"
                  name="Site"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Site}
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
                  <a
                    href="ssssssssss"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CRIAR MINHA CONTA
                  </a>
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