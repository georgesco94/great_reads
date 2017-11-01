import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {createReview} from '../../actions/review_actions';
import {fetchBook} from '../../actions/book_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state,ownProps) => {
  debugger
  return (
    {
      user: state.session.currentUser,
      book: state.entities.books[ownProps.match.params.bookId]
    }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    fetchBook: (id) => dispatch(fetchBook(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
