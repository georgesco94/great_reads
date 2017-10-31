import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DiscoverBox from './discover_box';
import {searchBooks,fetchBooks} from '../../actions/book_actions';
const mapStateToProps = (state, ownProps) => {
  return ({
    books: Object.values(state.entities.books)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return (
    {
      fetchBooks: (offset) => dispatch(fetchBooks(offset)),
      searchBooks: (queryString) => dispatch(searchBooks(queryString))
    }
  );
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverBox));
