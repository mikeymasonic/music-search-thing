import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FindArtistsContainer from '../../containers/artist-search-container/FindArtistContainer';
import ReleaseContainer from '../../containers/release-container/ReleaseContainer';


export default function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={FindArtistsContainer} />
        <Route path='/releases/:artistName/:artistId' component={ReleaseContainer} />
      </Router>
    </>
  );
}
  
