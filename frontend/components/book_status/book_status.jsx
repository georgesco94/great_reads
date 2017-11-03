import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookStatus extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(stat,e) {
    e.preventDefault();
    this.props.createStatus({book_id: this.props.book.id, user_id: this.props.user.id, status: stat });
  }

  render() {
    
    let status = this.props.status.status ? this.props.status.status : "Want To Read";
    return (
      <div className="book-status-box">
        <div className="book-drop">
          <button className="status-button">
            {status}
          </button>
          <div className="hid">
            <button onClick={(e) => this.handleClick("read",e)}>read</button>
            <button onClick={(e) => this.handleClick("curr",e)}>currently reading</button>
            <button onClick={(e) => this.handleClick("to",e)}>to read</button>
          </div>
        </div>
        <div className="star-rating">Rate it</div>
      </div>
    );
  }


}

export default withRouter(BookStatus);