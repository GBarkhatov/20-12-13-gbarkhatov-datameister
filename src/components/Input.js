import React from 'react'
import styled from 'styled-components/macro'
import { Typography, Row, Col, Input as AntInput, Select } from 'antd'

const Component = styled.div``

const Input = () => {
  return (
    <Component>
      <Typography.Title level={4}>User</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={14}>
          <AntInput placeholder='Name' />
        </Col>
        <Col xs={24} sm={5}>
          <Select style={{ width: '100%' }} placeholder='Gender'>
            <Select.Option value='male'>Male</Select.Option>
            <Select.Option value='female'>Female</Select.Option>
            <Select.Option value='unspecified'>Unspecified</Select.Option>
          </Select>
        </Col>
        <Col xs={24} sm={5}>
          <AntInput placeholder='Age' />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={14}>
          <AntInput placeholder='Email' type='number' />
        </Col>
        <Col xs={24} sm={5}>
          Country
        </Col>
        <Col xs={24} sm={5}>
          City
        </Col>
      </Row>
    </Component>
  )
}

export default Input
