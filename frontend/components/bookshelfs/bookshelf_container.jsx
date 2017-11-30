import { connect } from 'react-redux';
import BookShelf from './bookshelf';
import {updateStatus} from '../../actions/status_actions';
import {fetchShelves} from '../../actions/shelf_actions';
import {fetchShelfBooks} from '../../actions/book_actions';
import {fetchAssignments} from '../../actions/shelve_assignments_actions';

const mapStateToProps = (state,ownProps) => {
  
  const books = {};
  Object.values(state.entities.shelves).forEach( (shelf) => {
    
    books[shelf.id] = [];
    shelf.bookIds.map( (bookId) => {
      books[shelf.id].push(state.entities.books[bookId]);
    });
  });
  return {
    shelves: Object.values(state.entities.shelves),
    currUser: state.session.currentUser,
    books: books
  };
};


const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    updateStatus: (status) => dispatch(updateStatus(status)),
    fetchShelves: (id) => dispatch(fetchShelves(id)),
    fetchShelfBooks: (shelfId) => dispatch(fetchShelfBooks(shelfId)),
    fetchAssignments: (id) => dispatch(fetchAssignments(id))
  };
};

export default connect(
  mapStateToProps,mapDispatchToProps
)(BookShelf);
