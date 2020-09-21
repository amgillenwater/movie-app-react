import React from 'react'
import { Card, Circle, Description, Title, StyledImage } from './styled.js'

const MovieCard = props => {
  const { key, title, overview, lang, rating, img } = props

  return (
    <>
      <Card id={key}>
        <Title>{title}</Title>
        <Description>{overview}</Description>
        <Circle>{rating}</Circle>
        <Circle>{lang}</Circle>
        <StyledImage src={`https://image.tmdb.org/t/p/w500${img}`} />
      </Card>
    </>
  )
}

export default MovieCard
