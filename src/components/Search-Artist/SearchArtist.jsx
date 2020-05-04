import React from 'react';
import PropTypes from 'prop-types';

const SearchArtist = ({ artist, onInputChange, onButtonClick }) => {
  return (
    <div>
      <input type='text' name='artist' value={artist} onChange={onInputChange} />
      <button onClick={onButtonClick}>Search</button>
    </div>
  );
};

SearchArtist.propTypes = {
  artist: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default SearchArtist;
