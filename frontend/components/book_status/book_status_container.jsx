import { connect } from 'react-redux';
import BookStatus from './book_status';
import {createStatus,updateStatus} from '../../actions/status_actions';


const mapStateToProps = (state,ownProps) => {
    debugger
    let booki = ownProps.book;
    let status = {status:""};
    if(state.session.currentUser){
      state.session.currentUser.statusIds.forEach((statId) => {
        if(state.entities.statuses[statId] && booki.id === state.entities.statuses[statId].book_id){
          status=state.entities.statuses[statId];
        }
      });
    }
    return (
      {
        book: booki,
        currUser: state.session.currentUser,
        status: status,
      }
    );
};


const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    createStatus: (status) => dispatch(createStatus(status)),
    updateStatus: (status) => dispatch(updateStatus(status))
  };
};

export default connect(
  mapStateToProps,mapDispatchToProps
)(BookStatus);
