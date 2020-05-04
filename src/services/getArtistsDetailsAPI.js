export const getArtists = (artistName, page) => {
  return fetch(`https://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25&offset=${(page - 1) * 25}`)
    .then(res => {
      if(!res.ok) throw 'Unable to load artists, srry!';

      return res.json();
    })
    .then(({ count, artists }) => {
      const totalPages = count;
      const singers = artists.map(singer => ({
        artistId: singer.id,
        artistName: singer.name
      }));
      return {
        singers,
        totalPages
      };
    });
};
