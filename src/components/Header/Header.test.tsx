import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

it('renders without crashing', () => {
  shallow(<Header/>)
})

it('displays a provided text content', () => {
  const content = 'Hello!'
  expect(shallow(<Header>{content}</Header>).text()).toMatch(content)
})
