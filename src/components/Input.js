import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Typography, Row, Col, Input as AntInput, Select } from 'antd'

import countriesWithCities from '../data/countriesWithCities'

const Component = styled.div``

const Input = () => {
  const [country, setCountry] = useState('')

  const handleCountryChange = (value) => {
    setCountry(value)
  }

  const getCities = () => {
    const { cities } = countriesWithCities.filter(
      (item) => item.name === country
    )[0]

    return cities.map((city) => (
      <Select.Option value={city} key={city}>
        {city}
      </Select.Option>
    ))
  }

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
          <AntInput placeholder='Age' type='number' min={0} max={120} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={14}>
          <AntInput placeholder='Email' />
        </Col>
        <Col xs={24} sm={5}>
          <Select
            style={{ width: '100%' }}
            placeholder='Country'
            onChange={handleCountryChange}
          >
            {countriesWithCities.map((item) => (
              <Select.Option value={item.name} key={item.name}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={5}>
          <Select
            style={{ width: '100%' }}
            placeholder='City'
            disabled={!country}
          >
            {country && getCities()}
          </Select>
        </Col>
      </Row>
    </Component>
  )
}

export default Input
