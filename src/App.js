import { useState } from "react";
import {sculptureList} from "./components/Data"
import "./components/style.css"


 const  Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleClickNext = ()=>{
    setIndex(index + 1);

  }
  const handleClickPervious = ()=>{
    setIndex(index - 1);
  }

  let sculpture = sculptureList[index];

   return(
    <>
   
    <h2 className="title">
      <i>{sculpture.title}</i>
    </h2>
    
    <img className="images" src={sculpture.url} alt={sculpture.alt}/>
    <p className="description">
      {sculpture.description}
    </p>
    <h3 className="number">
      ({index + 1} of {sculptureList.length})
    </h3>
    <button id="button" className="btn1" disabled={index === 3 ? true : false} onClick={handleClickNext}>Next</button>
    <button id="button" className="btn2" disabled={index === 0 ? true : false} onClick={handleClickPervious}>Pervious</button>
    </>

   );
}

export default Gallery;