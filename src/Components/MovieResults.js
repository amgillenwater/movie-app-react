import React from 'react'
import MovieCard from './MovieCard'
import { Header, Results } from './styled.js'

function MovieResults ({ data, count }) {
  return (
    <>
      {!data
        ? (
          <Results>
            <Header>No results found</Header>
          </Results>)
        : (
          <Results>
            <Header>{count} results found</Header>
            {/* loop over results and generate movie card here */}
            <br />
            {data.map((item) => {
              return (
                <MovieCard
                  key={item.id}
                  title={item.original_title}
                  overview={item.overview}
                  lang={item.original_language}
                  rating={item.vote_average}
                  img={item.poster_path}
                />
              )
            }
            )}
          </Results>
        )}
    </>
  )
}

export default MovieResults
