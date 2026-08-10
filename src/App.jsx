import {useState} from 'react';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';
import PlayList from './Playlist';
import './App.css';

{/*the const searchResults will be passed to SearchResults as a distructing prop*/}
const searchResultsMock = [
  { id: 1, name: 'Tiny Dancer', artist: 'Elton John', album: 'Madman Across the Water' },
  { id: 2, name: 'Stronger', artist: 'Kanye West', album: 'Graduation' }
];

const playlistMock = [
  { id: 3, name: 'Hotel California', artist: 'Eagles', album: 'Hotel California' },
  { id: 4, name: 'Superstition', artist: 'Stevie Wonder', album: 'Talking Book' }
];
function App(){
  return(
    <div>
      <h1>Jammming</h1>
      <br/>
      <label htmlFor="search"></label>
      <input id="search" name="search" type="text" />
      {/* here we render searchResult in app and we gave it the distructing {userSearchResult} prop 
      that will be passed to SearchResults component file*/}
      <div className="App-playlist">
      <SearchResults userSearchResult={searchResultsMock} />
      <PlayList list={playlistMock}/>
      </div>
</div>
  )
}
export default App;