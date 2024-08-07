/* eslint-disable react/prop-types */
import React from 'react'
import Hero from './Hero'
import Delivary from './Delivary'
import Sliders from './Sliders'

const Home = ({handelAdd}) => {
  return (
    <div>
      <Hero/>
      <Delivary/>
      <Sliders handelAdd={handelAdd}/>
    </div>
  )
}

export default Home
