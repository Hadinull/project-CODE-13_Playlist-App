import {useState} from 'react';
import TrackList from './TrackList';
function PlayList( { list } ){

    return(
     <div>
        <label htmlFor="custom-paly-list"></label>
        <input id="custom-paly-list" type="text" />
        <TrackList tracks={ list }/>
        <button>Save to Spotify</button>
     </div>
    )
};
export default PlayList;
