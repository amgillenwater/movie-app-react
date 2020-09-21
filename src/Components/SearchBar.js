import React, { useState } from 'react'
import axios from 'axios'
import MovieResults from './MovieResults'
import { Button, Form, Input, Wrapper } from './styled.js'

const SearchBar = () => {
  const [userInput, setUserInput] = useState('')
  const [result, setResult] = useState()

  // styled components

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const result = await axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=84ae90e18d1d61fd354d732747ae369e&query=${userInput}`)
      setResult(result.data.results)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            label='Search' value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
          <Button><i className='fas fa-search' /></Button>
        </Form>
      </Wrapper>
      <MovieResults data={result} />
    </>
  )
}
export default SearchBar
