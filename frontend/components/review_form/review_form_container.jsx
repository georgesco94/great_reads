import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {createReview} from '../../actions/review_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return (
    {
      user: state.session.currentUser
    }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
