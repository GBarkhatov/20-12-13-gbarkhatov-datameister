import React from 'react'
import styled from 'styled-components/macro'
import { Typography, Row, Col } from 'antd'

const Component = styled.div``

const ColWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Capitalize = styled.p`
  text-transform: capitalize;
`

const Output = ({ name, gender, age, email, country, city }) => {
  return (
    <Component>
      <Typography.Title level={4}>User</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={14}>
          <ColWrapper>
            <Typography>
              <strong>Name:</strong>
            </Typography>{' '}
            <p>{`${name.split(' ')[1]} ${name.split(' ')[0]}`}</p>
          </ColWrapper>
        </Col>
        <Col xs={24} sm={5}>
          <ColWrapper>
            <Typography>
              <strong>Gender:</strong>
            </Typography>{' '}
            <Capitalize>{gender}</Capitalize>
          </ColWrapper>
        </Col>
        <Col xs={24} sm={5}>
          <ColWrapper>
            <Typography>
              <strong>Age:</strong>
            </Typography>{' '}
            <p>{age}</p>
          </ColWrapper>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={14} flex=''>
          <ColWrapper>
            <Typography>
              <strong>Gender:</strong>
            </Typography>{' '}
            <p>{email}</p>
          </ColWrapper>
        </Col>
        <Col xs={24} sm={5}>
          <ColWrapper>
            <Typography>
              <strong>Country:</strong>
            </Typography>{' '}
            <Capitalize>{country}</Capitalize>
          </ColWrapper>
        </Col>
        <Col xs={24} sm={5}>
          <ColWrapper>
            <Typography>
              <strong>City:</strong>
            </Typography>{' '}
            <Capitalize>{city}</Capitalize>
          </ColWrapper>
        </Col>
      </Row>
    </Component>
  )
}

export default Output
