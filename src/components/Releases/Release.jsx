import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Release = ({
  releaseCover,
  releaseId,
  releaseTitle,
  releaseDate = 'unknown',
  artistName
}) => {
  return (
    <div>
      <Link to={`/songs/${artistName}/${releaseId}/${releaseTitle}`}>
        <img src={releaseCover} />
        <h3>{releaseTitle} - {releaseDate}</h3>
      </Link>
    </div>
  );
};
