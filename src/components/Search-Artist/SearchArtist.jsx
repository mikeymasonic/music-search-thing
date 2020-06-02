import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchArtist.css';

const SearchArtist = ({ artist, onInputChange, onButtonClick }) => {
  return (
    <form onSubmit={onButtonClick} className={styles.searchArtist}>
      <input type='text' name='artist' value={artist} onChange={onInputChange} />
      <button type='submit'>search</button>
    </form>
  );
};

SearchArtist.propTypes = {
  artist: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default SearchArtist;
