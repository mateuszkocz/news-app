import React from 'react'
import styled from 'styled-components'

const SizedImage = styled.img`
  display: block;
  width: 100%;
`

function Image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <SizedImage {...props}/>
  )
}

export default Image
