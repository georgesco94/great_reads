import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UnlogNav extends React.Component{
  constructor(props){
    super(props);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = {username:"guest",password:"123456"};
    this.props.login(user).then(()=> this.props.history.push("/books"));
  }


  render(){

    return (
      <div className="unlog-wrap">
        <div className="unlog-nav">
          <Link className="nav-link-img" to={`/`}>
            <div className="logo"></div>
          </Link>
          <Link className="nav-link" to={`/`}>
            <h1>My Books</h1>
          </Link>
          <Link className="nav-link" to={`/`}>
            <h1>Make Book</h1>
          </Link>
          <button className="nav-sign-button" onClick={this.handleDemoSubmit}>Demo</button>
        </div>
      </div>
    );
  }


}





export default withRouter(UnlogNav);
