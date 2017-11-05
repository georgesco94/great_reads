import { connect } from 'react-redux';
import BookStatus from './book_status';
import {createStatus,updateStatus} from '../../actions/status_actions';


const mapStateToProps = (state,ownProps) => {

    let booki = ownProps.book;
    let status = {status:""};
    if(state.session.currentUser){
      Object.values(state.entities.statuses).forEach((stat) => {
        if(stat.book_id === booki.id){
        
          status=stat;
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
