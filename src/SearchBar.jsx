import {useState} from 'react';

function SearchBar(){

    return(
     <div>
      <label htmlFor="search"></label>
      <input id="search" name="search" type="text" />
      <br/>
      <button>Search</button>
     </div>
    );
};
export default SearchBar;