import React from "react";
import ImageShow from "./ImageShow";
import './ImageList.css';
const ImageList = ({Images}) =>{
    const renderedImage = Images.map((image)=>{
        return <ImageShow image={image} key={image.id}/>
    });
    return(
        <div className="image-list">
            {renderedImage}
        </div>
    );
}

export default ImageList;