import { connect } from 'react-redux';
import BookShow from './book_show';
import {fetchBook} from '../../actions/book_actions';
import {fetchUsers} from '../../actions/user_actions';
import {fetchReviews} from '../../actions/review_actions';
import {createStatus,fetchStatuses,updateStatus} from '../../actions/status_actions';

const mapStateToProps = (state,ownProps) => {
  debugger
  let booki = state.entities.books[ownProps.match.params.bookId] || {reviewIds:[]};
  let status = {status:""};
  debugger
  if(state.session.currentUser){
    Object.values(state.entities.statuses).forEach((stat) => {
      if(stat.book_id === booki.id){
        status=stat;
      }
    });
  }
  let reviews = [];
  Object.values(state.entities.reviews).map(review => {
    if( review.book_id === booki.id){
      reviews.push(review);
    }
  });
  return (
    {
      book: booki,
      reviews: reviews,
      users: state.entities.users,
      currUser: state.session.currentUser,
      status: status,
      errors: state.errors
    }
  );
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchReviews: (id) => dispatch(fetchReviews(id)),
    fetchStatuses: (id) => dispatch(fetchStatuses(id)),
    createStatus: (status) => dispatch(createStatus(status)),
    updateStatus: (status) => dispatch(updateStatus(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShow);
