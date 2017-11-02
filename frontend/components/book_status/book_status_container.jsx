import { connect } from 'react-redux';
import BookStatus from './book_status';
import {createStatus} from '../../actions/status_actions';


const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    createStatus: (status) => dispatch(createStatus(status))
  };
};

export default connect(
  mapDispatchToProps
)(BookStatus);
