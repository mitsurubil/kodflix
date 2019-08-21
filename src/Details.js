import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Details() {
  const [welcomeMessage, setWelcomeMessage] =
    useState('Hello, this will be the details page for each Movie & TV show :)');
    useEffect(() => {
    setTimeout(() => {
      setWelcomeMessage('Coming soon! :)')
    }, 3000);
  });
  return (
    <Link to='/'>
      <h1>{welcomeMessage}</h1>
    </Link>
  );
}

export default Details;