import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requsets from '../Requests'

const Home = () => {
  return (
    <>
        <Main/>
        <Row rowID="1" title="Up Coming" fetchURL={requsets.requestUpcoming}/>
        <Row rowID="2" title="Popular" fetchURL={requsets.requestPopular}/>
        <Row rowID="3" title="Trending" fetchURL={requsets.requestTrending}/>
        <Row rowID="4" title="Top Rated" fetchURL={requsets.requestTopRated}/>
        <Row rowID="5" title="Horror" fetchURL={requsets.requestHorror}/>
    </>
  )
}

export default Home