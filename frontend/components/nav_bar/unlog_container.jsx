import { connect } from 'react-redux';
import { login,logout } from '../../actions/session_actions';
import UnlogNav from './unlog_nav';


const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnlogNav);
