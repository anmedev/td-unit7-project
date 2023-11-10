// Imports Components, Files, and Hooks
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
 // Creates States and Setter Funcs
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState(["cats"]);

// Function that fetches data from the Flickr API
  const fetchData = (query) => {
    let activeFetch = true;
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
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
    if (!cats.length) {
      fetchData("cats");
    }
    if (!dogs.length) {
      fetchData("dogs");
    }
    if (!computers.length) {
      fetchData("computers");
    }
    fetchData(query);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  
  const handleQueryChange = (query) => {
    setQuery(query);
  };
 
  return (
    <div className='container'>
      <Search changeQuery={handleQueryChange} />
      <Nav />
      <Routes>
      <Route path='/' element={<Navigate to='/cats' />} />
        <Route path='/cats' element={<PhotoList data={cats} query={"cats"} title={"Cats"} />} />
        <Route path='/dogs' element={<PhotoList data={dogs} query={"dogs"} title={"Dogs"}/>} />
        <Route path='/computers' element={<PhotoList data={computers} query={"computers"} title={"Computers"}/>} />
        <Route path='/search/:query' element={<PhotoList data={photos} query={"photos"} title={query}/>}/>
      </Routes>
      
      <div className='photo-container'>
        <Photo />
      </div>
    </div>
  )
}



export default App
