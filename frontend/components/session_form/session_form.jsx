import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render(){
    return (
      <div className="signup-form-container">
        <h2>New Here? Create a free account!</h2>
        <img alt="Meet your next favorite book." src="https://s.gr-assets.com/assets/home/headline-e2cd420e71737ff2815d09af5b65c4e4.png" />
        <form className="signup-form-box" onSubmit={this.handleSubmit}>
          <input placeholder="Username" type="text" onChange={this.update('username')} />
          <input placeholder="Email Address" type="text" onChange={this.update('email')} />
          <input placeholder="Password" type="password" onChange={this.update('password')} />

          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }


}


export default withRouter(SessionForm);
