/* eslint-disable react/prop-types */
import React from "react";
import { MovieContext } from "./MovieContext";
import { useContext } from "react";

function MovieCard({
  moviePoster,
  title,
  movieObj,
  
}) {
  // let handleAddWatchList =()=>{
  //   console.log(movieObj);
  // }

  // using destructuring Context values as props
  let {watchList , handleAddToWatchList} = useContext(MovieContext)

  function doesContains(){
    for(let i=0;i<watchList.length;i++) {
      if(watchList[i].id === movieObj.id){
        return true
      }
    }
    return false
  }
  return (
    <div
      className="rounded-lg hover:scale-110 flex items-end flex-col justify-between  h-[40vh] w-[200px] bg-cover duration-300 cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${moviePoster})`
      }}
    >

      {doesContains(movieObj) ? ( <div
        onClick={() => handleAddToWatchList(movieObj)}
        className="  text-center text-white  text-2xl"
      >
        &#10060;
      </div>):(<div
        onClick={() => handleAddToWatchList(movieObj)}
        className="  text-center text-white  text-2xl"
      >
        &#128525;
      </div>)
      }
      
      
      <div className=" w-full rounded-lg text-white  text-xl text-center bg-gray-900/50 p-2 cursor-pointer">
        {title}
      </div>
    </div>
  );
}

export default MovieCard;
