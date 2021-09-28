import { useState } from "react";
import SingleCard from "./SingleCard";
import "./Album.css"
function Albums(props, handleSearchAlbum,foundAlbums,albumList) {



  // const [textInput, setTextInput] = useState("");

  // const search = (text) => {
  //   handleSearchAlbum(text);
  // };

  return (
    <div className="albums">
      {/* <div className="search-container">
        <input
          className="search-input"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          type="text"
          placeholder="Enter album or artist name"
        />
        <button className="search-btn" onClick={() => search(textInput)}>
          Search
        </button>
      </div>
      {foundAlbums ? (
        <div className="searched-albums">
          {foundAlbums.map((item) => (
            <Albums
                   
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              artist={item.artist}
            />
          ))}
        </div>
      ) : (
        ""
      )} */}
     
      <h1>{props?.title || "Untitled"}</h1>
      <div className="albumscontainer">
        {props?.data?.length > 0 &&
          props?.data?.map((albumData) => (
            <SingleCard
              key={albumData?.id}
              data={albumData}
              delete={props?.delete}
            />
          ))}
      </div>
      
    </div>
  );
}

export default Albums;
