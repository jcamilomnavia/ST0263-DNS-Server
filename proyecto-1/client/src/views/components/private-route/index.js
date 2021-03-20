import { connect } from 'react-redux';
// import { isChatConnected } from 'modules/ws-chat/selectors';
import PrivateRoute from './private-route';

const mapStateToProps = (state) => ({
  isConnected: true,
});

export default connect(mapStateToProps)(PrivateRoute);
