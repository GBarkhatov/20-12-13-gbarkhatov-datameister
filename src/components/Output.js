import React from 'react'
import styled from 'styled-components/macro'
import { Typography, Row, Col, Input as AntInput, Select, Button } from 'antd'
import { CSVReader } from 'react-papaparse'

import countriesWithCities from '../data/countriesWithCities'

const Component = styled.div``

const CSVWrapper = styled.div``

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

const Output = ({
  onContinue,
  name,
  setName,
  gender,
  setGender,
  age,
  setAge,
  email,
  setEmail,
  country,
  setCountry,
  city,
  setCity,
  csv,
  setCsv,
  onInputChange
}) => {
  const handleOnDrop = (data) => {
    const result = []

    // header
    result.push(data[0].data)
    // elements
    data.slice(1).forEach((element) => {
      result.push(element.data)
    })

    console.log(JSON.stringify(result, null, 2))

    setCsv(result)
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
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

  const filled =
    name && gender && age && email && country && city && csv.length > 0

  return (
    <Component>
      <Typography.Title level={4}>User</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={14}>
          name
        </Col>
        <Col xs={24} sm={5}>
          gender
        </Col>
        <Col xs={24} sm={5}>
          age
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={14}>
          email
        </Col>
        <Col xs={24} sm={5}>
          country
        </Col>
        <Col xs={24} sm={5}>
          city
        </Col>
      </Row>
    </Component>
  )
}

export default Output
