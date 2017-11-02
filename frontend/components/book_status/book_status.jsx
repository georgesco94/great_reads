import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookStatus extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    debugger
    return (
      <div className="book-status-box">
        <div className="book-drop">
          <button className="status-button">Status</button>
          <div className="hid">
            <button>read</button>
            <button>currently reading</button>
            <button>to read</button>
          </div>
          <i className="fa fa-sort-desc" aria-hidden="true"></i>
        </div>
        <div className="star-rating">Rate it</div>
      </div>
    );
  }


}

export default withRouter(BookStatus);
