import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Radio } from 'antd'

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

const ContentWrapper = styled.div``

const App = () => {
  const [inputMode, setInputMode] = useState(true)

  const toggleInput = (mode) => () => {
    setInputMode(mode)
  }

  return (
    <Component>
      <ButtonsWrapper>
        <Radio.Group>
          <Radio.Button value='small' onClick={toggleInput(true)}>
            INPUT
          </Radio.Button>
          <Radio.Button value='default' onClick={toggleInput(false)}>
            OUTPUT
          </Radio.Button>
        </Radio.Group>
      </ButtonsWrapper>
      <ContentWrapper>{inputMode ? <Input /> : <Output />}</ContentWrapper>
    </Component>
  )
}

export default App
