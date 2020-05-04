import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


const Artist = ({ artistId, artistName }) => {
  return (
    <>
      <h3>{artistName}</h3>
      <h4>{artistId}</h4>
    </>  
  );

};

Artist.propTypes = {
  artistId: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Artist;
