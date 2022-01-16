import React from 'react'
import styled from 'styled-components'
import MovieStars from './MovieStars'

const MovieStarsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .dsmovie-score-value {
    margin: 0;
    color: #ffbb3a;
    font-size: 16px;
    font-weight: 700;
  }

  .dsmovie-score-count {
    font-size: 12px;
    color: #989898;
    margin: 4px 0 10px 0;
  }
`

type Props = {
  score: number
  count: number
}

export default function MovieScore({ score, count }: Props) {
  return (
    <MovieStarsStyled>
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : '-'}
      </p>
      <MovieStars score={score} />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </MovieStarsStyled>
  )
}
