import React from 'react'
import MovieCard from './MovieCard'
import { Header } from './styled.js'

function MovieResults ({ data, count }) {
  return (
    <>
      {!data
        ? (<Header>No results found</Header>)
        : (<div>
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

           </div>
        )}
    </>
  )
}

export default MovieResults
