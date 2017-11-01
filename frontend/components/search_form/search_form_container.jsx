import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './search_form';
import {searchBooks} from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    books: Object.values(state.entities.books)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return (
    {
      searchBooks: (queryString) => dispatch(searchBooks(queryString))
    }
  );
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm));
