import { useEffect, useState } from "react"
import Banner from "./components/Banner"
import Movies from "./components/Movies"
import NavBar from "./components/NavBar"
import WatchList from "./components/WatchList"
import {BrowserRouter,Routes , Route} from 'react-router-dom'

function App() {

  let [watchList , setWatchList] = useState([])

  let handleAddToWatchList = (movieObj)=>{
    let newWatchList = [...watchList , movieObj]
    setWatchList(newWatchList)
    localStorage.setItem('Movies',JSON.stringify(newWatchList))
    // console.log(newWatchList);
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
    <NavBar />
    <Routes>
      <Route path="/movies" element={<><Banner />
        <Movies handleAddToWatchList={handleAddToWatchList} watchlist={watchList}/> </>}/>
        <Route path="/" element={<><Banner />
          <Movies handleAddToWatchList={handleAddToWatchList} watchlist={watchList} /> </>}/>
    <Route path="/watchlist" element={   <> <WatchList watchlist={watchList}/> </>}/>

    </Routes>
 
    </BrowserRouter>
    
 
    </>
  )
}

export default App
