import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import NavBar from '../../components/NavBar/NavBar';
import './LoginPage.css';

const LoginPage = (props) => {
  return (
    <div className='LoginPage'>
      <LoginForm
        {...props}
      />
    </div>
  );
};

export default LoginPage;
