import React, { useContext, useState } from 'react'
import { Context } from '../Pages/MyContext'

function Kart() {
    
   
    const {kartVisible,setkartVisible}=useContext(Context)
  return (
    <>
    {kartVisible &&
    <div className='w-[100%] h-[100vh] flex   fixed top-0 z-[10]'>
        <div   onClick={()=>setkartVisible(false)} className='w-[60%] blur h-full backdrop-blur-[1px] backdrop-brightness-50'></div>

       <div className='w-[40%] h-full bg-white'>
       <div className='border flex justify-between items-center w-[100%]'>
        <label className='self-start text-[28px] p-4 py-7 font-semibold'>Your Kart</label>
            <i onClick={()=>setkartVisible(false)}  className="fa fa-times text-[30px] p-3 cursor-pointer" aria-hidden="true"></i>
            </div>


            <div className="w-full border-b flex">
  <div className="w-[30%] flex justify-between items-center border p-4">
    <img src="https://www.gonoise.com/cdn/shop/products/NoiseColorFitPro2Smartwatch-IndiaNo.1SmartWearableBrand_11.png?v=1627585470" alt="" className="w-full scale-100 h-auto"></img>
  </div>
  <div className="w-[70%] p-4 ">
    <div className="flex justify-between items-center">
      <h2 className="text-[26px] font-bold">colorfit ColorFit Pro 2</h2>
      
       <img className="w-10 h-10  " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mdIHxFy_6Nvn1O3oXb4VbcPAio6n7xTrI5L6eJf-lC9Jnn4Q'></img>
   
    </div>
    <div className="flex items-center ">
      <span className="text-2xl font-bold">₹1,999</span>
      <span className="text-gray-500  line-through">₹4,999</span>
    </div>
    <div className="flex items-center w-[100%] justify-between ">
     <div className='flex items-center gap-4 mt-4 justify-between'> <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600  hover:bg-gray-300">-</button>
      <span className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600 ">1</span>
      <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300">+</button></div>
      <div className="">
      <span className="text-gray-600">Jet Black</span>
    </div>
    </div>
   
  </div>
</div>


       </div>
    </div>
    }
    </>
  )
}

export default Kart