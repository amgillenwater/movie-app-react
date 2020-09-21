import React from 'react'
import './App.css'
import Header from './components/Header.js'
import SearchBar from './components/SearchBar.js'
import MovieResults from './components/MovieResults.js'

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
