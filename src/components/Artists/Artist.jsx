import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Artist.css';

const Artist = ({ artistId, artistName, disambiguation }) => {
  return (
    <>
      <Link className={styles.link} to={`/releases/${artistName}/${artistId}`}>
        <section className={styles.artist}>
          <h3 className={styles.titleh2}>{artistName}</h3><span> 
            {disambiguation}</span></section>
      </Link>
      

    </>
  );
};

Artist.propTypes = {
  artistId: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  disambiguation: PropTypes.string
};

export default Artist;
