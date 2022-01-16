import { Rate } from 'antd'
import React from 'react'
import styled from 'styled-components'

const MovieStarsStyled = styled.div``

type Props = {
  score: number
}

export default function MovieStars({ score }: Props) {
  return (
    <MovieStarsStyled className="dsmovie-stars-container">
      <Rate
        disabled
        allowHalf
        defaultValue={score}
        style={{
          // background: '#c2c2c2',
          // color: 'red',
          fontSize: '2rem',
          textShadow: 'initial',
        }}
      />
    </MovieStarsStyled>
  )
}
