import './App.css'

import Home from './Home'
import MoviePage from './MoviePage'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movies/:id' element={<MoviePage/>} />
    </Routes>
  )
}

export default App
