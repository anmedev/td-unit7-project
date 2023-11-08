// import { useState } from 'react'
import './App.css'
// import apiKey from './components/config.js'
import Search from './components/Search.jsx'
import Nav from './components/Nav.jsx'
import Photo from './components/Photo.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container'>
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
