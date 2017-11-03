import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookStatus extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(newstat,oldstat,e) {
    e.preventDefault();
    if(oldstat!="Want To Read"){
      this.props.updateStatus(
        {book_id: this.props.book.id,
           user_id: this.props.user.id, status: newstat }).then(()=>{
             if(newstat==="read"){
               this.props.history.push(`/review/${this.props.book.id}`);
             }
           });
    }else{
      this.props.createStatus(
        {book_id: this.props.book.id,
         user_id: this.props.user.id, status: newstat }).then(()=>{
           if(newstat==="read"){
             this.props.history.push(`/review/${this.props.book.id}`);
        }
      });
    }
  }

  render() {
    debugger
    let status = this.props.status.status ? this.props.status.status : "Want To Read";
    return (
      <div className="book-status-box">
        <div className="book-drop">
          <button className="status-button">
            {status}
            <i class="fa fa-sort-desc" aria-hidden="true"></i>
          </button>
          <div className="hid">
            <button onClick={(e) => this.handleClick("Read",status,e)}>read</button>
            <button onClick={(e) => this.handleClick("Currently Reading",status,e)}>currently reading</button>
            <button onClick={(e) => this.handleClick("To-Read",status,e)}>to read</button>
          </div>
        </div>
      </div>
    );
  }


}

export default withRouter(BookStatus);
