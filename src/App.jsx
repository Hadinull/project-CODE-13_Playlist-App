import {useState} from 'react';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';
import PlayList from './Playlist';
import Spotify from './Spotify';
import './App.css';

{/* Mock search results passed to SearchResults as the "userSearchResult" prop*/}
const searchResultsMock = [
  { id: 1, name: 'Tiny Dancer', artist: 'Elton John', album: 'Madman Across the Water', uri: 'spotify:track:1' },
  { id: 2, name: 'Stronger', artist: 'Kanye West', album: 'Graduation', uri: 'spotify:track:2' }
];
{/*Mock playlist tracks passed to PlayList as the "list" prop*/}
const playlistMock = [
  { id: 3, name: 'Hotel California', artist: 'Eagles', album: 'Hotel California', uri: 'spotify:track:3' },
  { id: 4, name: 'Superstition', artist: 'Stevie Wonder', album: 'Talking Book', uri: 'spotify:track:4' }
];


console.log(" App.jsx is awake and loaded in Chrome!");

function App(){

  const [playlistTracks, setPlaylistTracks] = useState(playlistMock);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [realSearchResults, setRealSearchResults] = useState([]);

function search(term) {
  Spotify.search(term).then((results) => {
    console.log("1️⃣ App.jsx heard the search! Term is:", term);
    setRealSearchResults(results);
    console.log("2️⃣ Arrived data:", results);
  });
}


function savePlaylist(){
  const trackUris = playlistTracks.map((track) => track.uri)
  setPlaylistName('New Playlist');
   setPlaylistTracks([]);
}


{/* save playlist comment
  💡 How this works step-by-step:
  1. playlistTracks.map() loops through every song in your playlist 🔄
  2. (track) is a temporary parameter representing the current song object 🎵
  3. track.uri extracts ONLY the uri string (like 'spotify:track:1') 🏷️
  4. trackUris becomes a new array of strings: ['spotify:track:1', 'spotify:track:2'] 📦
  */}

function updatePlaylistName(name){
  setPlaylistName(name)
}


   {/*Add a new track to the playlist if it's not already included*/}
  function addTrack(track){
    {/*.some() loops through playlistTracks to check if AT LEAST ONE song has a matching id 🆔
     Returns 'true' if the song is already in the playlist, or 'false' if it's not */}
  const isDuplicate = playlistTracks.some((savedTrack) => savedTrack.id === track.id);
  if (!isDuplicate) {
{/*Update state with a new array containing all existing tracks plus the new one*/}
      setPlaylistTracks([...playlistTracks, track]);  
    }
  };
  {/* function addTrack(track) {
  let isDuplicate = false;

  for (let i = 0; i < playlistTracks.length; i++) {
    if (playlistTracks[i].id === track.id) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    setPlaylistTracks([...playlistTracks, track]);
  }
} */}




function removeTrack(track){
  const newPlaylist = playlistTracks.filter((savedTrack) => savedTrack.id !== track.id
);
setPlaylistTracks(newPlaylist);
}



  return(
    <div>
      <h1>Jammming</h1>
      <br/>
      <SearchBar onSearch={search}/>

      <div className="App-playlist">
      <SearchResults userSearchResult={realSearchResults} onAdd={addTrack} />  {/* Render SearchResults with mock data and pass down addTrack handler */}

      <PlayList saveList={savePlaylist} updateName={updatePlaylistName} list={playlistTracks} playlistprop={playlistName} onRemove={removeTrack}/>  {/* Render PlayList with current playlist tracks and playlist name*/}
      </div>


</div>
  )
}
export default App;