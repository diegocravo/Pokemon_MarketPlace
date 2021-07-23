import { Form, Button } from 'react-bootstrap';
import React from 'react';
import Container from '../../components/Container';
import {useFormik} from 'formik';
// import { Container } from './styles';


function Login() {
  const formik = useFormik({
    initialValues:{
      login:"",
      password:"",
    },
    onsubmit: values => {
      
    }
  })
  return (

   <Container title="Login" size="sm">
     <Form  onSubmit={formik.handleSubmit}>
       <Form.Group className="mb-5">
       <Form.Label>Login</Form.Label>
      <Form.Control
        id="login"
        name="login"
        placeholder="Digite seu email"
      ></Form.Control>
      </Form.Group>
     </Form>  
     <br></br>   
     <Form>
     <Form.Group className="mb-5">
       <Form.Label>Senha</Form.Label>
      <Form.Control
        id="password"
        name="password"
        type="password"
        placeholder="Digite sua Senha"
      ></Form.Control>     
        <Button variant="primary" type="submit">Entrar</Button>
        <Button variant="primary" type="submit">Cadastrar-se</Button>
      </Form.Group>
      
      <Form>
        <Form.Group>
    
        </Form.Group>
      </Form>
     </Form>
   </Container>

  );
}

export default Login;