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
  return (
    <section className='h-100'>
      <Container className='h-100'>
        <Row className='justify-content-center align-items-center h-75'>
          <Col xs={10} md={6} lg={6} xl={6}>
            <Card className='main-login'>
              <CardBody className='py-5'>
                <Form className='d-flex flex-column'>
                  <Input
                    className='main-login--form__input'
                    placeholder='Enter a Nickname'
                  ></Input>
                  <Button className='main-login--form__button'>Login</Button>
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
