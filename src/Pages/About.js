import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <h2><Link to='/'>About</Link>This is the Home page link</h2>
      <p>This is the About page.</p>
    </div>
  );
};

export default About;
