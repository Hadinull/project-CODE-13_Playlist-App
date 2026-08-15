let accessToken;
const clientId = '';
const redirectUri = 'http://localhost:5173/';

const Spotify = {
  async search(term) {
    const url = 'https://spotifystefan-skliarovv1.p.rapidapi.com/search';
    
    const options = {
      method: 'POST',
      headers: { 
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY, /*key  */
        'x-rapidapi-host': 'spotifystefan-skliarovv1.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
      }, 
      body: new URLSearchParams({
        q: term, 
        accessToken: '' 
      })    
    };
  
try {
      const response = await fetch(url, options);
      const result = await response.json(); 
      return result; 
      
    } catch (error) {
      console.error(error);
    }
  }
};

export default Spotify;