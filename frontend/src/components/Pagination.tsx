import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import { MoviePage } from 'types/movies'

const PaginationStyled = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .dsmovie-pagination-box {
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dsmovie-pagination-box form {
    width: 100%;
    display: flex;
  }

  .dsmovie-pagination-button {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-primary);
    cursor: pointer;
  }

  .dsmovie-pagination-button svg {
    filter: brightness(0) saturate(100%) invert(26%) sepia(19%) saturate(7395%)
      hue-rotate(234deg) brightness(89%) contrast(92%);
  }

  .dsmovie-pagination-button:disabled {
    border: 1px solid #c2c2c2;
    cursor: unset;
  }

  .dsmovie-pagination-button:disabled svg {
    filter: none;
  }

  .dsmovie-pagination-container p {
    margin: 0;
    font-size: 12px;
    color: var(--color-primary);
  }
`

type Props = {
  page: MoviePage
  onChange: Function
}

export default function Pagination({ page, onChange }: Props) {
  return (
    <PaginationStyled className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button
          className="dsmovie-pagination-button"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <LeftOutlined />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button
          className="dsmovie-pagination-button"
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          {/* <Arrow className="dsmovie-flip-horizontal" /> */}
          <RightOutlined />
        </button>
      </div>
    </PaginationStyled>
  )
}
