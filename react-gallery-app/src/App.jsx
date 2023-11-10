import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import apiKey from './components/config.js'
import Search from './components/Search.jsx'
import Nav from './components/Nav.jsx'
import Photo from './components/Photo.jsx'
import PhotoList from './components/PhotoList.jsx'
import {Route, Routes} from 'react-router-dom'
import { Navigate } from 'react-router-dom'


function App() {
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState(["cats"]);

  
   
  const fetchData = (query) => {
    let activeFetch = true;
    // axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response.data.photos.photo)
        if (activeFetch) {
          if (query === "dogs") {
            setDogs(response.data.photos.photo)
          } else if (query === "cats") {
            setCats(response.data.photos.photo)
          } else if (query === "computers") {
            setComputers(response.data.photos.photo)
          }  else {
            setPhotos(response.data.photos.photo)
          }
        }
      })
      .catch(error => {
        console.log("An error was found", error);
      })
    return () => {activeFetch = false}
  };
  
  useEffect(() => {
    fetchData(query), [query];
  })

  
 
 
  return (
    <div className='container'>
      <Routes>
      <Route path='/' element={<Navigate to='/cats' />} />
        <Route path='/cats' element={<PhotoList data={cats} query={"cats"} />} />
        <Route path='/dogs' element={<PhotoList data={dogs} query={"dogs"}/>} />
        <Route path='/computers' element={<PhotoList data={computers} query={"computers"}/>} />
        <Route path='/search:query' element={<PhotoList data={photos} query={"photos"}/>}/>
      </Routes>
      <Search />
      <Nav />
      <div className='photo-container'>
        <h2>Results</h2>
        <Photo />
      </div>
    </div>
  )
}



export default App
