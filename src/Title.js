import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  padding: 10px 30px;
  width: 100%;
  background-color: #222;
  margin-bottom: 20px;
`

export default function({children}) {
  return <Title>{children}</Title>
}