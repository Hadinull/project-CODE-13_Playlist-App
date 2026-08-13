import {useState} from 'react';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';
import PlayList from './Playlist';
import './App.css';

{/* Mock search results passed to SearchResults as the "userSearchResult" prop*/}
const searchResultsMock = [
  { id: 1, name: 'Tiny Dancer', artist: 'Elton John', album: 'Madman Across the Water' },
  { id: 2, name: 'Stronger', artist: 'Kanye West', album: 'Graduation' }
];
{/*Mock playlist tracks passed to PlayList as the "list" prop*/}
const playlistMock = [
  { id: 3, name: 'Hotel California', artist: 'Eagles', album: 'Hotel California' },
  { id: 4, name: 'Superstition', artist: 'Stevie Wonder', album: 'Talking Book' }
];

function App(){
  const [playlistTracks, setPlaylistTracks] = useState(playlistMock);
  const [playlistName, setPlaylistName] = useState('New Playlist');



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
      <SearchBar />

      <div className="App-playlist">
      <SearchResults userSearchResult={searchResultsMock} onAdd={addTrack} />  {/* Render SearchResults with mock data and pass down addTrack handler */}

      <PlayList list={playlistTracks} playlistprop={playlistName} onRemove={removeTrack}/>  {/* Render PlayList with current playlist tracks and playlist name*/}
      </div>


</div>
  )
}
export default App;