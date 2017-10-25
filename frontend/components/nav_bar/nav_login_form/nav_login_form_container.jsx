import { connect } from 'react-redux';
import { login } from '../../../actions/session_actions';
import NavLoginForm from './nav_login_form';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLoginForm);
