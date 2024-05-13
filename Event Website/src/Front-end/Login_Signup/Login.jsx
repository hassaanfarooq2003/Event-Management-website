import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/login', { email, password });
      const { user } = response.data;

      // Store the user data in the local storage
      localStorage.setItem('user', JSON.stringify(user));

      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <>
      <div className='login'>
        <div className='form-container'>
          <p className='title'>Login</p>
          <form className='form'>
            <div className='input-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder=''
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder=''
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='forgot'>
                <a rel='noopener noreferrer' href='#'>
                  Forgot Password ?
                </a>
              </div>
            </div>
            <button className='sign' onClick={handleLogin}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;