import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavLoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      password: '',
      username: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    this.props.history.replace('/');
    const user = this.state;
    this.props.action(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = {username:"guest",password:"123456"};
    this.props.action(user);
  }

  loggedNav() {
    return (
      <div className="logged-form-container">
        <nav className="logged-nav">
          <Link to={`/`}>
            <h1>Great Reads</h1>
          </Link>
          <button className="nav-sign-button" onClick={this.handleSubmit}>Logout</button>
        </nav>
      </div>
    );
  }

  render(){
    if(this.props.logged){
      return this.loggedNav();
    }else{
    return (
      <div className="login-form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          <input className="signin-input" placeholder="Username" type="text" onChange={this.update('username')} />
          <input className="signin-input" placeholder="Password" type="password" onChange={this.update('password')} />
          <input className="nav-sign-button" type="submit" value="Sign In"/>
          <button className="nav-sign-button" onClick={this.handleDemoSubmit}>Demo</button>
        </form>
      </div>
    );
    }
  }


}


export default withRouter(NavLoginForm);
