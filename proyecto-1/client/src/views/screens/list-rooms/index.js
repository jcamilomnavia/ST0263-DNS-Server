import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  Col,
  Row,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Container,
} from 'reactstrap';
import { getQueues } from 'modules/queue/selectors';
import { createQueue, joinQueue } from 'modules/queue/actions';

const ListRooms = () => {
  const dispatch = useDispatch();

  const { type } = useParams();
  const queueItems = useSelector(getQueues);

  const [room, setRoom] = useState(null);
  const [newRoom, setNewRoom] = useState(null);

  const handleChangeNewRoom = (e) => {
    setNewRoom(e.target.value);
  };

  const handleChangeRoom = (e) => {
    setRoom(e.target.value);
  };

  const goToRoom = () => {
    if (type === 'queue') {
      dispatch(joinQueue(room));
    }
  };

  const createRoom = () => {
    if (type === 'queue') {
      dispatch(createQueue(newRoom));
    }
  };

  const optionsItems = () => {
    if (type === 'queue') {
      return queueItems.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ));
    }
  };

  return (
    <section className='h-100'>
      <Container className='h-100'>
        <Row className='justify-content-center align-items-center h-75'>
          <Col xs={10} md={8} lg={6} xl={6}>
            <Card className='main-login'>
              <CardBody className='py-5'>
                <Col className='d-flex flex-column'>
                  <label>Create a {type}</label>
                  <InputGroup>
                    <Input
                      onChange={handleChangeNewRoom}
                      className='main-login--form__input'
                    />
                    <InputGroupAddon addonType='append'>
                      <Button
                        onClick={createRoom}
                        className='main-login--form__button-append'
                      >
                        Create!
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>

                  <hr className='w-75 my-4' />
                  <label>Select an existing {type}</label>
                  <Input
                    type='select'
                    defaultValue=''
                    className='main-login--form__input'
                    onChange={handleChangeRoom}
                  >
                    <option value='' disabled>
                      Select
                    </option>
                    {optionsItems()}
                  </Input>
                  <Button
                    onClick={goToRoom}
                    className='main-login--form__button text-center'
                  >
                    Join now!
                  </Button>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ListRooms;
