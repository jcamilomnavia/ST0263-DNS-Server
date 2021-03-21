import { connect } from 'react-redux';
import { isLoggedIn } from 'modules/auth/selectors';
import PrivateRoute from './private-route';

const mapStateToProps = (state) => ({
  isConnected: isLoggedIn(state),
});

export default connect(mapStateToProps)(PrivateRoute);
