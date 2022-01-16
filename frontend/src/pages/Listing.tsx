import { Col, Row } from 'antd'
import axios from 'axios'
import MovieCard from 'components/MovieCard'
import Pagination from 'components/Pagination'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from 'utils/requests'

export default function Listing() {
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=0`).then((res) => {
      console.log(res.data)
    })
  }, [])

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
