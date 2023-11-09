// import { useState } from 'react'
import './App.css'
// import apiKey from './components/config.js'
import Search from './components/Search.jsx'
import Nav from './components/Nav.jsx'
import Photo from './components/Photo.jsx'
import PhotoList from './components/PhotoList.jsx'
import {Route, Routes} from 'react-router-dom'
import { Navigate } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Routes>
      <Route path='/' element={<Navigate to='/cats' />} />
        <Route path='/cats' element={<PhotoList />}></Route>
        <Route path='/dogs' element={<PhotoList />}></Route>
        <Route path='/computers' element={<PhotoList />}></Route>
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
