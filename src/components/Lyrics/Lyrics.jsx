import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../../containers/nav/Nav';

const Lyrics = ({ title, lyrics, artistName }) => {
  return (
    <section>
      <h3>Lyrics for <em>{title}</em> by {artistName}</h3>
      <Nav />
      <pre>{lyrics}</pre>
    </section>
  );
};

Lyrics.propTypes = {
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Lyrics;
