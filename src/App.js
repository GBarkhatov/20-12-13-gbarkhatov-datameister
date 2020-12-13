import React, { useState } from 'react'
import styled from 'styled-components/macro'

const Component = styled.div``

const App = () => {
  const [inputMode, setInputMode] = useState(true)

  return (
    <Component>
      Inside App
    </Component>
  )
}

export default App
