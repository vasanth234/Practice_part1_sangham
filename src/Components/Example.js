 
 /*import useLocalStorage from './useLocalStorage.js'
 const Example=()=>{
    const [data,setData]=useLocalStorage('name','')

    console.log('Value stored in localStorage:', localStorage.getItem('name'));
return (
    <div className='container'>
        <div className='inputs'>
            <input type='text' placeholder="enter input" value={data} onChange={(e)=>setData(e.target.value)}/>
            <div>name:{data}</div>

        </div>
    </div>
)
}

export default Example;*/

import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage'
const LoginForm = () => {
  // State variables to store email and password
  const [email, setEmail] = useLocalStorage('email')
  const [password, setPassword] = useLocalStorage('password')

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store email and password in localStorage
   
    // Optionally, you can clear the form fields after storing the data
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
