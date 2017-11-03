import { connect } from 'react-redux';
import BookShow from './book_show';
import {fetchBook} from '../../actions/book_actions';
import {fetchUsers} from '../../actions/user_actions';
import {fetchReviews} from '../../actions/review_actions';
import {createStatus,fetchStatuses,updateStatus} from '../../actions/status_actions';

const mapStateToProps = (state,ownProps) => {

  let booki = state.entities.books[ownProps.match.params.bookId] || {reviewIds:[]};
  let status = {status:""};
  if(state.session.currentUser){
    state.session.currentUser.statusIds.forEach((statId) => {
      debugger
      if(state.entities.statuses[statId] && booki.id === state.entities.statuses[statId].book_id){
        status=state.entities.statuses[statId];
      }
    });
  }
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
      status: status,
      errors: state.errors
    }
  );
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchStatuses: () => dispatch(fetchStatuses()),
    createStatus: (status) => dispatch(createStatus(status)),
    updateStatus: (status) => dispatch(updateStatus(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShow);
