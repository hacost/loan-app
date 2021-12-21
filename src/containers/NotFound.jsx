import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  // add React fragment
  <>
    <h1>404</h1>
    <h2>UH OH! You are lost.</h2>
    <p>
      The page you are looking for does not exist.
      How you got here is a mystery. But you can click the button below
      to go back to the homepage.
    </p>
    <Link to='/'>
      HOME
    </Link>
  </>
);

export default NotFound;
