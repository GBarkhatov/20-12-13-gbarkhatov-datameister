import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Radio, Card } from 'antd'

import Input from './components/Input'
import Output from './components/Output'

const Component = styled.div`
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 3rem;
  }

  & > div {
    display: flex;
    width: 100%;
    max-width: 400px;
  }

  & > div > label {
    flex: 1;
    text-align: center;
  }
`

const ContentWrapper = styled(Card)`
  background-color: #fff;
`

const App = () => {
  // mode:
  const [mode, setMode] = useState('input')
  // input fields:
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState()
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [csv, setCsv] = useState([])

  const filled =
    name && gender && age && email && country && city && csv.length > 0

  const toggleInput = (mode) => () => {
    setMode(mode)
  }

  const handleContinue = () => {
    setMode('output')
  }

  const handleInputChange = (setter) => (e) => {
    if (typeof e === 'string') {
      // using select
      setter(e)
    } else {
      // using input
      setter(e.target.value)
    }
  }

  const renderContent = () => {
    if (mode === 'input') {
      return (
        <Input
          onContinue={handleContinue}
          name={name}
          setName={setName}
          gender={gender}
          setGender={setGender}
          age={age}
          setAge={setAge}
          email={email}
          setEmail={setEmail}
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
          setCsv={setCsv}
          onInputChange={handleInputChange}
          filled={filled}
        />
      )
    } else {
      return (
        <Output
          name={name}
          gender={gender}
          age={age}
          email={email}
          country={country}
          city={city}
          csv={csv}
        />
      )
    }
  }

  return (
    <Component>
      <ButtonsWrapper>
        <Radio.Group value={mode}>
          <Radio.Button onClick={toggleInput('input')} value='input'>
            INPUT
          </Radio.Button>
          <Radio.Button
            onClick={toggleInput('output')}
            value='output'
            disabled={!filled && mode === 'input'}
          >
            OUTPUT
          </Radio.Button>
        </Radio.Group>
      </ButtonsWrapper>
      <ContentWrapper bordered={false}>{renderContent()}</ContentWrapper>
    </Component>
  )
}

export default App
