/* import Styled Component Movie */
import React from 'react';
import StyledMovie from './Movie.styled';

// menerima props
function Movie(props) {
  // destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <img
        src={movie.poster}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </StyledMovie>
  );
}

export default Movie;
