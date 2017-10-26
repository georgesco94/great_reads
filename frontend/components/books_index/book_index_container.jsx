import { connect } from 'react-redux';
import BookIndex from './book_index';
import {fetchBooks} from '../../actions/book_actions';

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
  debugger
  return {
    fetchBooks: () => dispatch(fetchBooks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIndex);
