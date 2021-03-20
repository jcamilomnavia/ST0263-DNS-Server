import { connect } from 'react-redux';
import PrivateRoute from './public-route';

const mapStateToProps = (state) => ({
  isConnected: true,
});

export default connect(mapStateToProps)(PrivateRoute);
