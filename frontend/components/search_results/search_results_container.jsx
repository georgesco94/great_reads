import { connect } from 'react-redux';
import SearchResults from './search_results';
import {searchBooks} from '../../actions/book_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  debugger
  return (
    {
      books: Object.values(state.entities.books),
      errors: state.errors
    }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchBooks: (offset) => dispatch(searchBooks(offset))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
