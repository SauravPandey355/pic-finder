import { useState } from "react";
import API from "./api";
import ImageList from "./components/ImageList";
import Search from "./components/Search";

export default function App(){
    const [Image,setImages] = useState([]);
    const handleSearchSubmit = async (term)=>{
        const result = await API(term);
        setImages(result);
    }
    return(
        <div>
            <Search onSearchSubmit = {handleSearchSubmit}/>
            <ImageList Images = {Image}/>
            {/* {firstLoad.map((e)=>{return <ImageList url = {e.url} title = {e.title} key={e.id}/>})}; */}
        </div>
    );
}