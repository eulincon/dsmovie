import { GithubOutlined } from '@ant-design/icons'
import { PageHeader } from 'antd'
import React from 'react'
import styled from 'styled-components'

const NavBarStyled = styled(PageHeader)`
  background-color: var(--color-primary);

  * {
    color: #fff;
    font-weight: 700;
  }

  .dsmovie-contact-container {
    display: flex;
    align-items: center;
  }

  .dsmovie-contact-link {
    margin: 0 0 0 10px;
    font-size: 1.2rem;
  }
`

export default function Navbar() {
  return (
    <NavBarStyled
      className="site-page-header"
      onBack={() => null}
      title="DSMovie"
      // subTitle="This is a subtitle"
      extra={[
        <a href="https://github.com/zlincon" target="_blank">
          <div className="dsmovie-contact-container">
            <GithubOutlined style={{ fontSize: '2rem' }} />
            <p className="dsmovie-contact-link">/zlincon</p>
          </div>
        </a>,
      ]}
    />
  )
}
