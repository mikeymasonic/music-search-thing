import React from 'react';
import PropTypes from 'prop-types';

const SearchArtist = ({ artist, onInputChange, onButtonClick }) => {
  return (
    <form onSubmit={onButtonClick}>
      <input type='text' name='artist' value={artist} onChange={onInputChange} />
      <button type='submit'>Search</button>
    </form>
  );
};

SearchArtist.propTypes = {
  artist: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default SearchArtist;
