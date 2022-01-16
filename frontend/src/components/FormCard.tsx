import { Button, Form, Input, InputNumber } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Movie } from 'types/movies'
import { BASE_URL } from 'utils/requests'

const FormStyled = styled.div`
  max-width: 480px;
  margin: 40px auto;
  padding: 20px;

  .dsmovie-form-group label {
    color: #aaa;
  }

  .dsmovie-form-btn-container {
    display: flex;
    justify-content: center;
  }

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

  .dsmovie-card-bottom-container h3 {
    color: #4a4a4a;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
    min-height: 40px;
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

type Props = {
  movieId: string
}

export default function FormCard({ movieId }: Props) {
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((res) => setMovie(res.data))
  }, [movieId])

  return (
    <FormStyled>
      <img
        className="dsmovie-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <Form layout="vertical">
        <div className="dsmovie-card-bottom-container">
          <h3>{movie?.title}</h3>
          <Form.Item
            className="dsmovie-form-group"
            style={{ width: '90%' }}
            label="Informe seu email"
            rules={[{ type: 'email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="dsmovie-form-group"
            label="Informe sua avaliação"
            style={{ width: '90%' }}
          >
            <InputNumber
              min={1}
              max={5}
              defaultValue={1}
              style={{ width: '100%' }}
              // onChange={onChange}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="dsmovie-btn">
            Salvar
          </Button>
          <Link to={'/'}>
            <Button type="primary" className="dsmovie-btn mt-3">
              Cancelar
            </Button>
          </Link>
        </div>
      </Form>
    </FormStyled>
  )
}
