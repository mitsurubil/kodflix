import React, { useEffect } from 'react';
import ShowsAndMovies from './ShowsAndMovies';
import getShowsAndMovies from './get-shows-and-movies';

function Gallery() {
  useEffect(() => {
    fetch('/rest/shows')
      .then(response => response.json())
      .then(shows => console.log(JSON.stringify(shows)))
  }, [])
  return (
    <div>
      <div className="container">
        {
          getShowsAndMovies().map(showsandmovies => (
            <ShowsAndMovies
              key={showsandmovies.id}
              id={showsandmovies.id}
              name={showsandmovies.name}
              img={showsandmovies.img} />
          ))
        }
      </div>
    </div>
  )
}

export default Gallery;