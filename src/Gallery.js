import React from 'react';
import ShowsAndMovies from './ShowsAndMovies';
import getShowsAndMovies from './get-shows-and-movies';

function Gallery() {
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