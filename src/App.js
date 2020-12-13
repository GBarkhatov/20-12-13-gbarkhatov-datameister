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
  // const [mode, setMode] = useState('input')
  // TODO revert
  const [mode, setMode] = useState('output')
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
  const [csv, setCsv] = useState([
    ['Product', 'Price'],
    ['Paper', 5],
    ['Card', 2],
    ['Pencil', 0.5],
    ['Pen', 0.75],
    ['Globe', 25],
    ['Wall clock', 7.5],
    ['Stapler', 3],
    ['Staples', 0.5],
    ['Brush', 1],
    ['Colour pencils', 7],
    ['Eraser', 0.25],
    ['Push-pin', 0.1],
    ['Paper clip', 0.5],
    ['Rubber stamp', 1.2],
    ['Highlighter', 0.75],
    ['Fountain pen', 10],
    ['Marker', 2.5],
    ['Ballpoint', 1.35],
    ['Bulldog clip', 0.1],
    ['Tape dispenser', 1.25],
    ['Pencil sharpener', 1.35],
    ['Label', 0.1],
    ['Calculator', 15],
    ['Glue', 3.5],
    ['Scissors', 5.5],
    ['Sticky notes', 2.25],
    ['Envelope', 1.3],
    ['Clipboard', 5],
    ['Folder', 3],
    ['Wastebasket', 12]
  ])

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
        <Radio.Group value={mode}>
          <Radio.Button onClick={toggleInput('input')} value='input'>
            INPUT
          </Radio.Button>
          <Radio.Button
            onClick={toggleInput('output')}
            value='output'
            disabled={mode === 'input'}
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
