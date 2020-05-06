import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../../containers/nav/Nav';
import styles from './Lyrics.css';

const Lyrics = ({ title, lyrics, artistName }) => {
  return (
    <section className={styles.Lyrics}>
      <h3 className={styles.lyricsh3}>Lyrics for <em>{title}</em> by {artistName}</h3>
      <Nav />
      <pre className={styles.lyricspre}>{lyrics}</pre>
    </section>
  );
};

Lyrics.propTypes = {
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Lyrics;
