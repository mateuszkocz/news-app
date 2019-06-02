import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import ArticleMeta from '../ArticleMeta/ArticleMeta'
import ArticleContent from './ArticleContent'

const article = {
  $id: 'id',
  source: {
    name: 'Bodzio 24',
    url: 'http://bodzio.com',
    id: '10-bodzio',
  },
  publishedAt: new Date(2019, 5, 1).toISOString(),
  author: 'Bodzio Bodziowski',
  title: 'General Trains Strike Inevitable?',
  description: 'Trains are threatening tne new trains management',
  url: 'http://bodzio.com/articles/going-strike',
  urlToImage: 'http://cdn.bodzio.com/234fwd.tiff',
  content: 'A train is a form of transport consisting of a series of connected vehicles that generally runs along a rail track to transport cargo or passengers. The word "train" comes from the Old French trahiner, derived from the Latin trahere meaning "to pull" or "to draw"',
}

let component: ShallowWrapper

beforeEach(() => {
  component = shallow(<ArticleContent article={article}/>)
})

it('displays metadata', () => {
  const metaComponent = component.find(ArticleMeta)
  expect(metaComponent.exists()).toBeTruthy()
  const expectedProps = {
    author: article.author,
    date: article.publishedAt,
    sourceName: article.source.name,
    sourceUrl: article.source.url,
  }
  expect(metaComponent.props()).toEqual(expectedProps)
})

it('displays an image', () => {
  const image = component.find(`img[src="${article.urlToImage}"]`)
  expect(image.exists()).toBeTruthy()
})

it('displays a title', () => {
  const heading = component.find('h2')
  expect(heading.exists()).toBeTruthy()
  expect(heading.text()).toMatch(article.title)
})

it('displays a content', () => {
  expect(component.text()).toMatch(article.content)
})

it('displays a source link', () => {
  const link = component.find(`a[href="${article.url}"]`)
  expect(link.exists()).toBeTruthy()
})
