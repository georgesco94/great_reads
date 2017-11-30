import { connect } from 'react-redux';
import BookIndex from './book_index';
import {fetchBooks} from '../../actions/book_actions';
import {fetchStatuses} from '../../actions/status_actions';
import {fetchShelves} from '../../actions/shelf_actions';
import {fetchAssignments} from '../../actions/shelve_assignments_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  debugger
  return (
    {
      books: Object.values(state.entities.books),
      currUser: state.session.currentUser,
      statuses: state.entities.statuses,
      errors: state.errors
    }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: (offset) => dispatch(fetchBooks(offset)),
    fetchStatuses: (id) => dispatch(fetchStatuses(id)),
    fetchShelves: (id) => dispatch(fetchShelves(id)),
    fetchAssignments: (id) => dispatch(fetchAssignments(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIndex);
