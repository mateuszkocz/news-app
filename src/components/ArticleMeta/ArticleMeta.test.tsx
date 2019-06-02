import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import ArticleMeta from './ArticleMeta'

describe('when all data is provided', () => {
  const goodMeta = {
    author: 'Gerwazy Brzącki',
    date: new Date(2019, 5, 1).toISOString(),
    sourceName: 'Gerwazy News',
    sourceUrl: 'https://gerwazy.news',
  }

  let component: ShallowWrapper

  beforeEach(() => {
    component = shallow(<ArticleMeta {...goodMeta}/>)
  })

  it('displays the author', () => {
    expect(component.text()).toMatch(goodMeta.author)
  })

  it('displays the date', () => {
    expect(component.text()).toMatch('Jun 1, 2019')
  })

  it('displays the source name', () => {
    expect(component.text()).toMatch(goodMeta.sourceName)
  })

  it('leads to the source', () => {
    expect(component.find(`a[href="${goodMeta.sourceUrl}"]`).exists()).toBeTruthy()
  })
})

describe('when stuff is missing', () => {
  const naughtyMeta = {
    author: null,
    date: null,
    sourceName: null,
    sourceUrl: null,
  }

  it('renders', () => {
    shallow(<ArticleMeta/>)
  })
})
