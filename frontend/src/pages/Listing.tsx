import { Col, Row } from 'antd'
import axios from 'axios'
import MovieCard from 'components/MovieCard'
import Pagination from 'components/Pagination'
import React, { useEffect, useState } from 'react'
import { MoviePage } from 'types/movies'
import { BASE_URL } from 'utils/requests'

export default function Listing() {
  const [pageNumber, setPageNumber] = useState(0)
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  })

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
      .then((res) => {
        const data: MoviePage = res.data
        setPage(data)
      })
  }, [pageNumber])

  return (
    <>
      <Pagination />
      <Row>
        {page.content.map((movie) => (
          <Col
            key={movie.id}
            style={{ padding: '8px' }}
            sm={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            xxl={{ span: 4 }}
          >
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  )
}
