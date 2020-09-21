import React from 'react'
import MovieCard from './MovieCard'

function MovieResults ({ data }) {
  return (
    <>
      <h1>Movie Results</h1>
      {!data
        ? (<h1>No results found</h1>)
        : (<div>
          <h1>Results:</h1>
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
