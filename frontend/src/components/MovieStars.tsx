import { Rate } from 'antd'
import React from 'react'
import styled from 'styled-components'

const MovieStarsStyled = styled.div``

export default function MovieStars() {
  return (
    <MovieStarsStyled className="dsmovie-stars-container">
      <Rate
        disabled
        defaultValue={2}
        style={{
          // background: '#c2c2c2',
          color: 'red',
          fontSize: '2rem',
          textShadow: 'initial',
        }}
      />
    </MovieStarsStyled>
  )
}
