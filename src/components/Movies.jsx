import React, { useEffect , useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination';

function Movies({handleAddToWatchList,watchlist}) {

  let [movies , setMovies] = useState([])
  let [pageNo , setPageNo] = useState(1)

  const handleNext = ()=>{
     setPageNo(pageNo+1)
  }
  const handlePrevious = ()=>{
    if(pageNo === 1){
      setPageNo(pageNo)
    }
    setPageNo(pageNo-1)
 }


  // console.log(movies);
useEffect(()=>{
  // Axios is getting the result in object model ,and fetch method not gonna used as dot notations
  axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=31cf5edd5fa77f29ca1b264727c7febb&language=en-US&page=${pageNo}`)
  .then((res)=>{
    // console.log(res.data.results);
    setMovies(res.data.results)
  })
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer 31cf5edd5fa77f29ca1b264727c7febb'
  //   }
  // };
  
  // fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=31cf5edd5fa77f29ca1b264727c7febb&language=en-US', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
},[pageNo])

  return (
    <div>
       <div className='text-2xl text-center font-bold m-6'>
        <h1>Trending Movies</h1>
       </div>
       <div className='flex gap-4 flex-wrap justify-evenly'>
          {movies.map((movie)=>{
            return <MovieCard  moviePoster={movie.poster_path} title={movie.title} movieObj={movie} handleAddToWatchList={handleAddToWatchList} watchlist={watchlist}/>
          })}
       </div>
       <Pagination next={handleNext} prevous={handlePrevious} pageNumber={pageNo}/>
    </div>
  )
}

export default Movies
