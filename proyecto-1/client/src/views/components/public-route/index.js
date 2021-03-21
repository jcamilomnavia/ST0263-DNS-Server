import { isLoggedIn } from 'modules/auth/selectors';
import { connect } from 'react-redux';
import PrivateRoute from './public-route';

const mapStateToProps = (state) => ({
  isConnected: isLoggedIn(state),
});

export default connect(mapStateToProps)(PrivateRoute);
