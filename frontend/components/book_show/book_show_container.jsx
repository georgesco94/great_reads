import { connect } from 'react-redux';
import BookShow from './book_show';
import {fetchBooks} from '../../actions/book_actions';

const mapStateToProps = (state,ownProps) => {
  debugger
  return (
    {
      book: state.entities.books[ownProps.match.params.bookId],
      errors: state.errors
    }
  );
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    fetchBooks: (offset) => dispatch(fetchBooks(offset))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShow);
