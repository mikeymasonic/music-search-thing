import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSongs } from '../../services/getArtistsDetailsAPI';
import Nav from '../nav/Nav';
import Songs from '../../components/Songs/Songs';

export default class SongContainer extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    songsArray: [],
    loading: true,
    error: null
  }

  fetchSongs = () => {
    return getSongs(this.props.match.params.releaseId)
      .then(({ songs }) => {
        this.setState({
          songsArray: songs,
          loading: false
        });
      })
      .catch(err => this.setState({
        error: err,
        loading: true
      }));
  }

  componentDidMount() {
    this.fetchSongs();
  }

  render() {
    const { songsArray, error, loading } = this.state;

    if(error) return (
      <div>
        <Nav />
        <h3>Sorry, songs are not available for this release...</h3>
      </div>
    );

    if(loading) return (
      <div>
        <h3>loading...</h3>
      </div>
    );

    return (
      <>
        <h2>Songs from <em>{this.props.match.params.releaseTitle}</em> by {this.props.match.params.artistName}</h2>
        <Nav />
        <Songs artistName={this.props.match.params.artistName} songsArray={songsArray} />
      </>
    );
  }
}
