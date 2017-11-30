import { connect } from 'react-redux';
import BookStatus from './book_status';
import {createStatus,updateStatus} from '../../actions/status_actions';
import {updateAssignment} from '../../actions/shelve_assignments_actions';
import {fetchShelves} from '../../actions/shelf_actions';


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
    let assignment = [];
    Object.values(state.entities.assignments).forEach( (sassignment) => {
      if(sassignment.book_id === booki.id){
        assignment.push(sassignment);
      }
    });
    return (
      {
        book: booki,
        currUser: state.session.currentUser,
        status: status,
        userShelves: Object.values(state.entities.shelves),
        assignment: assignment
      }
    );
};


const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    createStatus: (status,shelfId) => dispatch(createStatus(status,shelfId)),
    updateStatus: (status) => dispatch(updateStatus(status)),
    fetchShelves: (id) => dispatch(fetchShelves(id)),
    updateAssignment: (assignment,assignmentId) => dispatch(updateAssignment(assignment,assignmentId))
  };
};

export default connect(
  mapStateToProps,mapDispatchToProps
)(BookStatus);
