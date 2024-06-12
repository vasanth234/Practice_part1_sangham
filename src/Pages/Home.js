import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h2><Link to='/about'>About</Link>This is the ABout page link</h2>
      <p>This is the Home page.</p>
    </div>
  );
};

export default Home;
