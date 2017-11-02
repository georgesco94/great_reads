import { connect } from 'react-redux';
import BookShow from './book_show';
import {fetchBook} from '../../actions/book_actions';
import {fetchUsers} from '../../actions/user_actions';
import {fetchReviews} from '../../actions/review_actions';

const mapStateToProps = (state,ownProps) => {
  let booki = state.entities.books[ownProps.match.params.bookId] || {reviewIds:[]};
  return (
    {
      book: booki,
      reviews: booki.reviewIds.map(
        (reviewId)=>
      {
        return state.entities.reviews[reviewId];
      }),
      users: state.entities.users,
      currUser: state.session.currentUser,
      errors: state.errors
    }
  );
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchReviews: () => dispatch(fetchBook())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShow);
