import { connect } from 'react-redux';
import BookIndex from './book_index';
import {fetchBooks} from '../../actions/book_actions';

const mapStateToProps = (state) => {
  return (
    {
      books: Object.values(state.entities.books),
      errors: state.errors
    }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: (offset) => dispatch(fetchBooks(offset))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIndex);
