import React from 'react'
import { Card, Circle, CircleContainer, Description, TextContainer, Title, StyledImage } from './styled.js'

const MovieCard = props => {
  const { key, title, overview, lang, rating, img } = props

  return (
    <>
      <Card id={key}>
        <TextContainer>
          <Title>{title}</Title>
          <Description>{overview}</Description>
        </TextContainer>
        <CircleContainer>
          <Circle>{rating}</Circle>
          <Circle>{lang}</Circle>
        </CircleContainer>
        {img === null
          ? <StyledImage src='https://via.placeholder.com/250x350.png?text=Image+Unavailable' />
          : <StyledImage src={`https://image.tmdb.org/t/p/w500${img}`} />}
      </Card>
    </>
  )
}

export default MovieCard
