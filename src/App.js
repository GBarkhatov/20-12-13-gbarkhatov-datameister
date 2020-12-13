import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Radio } from 'antd'

const Component = styled.div`
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    display: flex;
  }

  & > div > label {
    flex: 1;
    width: 100%;
    min-width: 10rem;
    text-align: center;
  }
`

const App = () => {
  const [inputMode, setInputMode] = useState(true)

  return (
    <Component>
      <ButtonsWrapper>
        <Radio.Group>
          <Radio.Button value='small'>INPUT</Radio.Button>
          <Radio.Button value='default' disabled>
            OUTPUT
          </Radio.Button>
        </Radio.Group>
      </ButtonsWrapper>
      Inside App
    </Component>
  )
}

export default App
