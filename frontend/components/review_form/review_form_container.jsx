import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {updateReview,createReview,fetchReviews} from '../../actions/review_actions';
import {fetchBook} from '../../actions/book_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state,ownProps) => {
  debugger
  let rev = "";
  state.session.currentUser.reviewIds.forEach((revId) => {

    if (state.entities.reviews[revId] &&
    state.entities.reviews[revId].book_id === parseInt(ownProps.match.params.bookId)
    ){

      rev = state.entities.reviews[revId];
    }
  });

  return (
    {
      user: state.session.currentUser,
      review: rev,
      book: state.entities.books[ownProps.match.params.bookId]
    }
  );
};

const mapDispatchToProps = (dispatch,ownProps) => {
  debugger
  let action = ownProps.match.path === "/review/:bookId/edit" ? updateReview : createReview;
  return {
    action: (review) => dispatch(action(review)),
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchReviews: (id) => dispatch(fetchReviews(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
