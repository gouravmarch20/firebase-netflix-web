import React from 'react'
// import { BrowseContainer } from '../containers/browse'
import { useContent } from '../hooks'
// import { selectionFilter } from '../utils'

export default function Browse () {
  const { series } = useContent('series')
  console.log(series)
  //   const { films } = useContent('films')
  //   const slides = selectionFilter({ series, films })

  return <h1>hii</h1>
  // <BrowseContainer slides={slides} />
}
