import React from 'react';

function ShowsAndMovies(props) {
    return (
      <div className="item">
        <img src={props.img} alt={props.name} />
        <div className="overlay">
          <h1>{props.name}</h1>
        </div>
      </div>
    );
  }

export default ShowsAndMovies;