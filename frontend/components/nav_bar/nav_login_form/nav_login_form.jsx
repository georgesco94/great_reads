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
  }



  handleSubmit(e) {
    debugger
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render(){
    return (
      <div className="login-form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          <input placeholder="Username" type="text" onChange={this.update('username')} />
          <input placeholder="Password" type="password" onChange={this.update('password')} />

          <input type="submit" value="Sign In"/>
        </form>
      </div>
    );
  }


}


export default withRouter(NavLoginForm);
