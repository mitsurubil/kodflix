import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getShowsAndMovies from './get-shows-and-movies';

function Details(props) {
  const [showOrMovie, setShowOrMovie] = useState('');
  const showOrMovieId = props.match.params.showOrMovieId;
  const matchedShowOrMovie = getShowsAndMovies().find((showOrMovie) => {
    return showOrMovie.id === showOrMovieId
  });

  useEffect(() => {
    setShowOrMovie(matchedShowOrMovie)
  }, []);
  if (showOrMovie === undefined) {
    return <Redirect to='./not-found' />;
  } else {
    return (
      <div className='details'>
        <h1>{showOrMovie.name}</h1>
        <div className='synopsis'>
          <p>{showOrMovie.synopsis}</p>
          <img src={showOrMovie.img} alt={showOrMovie.name} />
        </div>
        <br />
        <Link to='/'>Back to Home page</Link>
      </div>
    );
  }
}

export default Details;

{/* <h1>{welcomeMessage}</h1> */ }

  // const [welcomeMessage, setWelcomeMessage] =
  //   useState(props.match.params.ShowOrMovie);
  //   useEffect(() => {
  //   setTimeout(() => {
  //     setWelcomeMessage('Coming soon! :)')
  //   }, 3000);
  // }, []);