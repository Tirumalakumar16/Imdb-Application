import { useEffect, useState } from "react"
import Banner from "./components/Banner"
import Movies from "./components/Movies"
import NavBar from "./components/NavBar"
import WatchList from "./components/WatchList"
import {BrowserRouter,Routes , Route} from 'react-router-dom'

import { MovieContext } from "./components/MovieContext"

function App() {

  let [watchList , setWatchList] = useState([])

  let handleAddToWatchList = (movieObj)=>{
    let newWatchList = [...watchList , movieObj]
    setWatchList(newWatchList)
    localStorage.setItem('Movies',JSON.stringify(newWatchList))
    // console.log(newWatchList);
  }

  let deleteFromWatchList = (movieObj)=>{

    let filteredMovies = watchList.filter((movie)=>{
      return movie.id != movieObj.id
    })

    setWatchList(filteredMovies)
    localStorage.setItem("Movies", JSON.stringify(filteredMovies))
  }
  
  useEffect(()=>{
    let localStrorageWatchList = localStorage.getItem('Movies')
    if(!localStrorageWatchList){
      return
    }
      setWatchList(JSON.parse(localStrorageWatchList))
  },[])
  return (
    <>
    <BrowserRouter>
    {/* using UseContext to send functions and values directly to child */}
    <MovieContext.Provider value={{handleAddToWatchList, deleteFromWatchList ,watchList,setWatchList}}>
    <NavBar />
    <Routes>
      <Route path="/movies" element={<><Banner />
        <Movies /> </>}/>
        <Route path="/" element={<><Banner />
          <Movies  /> </>}/>
    <Route path="/watchlist" element={   <> <WatchList /> </>}/>

    </Routes>
    </MovieContext.Provider>
    </BrowserRouter>
    
 
    </>
  )
}

export default App
