import { Button } from 'antd'
import MovieScore from 'components/MovieScore'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MovieCardStyled = styled.div`
  .dsmovie-movie-card-image {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  .dsmovie-card-bottom-container {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 20px 10px;
    border-radius: 0 0 8px 8px;
  }

  .dsmovie-btn {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    margin-bottom: 0.5rem;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    width: 180px;
  }
`

export default function MovieCard() {
  const movie = {
    id: 1,
    image:
      'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg',
    title: 'The Witcher',
    count: 2,
    score: 4.5,
  }
  return (
    <MovieCardStyled>
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <Link to={`/form/${movie.id}`}>
          <Button type="primary" htmlType="submit" className="dsmovie-btn">
            Avaliar
          </Button>
        </Link>
      </div>
    </MovieCardStyled>
  )
}
