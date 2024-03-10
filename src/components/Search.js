import { useState } from "react";
import './SearchBar.css';
export default function Search({onSearchSubmit}){
    const [term,setTerm] = useState('');
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        onSearchSubmit(term);
    }
    const handleChange = (event) =>{
        setTerm(event.target.value);
    }
    return(<div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search term</label>
            <input value={term} name="SearchBox" onChange={handleChange}/>
        </form>
    </div>);
}