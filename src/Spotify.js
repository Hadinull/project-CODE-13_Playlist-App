const Spotify = {
  async search(term) {
    if (!term) return [];

    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${encodeURIComponent(term)}`;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      if (!result.data) {
        return [];
      }

      return result.data.slice(0, 5).map((track) => ({
        id: track.id,
        name: track.title,
        artist: track.artist.name,
        album: track.album.title,
        uri: track.link
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  }
};

export default Spotify;