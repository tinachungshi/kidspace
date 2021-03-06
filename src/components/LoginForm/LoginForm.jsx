import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let self = this;
    userService.login(self.state)
      .then(() => {
        self.props.handleLogin();
        self.props.history.push('/');
      })
      .catch(err => alert('Invalid Credentials!'));
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <header className="header-footer">LOG IN</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">LOG IN</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>CANCEL</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginForm;
