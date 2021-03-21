import { register } from 'modules/auth/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Col,
  Row,
  Card,
  CardBody,
  Form,
  Input,
  Button,
  Container,
} from 'reactstrap';

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ username, password }));
  };

  return (
    <section className='h-100'>
      <Container className='h-100'>
        <Row className='justify-content-center align-items-center h-75'>
          <Col xs={10} md={6} lg={6} xl={6}>
            <Card className='main-login'>
              <CardBody className='py-5'>
                <h3 className='text-center main-login__title mb-4'>REGISTER</h3>
                <Form onSubmit={handleRegister} className='d-flex flex-column'>
                  <Input
                    value={username}
                    className='main-login--form__input'
                    placeholder='Enter a Nickname'
                    onChange={handleChangeUsername}
                  />
                  <Input
                    type='password'
                    value={password}
                    className='main-login--form__input mt-4'
                    placeholder='Enter password'
                    onChange={handleChangePassword}
                  />
                  <Button
                    type='submit'
                    onClick={handleRegister}
                    className='main-login--form__button'
                  >
                    Register
                  </Button>
                  <a href='/' className='text-center mt-3'>
                    Login
                  </a>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
