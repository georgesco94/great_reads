import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookRecommendation from './book_recommendation';
import {getRecommendation} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    recommendedBook: state.entities.recommendedBook
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return (
    {
      getRecommendation: () => dispatch(getRecommendation())
    }
  );
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookRecommendation));
