import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Release.css';

const Release = ({
  releaseCover,
  releaseId,
  releaseTitle,
  releaseDate = 'unknown',
  artistName
}) => {
  
  return (
    <section className={styles.release}>
      <Link className={styles.link} to={`/songs/${artistName}/${releaseId}/${releaseTitle}`}>
        <img src={releaseCover} />
        <h2 className={styles.titleh2}>{releaseTitle}</h2> <h3 className={styles.titleh3}>released: {releaseDate}</h3>
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
