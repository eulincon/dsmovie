import { Button } from 'antd'
import MovieScore from 'components/MovieScore'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Movie } from 'types/movies'

const MovieCardStyled = styled.div`
  .dsmovie-movie-card-image {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  .dsmovie-card-bottom-container {
    background-color: #393e46;
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

  .dsmovie-card-bottom-container h3 {
    color: #eeeeee;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
    min-height: 45px;
  }
`

type Props = {
  movie: Movie
}

export default function MovieCard({ movie }: Props) {
  return (
    <MovieCardStyled>
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore count={movie.count} score={movie.score} />
        <Link to={`/form/${movie.id}`}>
          <Button type="primary" htmlType="submit" className="dsmovie-btn">
            Avaliar
          </Button>
        </Link>
      </div>
    </MovieCardStyled>
  )
}
