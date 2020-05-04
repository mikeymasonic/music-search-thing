import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FindArtistsContainer from '../../containers/artist-search-container/FindArtistContainer';


export default function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={FindArtistsContainer} />
      </Router>
    </>
  );
}
  
