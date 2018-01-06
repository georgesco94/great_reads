import { connect } from 'react-redux';
import BookShelf from './bookshelf';
import {updateStatus,deleteStatus} from '../../actions/status_actions';
import {fetchShelves,createShelf} from '../../actions/shelf_actions';
import {fetchShelfBooks,fetchUserBooks} from '../../actions/book_actions';
import {fetchAssignments,deleteAssignment} from '../../actions/shelve_assignments_actions';

const mapStateToProps = (state,ownProps) => {
  const books = {};

  Object.values(state.entities.assignments).forEach( assignment => {
    books[assignment.shelf_id] = books[assignment.shelf_id] || [];
    books[assignment.shelf_id].push(state.entities.books[assignment.book_id]);
  });

  return {
    shelves: Object.values(state.entities.shelves),
    currUser: state.session.currentUser,
    books: books,
    assignments:Object.values(state.entities.assignments)
  };
};


const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    updateStatus: (status) => dispatch(updateStatus(status)),
    fetchShelves: (id) => dispatch(fetchShelves(id)),
    fetchShelfBooks: (shelfId) => dispatch(fetchShelfBooks(shelfId)),
    createShelf: (shelf) => dispatch(createShelf(shelf)),
    fetchAssignments: (id) => dispatch(fetchAssignments(id)),
    deleteAssignment: (id) => dispatch(deleteAssignment(id)),
    deleteStatus: (id) => dispatch(deleteStatus(id)),
    fetchUserBooks: (id) => dispatch(fetchUserBooks(id))
  };
};

export default connect(
  mapStateToProps,mapDispatchToProps
)(BookShelf);
