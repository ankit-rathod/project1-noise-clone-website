import React, { useState } from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Items from '../components/Items'
import HotSelling from '../components/HotSelling'
import JustLaunched from '../components/JustLaunched'
import HomePoster1 from '../components/HomePoster1'
import HomePoster2 from '../components/HomePoster2'
import ExploreAll1 from '../components/ExploreAll1'
import ExploreAll2 from '../components/ExploreAll2'
import EnterEmail from '../components/EnterEmail'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Login from '../components/Login'
import HoverProduct from '../components/HoverProduct'
import Kart from '../components/Kart'



function Home() {

  return (
    <div className=''>
      <Header ></Header>
      <Carousel></Carousel>
      <Items></Items>
      <HotSelling></HotSelling>
      <JustLaunched></JustLaunched>
      <HomePoster1></HomePoster1>
      <ExploreAll1></ExploreAll1>
      <HomePoster2></HomePoster2>
      <ExploreAll2></ExploreAll2>
      <EnterEmail></EnterEmail>
      <Blogs></Blogs>
    <Footer></Footer>
  
   <HoverProduct></HoverProduct>
  
   

    </div>
  )
}

export default Home