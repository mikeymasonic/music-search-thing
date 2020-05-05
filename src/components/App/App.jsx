import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FindArtistsContainer from '../../containers/artist-search-container/FindArtistContainer';
import ReleaseContainer from '../../containers/release-container/ReleaseContainer';
import SongContainer from '../../containers/song-container/SongContainer';
import LyricContainer from '../../containers/lyric-container/LyricContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={FindArtistsContainer} />
        <Route path='/releases/:artistName/:artistId' component={ReleaseContainer} />
        <Route path='/songs/:artistName/:releaseId/:releaseTitle' component={SongContainer} />
        <Route path = '/lyrics/:artistName/:songTitle' component={LyricContainer} />
      </Switch>
    </Router>
  );
}
