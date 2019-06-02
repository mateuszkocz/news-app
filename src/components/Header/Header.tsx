import React from 'react'

interface Props {
  children?: React.ReactNode
}

function Header({children}: Props) {
  return (
    <header>
      {children}
    </header>
  )
}

export default Header
