import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      displayErrors:  this.props.errors.length ? true : false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.removeErrors = this.removeErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({displayErrors: nextProps.errors.length ? true : false})
  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  renderErrors(){
    const errs = this.props.errors.map((error) => {
      return <li className="errors">{error}</li>
    });
    return (

      <nav className="signup-errors-box">
        <ul className="errors-ul">
          {errs}
        </ul>
      </nav>
    )
  }

  removeErrors(){
    setTimeout(function() {
       this.setState({displayErrors: false});
     }.bind(this), 3000);
  }

  render(){
    if(this.state.displayErrors) {
      this.removeErrors();
    }
    return (
      <div className="signup-form-container">
<<<<<<< HEAD
        <div id="login-headling">
          <img alt="Meet your next favorite book." src="https://s.gr-assets.com/assets/home/headline-e2cd420e71737ff2815d09af5b65c4e4.png" />
        </div>

=======
        {this.state.displayErrors ? this.renderErrors() : ""}
        <div id="login-headling">
          <img alt="Meet your next favorite book." src="https://s.gr-assets.com/assets/home/headline-e2cd420e71737ff2815d09af5b65c4e4.png" />
        </div>
>>>>>>> userAuth
        <form className="signup-form-box" onSubmit={this.handleSubmit}>
          <h2>New Here? Create a free account!</h2>
          <input className="input-signup" placeholder="Username" type="text" onChange={this.update('username')} />
          <input className="input-signup" placeholder="Email Address" type="text" onChange={this.update('email')} />
          <input className="input-signup" placeholder="Password" type="password" onChange={this.update('password')} />
          <input className="signup-button" type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }


}


export default withRouter(SessionForm);
