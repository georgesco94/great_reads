import { connect } from 'react-redux';
import BookShelf from './bookshelf';
import {updateStatus} from '../../actions/status_actions';
import {fetchShelves} from '../../actions/shelf_actions';


const mapStateToProps = (state,ownProps) => {
  return {
    shelves: Object.values(state.entities.shelves),
    currUser: state.session.currentUser
  };
};


const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    updateStatus: (status) => dispatch(updateStatus(status)),
    fetchShelves: (id) => dispatch(fetchShelves(id))
  };
};

export default connect(
  mapStateToProps,mapDispatchToProps
)(BookShelf);
