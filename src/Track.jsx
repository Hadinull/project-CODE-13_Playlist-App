import React from 'react';
{/*here we get track as its own track distructing prop */}
function Track( {track} ){
    return(
     <div>
        {/*here we have track to accses the const serachResult from app. */}
      <h3>{track.name}</h3>
      <p>{track.artist}</p> 
      <p>{track.album}</p>  
      <button>+</button>  
     </div>
    )
};
export default Track;