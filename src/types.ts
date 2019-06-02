export interface Source {
  id: string | null
  name: string
  url: string
}

// TODO: Some values might be null.
export interface Article {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}
