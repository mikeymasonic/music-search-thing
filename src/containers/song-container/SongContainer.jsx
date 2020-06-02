import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSongs } from '../../services/getArtistsDetailsAPI';
import Nav from '../nav/Nav';
import Songs from '../../components/Songs/Songs';
import LoadingGif from '../../assets/Load.gif';
import styles from './SongContainer.css';

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
      <section>
        <Nav />
        <h3>Sorry, songs are not available for this release...</h3>
      </section>
    );

    if(loading) return (
      <section className={styles.SongContainer}>
        <h2 className={styles.titleh2}>loading...</h2>
        <img alt='vinyl record spinning' src={LoadingGif}/>
      </section>
    );

    return (
      <>
        <h2 className={styles.titleh2}>Songs from <em>{this.props.match.params.releaseTitle}</em> by {this.props.match.params.artistName}</h2>
        <Nav />
        <Songs artistName={this.props.match.params.artistName} songsArray={songsArray} />
      </>
    );
  }
}
