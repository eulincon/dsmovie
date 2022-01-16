import { Col, Row } from 'antd'
import axios from 'axios'
import MovieCard from 'components/MovieCard'
import Pagination from 'components/Pagination'
import React from 'react'

export default function Listing() {
  axios.get('localhost:8080/movies?size=12&page=0').then((res) => {
    console.log(res.data)
  })

  return (
    <>
      <Pagination />
      <Row>
        <Col
          style={{ padding: '8px' }}
          sm={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
          xxl={{ span: 4 }}
        >
          <MovieCard />
        </Col>
        <Col
          style={{ padding: '8px' }}
          sm={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
          xxl={{ span: 4 }}
        >
          <MovieCard />
        </Col>
        <Col
          style={{ padding: '8px' }}
          sm={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
          xxl={{ span: 4 }}
        >
          <MovieCard />
        </Col>
        <Col
          style={{ padding: '8px' }}
          sm={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
          xxl={{ span: 4 }}
        >
          <MovieCard />
        </Col>
      </Row>
    </>
  )
}
