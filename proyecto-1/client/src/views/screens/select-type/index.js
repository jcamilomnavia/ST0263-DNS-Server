import { push } from 'connected-react-router';
import { Col, Row, Card, CardBody, Button, Container } from 'reactstrap';

import { useDispatch } from 'react-redux';
import { logout } from 'modules/auth/actions';

const ListRooms = () => {
  const dispatch = useDispatch();

  const redirectType = (type) => () => {
    dispatch(push(type));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section className='h-100 position-relative'>
      <Button onClick={handleLogout} className='position-absolute main-logout'>
        Logout
      </Button>
      <Container className='h-100'>
        <Row className='justify-content-center align-items-center h-75'>
          <Col xs={10} md={8} lg={6} xl={6}>
            <Card className='main-login'>
              <CardBody className='py-5 text-center'>
                <label>Select the tpye of room you want to interact with</label>
                <Button
                  onClick={redirectType('/room/channel')}
                  className='main-login--form__button text-center'
                >
                  Channel's
                </Button>
                <Button
                  onClick={redirectType('/room/queue')}
                  className='main-login--form__button text-center'
                >
                  Queue's
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ListRooms;
