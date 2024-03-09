import { useState } from "react";

export default function Search(){
    let [searchText,setSearchText] = useState("");
    const handleSearchSubmit = (event) =>{
        setSearchText(event.target.value);
    }
    return(<div>
        <input type="text" value={searchText} onChange={handleSearchSubmit}/>
    </div>);
}