import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookCreate from './book_create';
import { createBook } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return (
    {
      createBook: (book) => dispatch(createBook(book))
    }
  );
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookCreate));
