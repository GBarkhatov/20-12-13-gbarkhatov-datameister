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
  const [inputMode, setInputMode] = useState(true)
  // input fields:
  // const [name, setName] = useState('')
  // const [gender, setGender] = useState('')
  // const [age, setAge] = useState()
  // const [email, setEmail] = useState('')
  // const [country, setCountry] = useState('')
  // const [city, setCity] = useState('')
  // const [csv, setCsv] = useState([])
  // TODO revert
  const [name, setName] = useState('Barkhatov Govard')
  const [gender, setGender] = useState('male')
  const [age, setAge] = useState(29)
  const [email, setEmail] = useState('gbarkhatov@gmail.com')
  const [country, setCountry] = useState('Russia')
  const [city, setCity] = useState('Vladivostok')
  const [csv, setCsv] = useState([])

  const toggleInput = (mode) => () => {
    setInputMode(mode)
  }

  const handleContinue = () => {
    setInputMode(false)
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
    if (inputMode) {
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
          csv={csv}
          setCsv={setCsv}
          onInputChange={handleInputChange}
        />
      )
    } else {
      return <Output />
    }
  }

  return (
    <Component>
      <ButtonsWrapper>
        <Radio.Group>
          <Radio.Button value='small' onClick={toggleInput(true)}>
            INPUT
          </Radio.Button>
          <Radio.Button value='default' onClick={toggleInput(false)} disabled>
            OUTPUT
          </Radio.Button>
        </Radio.Group>
      </ButtonsWrapper>
      <ContentWrapper bordered={false}>{renderContent()}</ContentWrapper>
    </Component>
  )
}

export default App
