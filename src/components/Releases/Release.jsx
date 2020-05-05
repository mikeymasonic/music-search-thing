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
    <section>
      <Link to={`/songs/${artistName}/${releaseId}/${releaseTitle}`}>
        <img src={releaseCover} />
        <h3>{releaseTitle} - {releaseDate}</h3>
      </Link>
    </section>
  );
};

Release.propTypes = {
  releaseId: PropTypes.string.isRequired,
  releaseTitle: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  releaseCover: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default Release;
