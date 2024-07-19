import React from 'react'

function WatchList({watchlist}) {
  console.log(watchlist);
  return (
    <>
    <div className='flex items-center justify-center mt-10'>
      {/* Search field */}
      <input type="text"placeholder='Search for Movie' className='bg-gray-100 p-2 rounded-md placeholder-pink-400 w-[20rem] h-[4rem]  px-[2rem] border border-gray-400 hover:border-gray-500 text-xl font-bold border-solid outline-none' />
    </div>


    <div className='mt-8 rounded-lg '>
      <table className=' w-full border border-gray-600 rounded-lg  text-center '>
        <thead className='bg-gray-300 border border-gray-100 text-center'>
          <tr>
            <th className='p-2  border border-gray-400'>Movie Name</th>
            <th className='border border-gray-400'>Ratings</th>
            <th className='border border-gray-400'>Popularity</th>
            <th className='border border-gray-400 '>Genre</th>
            <th className='border border-gray-400'>Remove</th>
          </tr>
        </thead>

        <tbody className='border border-gray-300 bg-gray-100'>
          {watchlist.map((movie)=>{
           return <> <tr className='border-b-4 border-gray-300'>
            <td className='flex justify-start items-center p-4'>
              <img className="w-[200px] h-[100px] rounded-lg bd-cover" src= {`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="movie" />
              <div className='text-xl  ml-5 '>{movie.title}</div>
            </td>
            <td className='text-lg'>{movie.vote_average}</td>
            <td className='text-lg'>{movie.popularity}</td>
            <td className='text-lg'>Action</td>
            <td className='text-red-600'>Delete</td>
          </tr>
          </>
          })}
          
        </tbody>
       
      </table>
    </div>
    
    
    
    </>
  )
}

export default WatchList
