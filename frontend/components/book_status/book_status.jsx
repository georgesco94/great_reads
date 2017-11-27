import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookStatus extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      status: this.props.status,
      errors: false
    };
    this.removeErrors = this.removeErrors.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({status: newProps.status});
  }

  renderErrors(){
    return (
      <div className="status-errors-box">
        <ul className="errors-ul">
          <li className="errors">Sign up to change status</li>
        </ul>
      </div>
    );
  }

  handleClick(newstat,oldstat,e) {
    e.preventDefault();
    if(!this.props.currUser){
      this.setState({errors: true});
      return ;
    }
    if(oldstat!="Want To Read"){
      this.props.updateStatus(
        {book_id: this.props.book.id,
           user_id: this.props.currUser.id, status: newstat }).then(()=>{
             if(newstat==="Read"){
               this.props.history.push(`/review/${this.props.book.id}`);
             }
           });
    }else{
      this.props.createStatus(
        {book_id: this.props.book.id,
         user_id: this.props.currUser.id, status: newstat }).then(()=>{
           if(newstat==="Read"){
             this.props.history.push(`/review/${this.props.book.id}`);
        }
      });
    }
  }
  removeErrors(){
    setTimeout(function() {
       this.setState({errors: false});
     }.bind(this), 2000);
  }


  render() {
    debugger
    if(this.state.errors) {
      this.removeErrors();
    }

    let status = this.state.status.status ? this.state.status.status : "Want To Read";
    return (
      <div className="book-status-box">
        {this.state.errors ? this.renderErrors() : ""}
        <div className="book-drop">
          <button className="status-button">
            {status}
            <i className="fa fa-sort-desc" aria-hidden="true"></i>
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
