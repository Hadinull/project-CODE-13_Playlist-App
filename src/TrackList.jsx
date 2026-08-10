import {useState} from 'react';
import Track from './Track';
{/* here tracklist now have the prop "tracks" and tracks has been set to searchResult*/}
function TrackList( {tracks }){
    return(
     <div>
        {/*now we here we open tracks if its true. and then we use the method .map() so we can loop 
        in the array and get the song id and track is its own prop now since its the last there */}
      {tracks?.map((song)=>(
        <Track key={song.id} track={song} />
      ))
      
      
      }
     </div>
    )
};
export default TrackList;