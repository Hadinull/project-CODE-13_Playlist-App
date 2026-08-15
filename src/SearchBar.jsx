import {useState} from 'react';

function SearchBar( { onSearch } ){
    const [term, setTerm] = useState('')
    function handleTermChange(e){
        setTerm(e.target.value)
    }
    function Search() {
        onSearch(term)
        console.log("🔘 SearchBar button was clicked! Term is:", term);
    }

    return(
     <div>
      <label htmlFor="search"></label>
      <input onChange={handleTermChange} id="search" name="search" type="text" />
      <br/>
      <button onClick={Search}>Search</button>
     </div>
    );
};
export default SearchBar;