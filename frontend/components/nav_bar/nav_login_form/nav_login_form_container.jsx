import { connect } from 'react-redux';
import { login,logout } from '../../../actions/session_actions';
import NavLoginForm from './nav_login_form';


const mapStateToProps = (state) => {
  return {
    currentUser:state.session.currentUser,
    logged:state.session.currentUser,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch,{logged}) => {
  let action;
  action = (logged ? logout : login);
  return {
    action: (user) => dispatch(action(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLoginForm);
