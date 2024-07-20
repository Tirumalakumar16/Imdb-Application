import React, { useEffect, useState } from "react";

import genres from "../utilities/genres";

import { MovieContext } from "./MovieContext";

import { useContext } from "react";

function WatchList() {
  // console.log(watchlist);


  let {watchList  , setWatchList , deleteFromWatchList}  = useContext(MovieContext)

  let [search, setSearch] = useState("");
  let [genreList, setGenreList] = useState([]);
  let [currGenre , setCurrGenre ] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleGenre =  (genre)=>{
    setCurrGenre(genre)
  }

  useEffect(() => {
    let genre = watchList.map((movie) => {
      return genres[movie.genre_ids[0]];
    });

     genre = new Set(genre);
    // console.log(genre);
    setGenreList(['All Genres', ...genre]);
  }, [watchList]);

  let handleRatingsAscending = ()=>{
    let sortedAsc = watchList.sort((movieObjA, movieObjB)=>{
      return movieObjA.vote_average - movieObjB.vote_average
    }) 
    setWatchList([...sortedAsc])
  }

  let handleRatingsDescending = ()=>{
    let sortedDesc = watchList.sort((movieObjA, movieObjB)=>{
      return movieObjB.vote_average - movieObjA.vote_average
    }) 

    setWatchList([...sortedDesc])
  }


  let handlePopularityAsc = ()=>{
    let ascPopularity = watchList.sort((A ,B )=>{
      return A.popularity - B.popularity
    })

    setWatchList([...ascPopularity])
  }

  let handlePopularityDesc = ()=>{
    let descPopularity = watchList.sort((A ,B )=>{
      return B.popularity - A.popularity
    })
    setWatchList([...descPopularity])
  }



  return (
    <>
      <div className="flex justify-center mt-8">
        {genreList.map((gen) => {
          return (
            <div onClick={()=>handleGenre(gen)}
             className={currGenre === gen ? " m-3 cursor-pointer flex border rounded-xl h-[3rem] w-[8rem] bg-blue-400 justify-center items-center font-bold text-white" : " m-3 cursor-pointer flex border rounded-xl h-[3rem] w-[8rem] bg-gray-300 justify-center items-center font-bold text-white"}>
              {gen}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center mt-10">
        {/* Search field */}
        <input
          type="text"
          placeholder="Search for Movie"
          onChange={handleSearch}
          value={search}
          className="bg-gray-100 p-2 rounded-md placeholder-pink-400 w-[20rem] h-[4rem]  px-[2rem] border border-gray-400 hover:border-gray-500 text-xl font-bold border-solid outline-none"
        />
      </div>

      <div className="mt-8 rounded-lg ">
        <table className=" w-full border border-gray-600 rounded-lg  text-center ">
          <thead className="bg-gray-300 border border-gray-100 text-center">
            <tr>
              <th className="p-2  border border-gray-400">Movie Name</th>
              <th className="border border-gray-400"><i onClick={handleRatingsAscending} class="fa-solid fa-arrow-up m-2"></i>Ratings<i onClick={handleRatingsDescending} class="fa-solid fa-arrow-down m-2"></i></th>
              <th className="border border-gray-400"><i onClick={handlePopularityAsc} class="fa-solid fa-arrow-up m-2"></i>Popularity<i onClick={handlePopularityDesc} class="fa-solid fa-arrow-down m-2"></i></th>
              <th className="border border-gray-400 ">Genre</th>
              <th className="border border-gray-400">Remove</th>
            </tr>
          </thead>

          <tbody className="border border-gray-300 bg-gray-100">
            {watchList.filter((movie)=>{
                if(currGenre == 'All Genres'){
                  return true
                } else {
                  return genres[movie.genre_ids[0]] == currGenre
                }
            })
              .filter((movie) => movie.title.toLowerCase().includes(search))
              .map((movie) => {
                return (
                  <>
                    {" "}
                    <tr className="border-b-4 border-gray-300">
                      <td className="flex justify-start items-center p-4">
                        <img
                          className="w-[200px] h-[100px] rounded-lg bd-cover"
                          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                          alt="movie"
                        />
                        <div className="text-xl  ml-5 ">{movie.title}</div>
                      </td>
                      <td className="text-lg">{movie.vote_average}</td>
                      <td className="text-lg">{movie.popularity}</td>
                      <td className="text-lg">{genres[movie.genre_ids[0]]}</td>
                      <td onClick={()=>deleteFromWatchList(movie)} className="text-red-600 cursor-pointer">Delete</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
