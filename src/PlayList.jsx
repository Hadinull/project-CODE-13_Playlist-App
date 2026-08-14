import {useState} from 'react';
import TrackList from './TrackList';
{/* PlayList receives "list" (tracks) and "playlistprop" (name) from App */}
function PlayList( { list, playlistprop, onRemove, updateName, saveList} ){

function playListRename(e){
  updateName(e.target.value)
}
    return(
     <div>
        <label htmlFor="custom-paly-list"></label>
        <input onChange={playListRename} id="custom-paly-list" type="text" value={playlistprop}/>
        {/* Render TrackList with the playlist tracks */}
        <TrackList tracks={ list } onRemove={ onRemove } />
        <button onClick={saveList}>Save to Spotify</button>
     </div>
    )
};
export default PlayList;