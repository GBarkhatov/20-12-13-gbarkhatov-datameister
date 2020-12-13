import React from 'react'
import styled from 'styled-components/macro'
import { Typography, Row, Col, Divider, Table } from 'antd'

const Component = styled.div``

const ColWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Capitalize = styled.p`
  text-transform: capitalize;
`

const Output = ({ name, gender, age, email, country, city, csv }) => {
  const columns = csv[0].map((columnName) => {
    return {
      title: columnName,
      dataIndex: columnName,
      key: columnName
    }
  })

  const dataSource = csv.slice(1).map((item, index) => {
    return {
      key: index,
      [columns[0].title]: item[0],
      [columns[1].title]: item[1]
    }
  })

  return (
    <Component>
      <Typography.Title level={4}>Personal Information</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={14}>
          <ColWrapper>
            <Typography>
              <strong>Name:</strong>
            </Typography>{' '}
            <p>{`${name.split(' ')[1]} ${name.split(' ')[0]}`}</p>
          </ColWrapper>
          <Divider />
        </Col>
        <Col xs={24} sm={5}>
          <ColWrapper>
            <Typography>
              <strong>Gender:</strong>
            </Typography>{' '}
            <Capitalize>{gender}</Capitalize>
          </ColWrapper>
          <Divider />
        </Col>
        <Col xs={24} sm={5}>
          <ColWrapper>
            <Typography>
              <strong>Age:</strong>
            </Typography>{' '}
            <p>{age}</p>
          </ColWrapper>
          <Divider />
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
          <Divider />
        </Col>
        <Col xs={24} sm={5}>
          <ColWrapper>
            <Typography>
              <strong>Country:</strong>
            </Typography>{' '}
            <Capitalize>{country}</Capitalize>
          </ColWrapper>
          <Divider />
        </Col>
        <Col xs={24} sm={5}>
          <ColWrapper>
            <Typography>
              <strong>City:</strong>
            </Typography>{' '}
            <Capitalize>{city}</Capitalize>
          </ColWrapper>
          <Divider />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Typography.Title level={4}>Data</Typography.Title>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
        <Col xs={24} md={12}>
          <Typography.Title level={4}>Graph</Typography.Title>
        </Col>
      </Row>
    </Component>
  )
}

export default Output
