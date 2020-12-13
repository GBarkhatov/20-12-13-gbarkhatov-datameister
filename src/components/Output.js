import React from 'react'
import styled from 'styled-components/macro'
import { Typography, Row, Col, Divider, Table } from 'antd'
import { ResponsiveBar } from '@nivo/bar'

const Component = styled.div``

const GraphWrapper = styled.div`
  height: 655px;
  width: 100%;
`

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
          <GraphWrapper>
            <ResponsiveBar
              data={dataSource}
              keys={[columns[1].title]}
              indexBy={columns[0].title}
              margin={{ top: 50, right: 20, bottom: 100, left: 60 }}
              padding={0.3}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={{ scheme: 'category10' }}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: '#38bcb2',
                  size: 4,
                  padding: 1,
                  stagger: true
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: '#eed312',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
                }
              ]}
              fill={[
                {
                  match: {
                    id: 'fries'
                  },
                  id: 'dots'
                },
                {
                  match: {
                    id: 'sandwich'
                  },
                  id: 'lines'
                }
              ]}
              borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                legendPosition: 'middle',
                tickRotation: -90,
                legendOffset: 32
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: columns[1].title,
                legendPosition: 'middle',
                legendOffset: -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: 'color', modifiers: [['brighter', 2]] }}
              animate
              motionStiffness={90}
              motionDamping={15}
            />
          </GraphWrapper>
        </Col>
      </Row>
    </Component>
  )
}

export default Output
