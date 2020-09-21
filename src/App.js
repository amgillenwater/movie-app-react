import React from 'react'
import './App.css'
import Header from './Components/Header.js'
import SearchBar from './Components/SearchBar.js'
import MovieResults from './Components/MovieResults.js'

function App () {
  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <MovieResults />
    </div>
  )
}

export default App
