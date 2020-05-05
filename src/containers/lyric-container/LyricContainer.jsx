import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../../services/getArtistsDetailsAPI';
import Nav from '../nav/Nav';
import Lyrics from '../../components/Lyrics/Lyrics';

export default class LyricContainer extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    lyrics: '',
    loading: true,
    error: null
  }

  fetchLyrics = () => {
    return getLyrics(
      this.props.match.params.artistName,
      this.props.match.params.songTitle)
      .then (({ lyrics }) => {
        this.setState({
          lyrics,
          loading: false
        });
      })
      .catch(err => this.setState({
        error: err,
        loading: true
      }));
  }

  componentDidMount() {
    this.fetchLyrics();
  }

  render() {
    const {
      lyrics,
      error,
      loading
    } = this.state;

    if(error) return (
      <section>
        <Nav />
        <h3>Sorry, the lyrics for this song are not available...</h3>
      </section>
    );

    if(loading) return (
      <section>loading...</section>
    );

    return (
      <section>
        <Lyrics 
          title={this.props.match.params.songTitle}
          lyrics={lyrics}
          artistName={this.props.match.params.artistName}
        />
      </section>
    );
  }
}
