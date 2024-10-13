import React from 'react'

function Carousel() {
  return (
    <div className='w-[100%]  h-[100vh] overflow-hidden'>
      <div className='flex bg-[url(https://www.gonoise.com/cdn/shop/files/Aura-Dekstop.gif?v=1718079959)] w-[500%] overflow-hidden h-[100vh]  bg-slate-300   '>
        <img className='w-full object-cover carouselClass' src='https://www.gonoise.com/cdn/shop/files/Aura-Dekstop.gif?v=1718079959'></img>
        <img className='w-full object-cover carouselClass' src='https://www.gonoise.com/cdn/shop/files/Dekstop_7608a3be-2714-4844-92dc-75990d210667.webp?v=1719837310'></img>
        <img className='w-full object-cover carouselClass' src='https://www.gonoise.com/cdn/shop/files/OriginLaunch-Dekstop.webp?v=1717567737'></img>
        <img className='w-full object-cover carouselClass' src='https://www.gonoise.com/cdn/shop/files/Dekstop_dfcada90-7402-43b7-b8be-76febab545ab.webp?v=1719718234'></img>
      </div>
    </div>
  )
}

export default Carousel