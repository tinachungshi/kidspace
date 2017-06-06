import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import userService from './utils/userService';
import './App.css';
import HomePage from './pages/HomePage';
// import NavBar from './components/Navbar/NavBar';


class App extends Component {

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  /*--- Lifecycle Methods ---*/

  componentDidMount() {
    // let user = userService.getUser();
    // this.setState({user});
  }

  render() {
    return (
      <div>
        {/* <NavBar/>*/}
        <BrowserRouter>
          <Switch>
            <Route path='/' component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
