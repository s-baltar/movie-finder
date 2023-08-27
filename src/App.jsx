import './App.css'

import Home from './Home'
import Movie from './Movie'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movies/:id' element={<Movie/>} />
    </Routes>
  )
}

export default App
