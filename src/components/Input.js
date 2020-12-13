import React from 'react'
import styled from 'styled-components/macro'
import { Typography, Row, Col } from 'antd'

const Component = styled.div``

const Input = () => {
  return (
    <Component>
      <Typography.Title level={4}>User</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={14}>
          1
        </Col>
        <Col xs={24} sm={5}>
          2
        </Col>
        <Col xs={24} sm={5}>
          3
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={14}>
          4
        </Col>
        <Col xs={24} sm={5}>
          5
        </Col>
        <Col xs={24} sm={5}>
          6
        </Col>
      </Row>
    </Component>
  )
}

export default Input
