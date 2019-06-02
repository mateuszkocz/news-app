import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1200px;
`

function Page({children}: any) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Page
