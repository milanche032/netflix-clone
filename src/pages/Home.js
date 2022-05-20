import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requsets from '../Requests'

const Home = () => {
  return (
    <>
        <Main/>
        <Row title="Up Coming" fetchURL={requsets.requestUpcoming}/>
        <Row title="Popular" fetchURL={requsets.requestPopular}/>
        <Row title="Trending" fetchURL={requsets.requestTrending}/>
        <Row title="Top Rated" fetchURL={requsets.requestTopRated}/>
        <Row title="Horror" fetchURL={requsets.requestHorror}/>
    </>
  )
}

export default Home