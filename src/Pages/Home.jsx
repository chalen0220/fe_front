import React from 'react'
import Slider from '../Components/Slider/Slider'
import Popular from '../Components/Popular/Popular'
import NewItems from '../Components/NewItems/NewItems'
import Newsletter from '../Components/Newsletter/Newsletter'


const Home = () => {
  return (
    <div>
        <Slider />
        <Popular />
        <NewItems />
        <Newsletter />
    </div>
  )
}

export default Home
