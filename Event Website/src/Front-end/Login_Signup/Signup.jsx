import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8081/signup', { name, email, password });
      const { user } = response.data;

      // Store the user data in the local storage
      localStorage.setItem('user', JSON.stringify(user));

      console.log('Signup successful:', response.data);
    } catch (error) {
      console.error('Signup error:', error.response.data);
    }
  };

  return (
    <>
      <div className='login'>
        <div className='form-container'>
          <p className='title'>Sign Up</p>
          <form className='form'>
            <div className='input-group'>
              <label htmlFor='username'>Name</label>
              <input
                type='text'
                name='username'
                id='username'
                placeholder=''
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
            <button className='sign' onClick={handleSignup}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;