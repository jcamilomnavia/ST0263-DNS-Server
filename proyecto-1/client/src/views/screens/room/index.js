import { useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { getQueueMessages } from 'modules/queue/selectors';
import {
  pushMessage as pushQueueMessage,
  pullMessage as pullQueueMessage,
} from 'modules/queue/actions';
import { getChannelMessages } from 'modules/channels/selectors';
import {
  pullMessageChannel,
  pushMessageChannel,
} from 'modules/channels/actions';

const Room = () => {
  const { type, id } = useParams();
  const dispatch = useDispatch();

  const queueMessages = useSelector(getQueueMessages);
  const channelMessages = useSelector(getChannelMessages);

  const messages = type === 'queue' ? queueMessages : channelMessages;

  const [message, setNewMessage] = useState('');
  const handleMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (type === 'queue') {
      dispatch(
        pushQueueMessage({
          message: { content: message, date: new Date() },
          id,
        })
      );
    }
    if (type === 'channel') {
      dispatch(
        pushMessageChannel({
          message: { content: message, date: new Date() },
          id,
        })
      );
    }
    setNewMessage('');
  };

  const receiveMessage = () => {
    if (type === 'queue') {
      dispatch(pullQueueMessage(id));
    }
    if (type === 'channel') {
      dispatch(pullMessageChannel(id));
    }
  };

  console.log(messages);

  return (
    <section className='h-100'>
      <Container className='h-100'>
        <Row className='justify-content-center align-items-center h-100'>
          <Col
            xs={12}
            md={10}
            lg={10}
            xl={10}
            className='h-100 d-flex flex-column justify-content-center'
          >
            <Card className='main-chat h-75'>
              <CardBody className='py-0 px-0'>
                <section className='main-chat--container d-flex flex-column'>
                  <Row className='main-chat--container__room'>
                    <Col xs={12}>
                      {type} | {id}
                      <Button
                        onClick={receiveMessage}
                        className='float-right submit py-0'
                      >
                        <FontAwesomeIcon icon='sync-alt' color='#589fcf' />
                      </Button>
                    </Col>
                  </Row>
                  <Row className='align-self-end align-content-end w-100 mx-0 overflow-scroll flex-grow-1'>
                    {messages.map((item) => (
                      <Col xs={12} className='main-chat--container__message me'>
                        <div className='main-chat--container__message--inner me'>
                          <h6 className='sender'>
                            {/* {item.sender ? item.sender : 'Queue'} */}
                          </h6>
                          <p className='message'>{item.content}</p>
                          <span className='time'>
                            {item.date
                              ? format(
                                  new Date(item.date),
                                  'dd-MMM-yyy hh:mm:ss a'
                                )
                              : null}
                          </span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <Row className='main-chat--container__form-container w-100 mx-0 overflow-scroll position-fixed'>
                    <Col xs={12} className='main-chat--container__form px-0'>
                      <Form onSubmit={sendMessage}>
                        <Input
                          className='input'
                          placeholder='Enter your message here'
                          value={message}
                          onChange={handleMessage}
                        />
                        <Button
                          type='submit'
                          className='submit'
                          onClick={sendMessage}
                        >
                          <FontAwesomeIcon icon='paper-plane' color='#589fcf' />
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </section>
                <Form className='d-flex flex-column'></Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Room;
