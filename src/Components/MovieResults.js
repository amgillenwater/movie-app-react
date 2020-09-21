import React from 'react'
import MovieCard from './MovieCard'
import { Header, Title } from './styled.js'

function MovieResults ({ data }) {
  return (
    <>
      <Title>Movie Results</Title>
      {!data
        ? (<Header>No results found</Header>)
        : (<div>
          <Header>Results:</Header>
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

        </div>
        )}
    </>
  )
}

export default MovieResults
