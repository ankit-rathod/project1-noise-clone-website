import React, { useContext, useState } from 'react'


import { useNavigate } from 'react-router-dom'
import MyContext, { Context } from '../Pages/MyContext'
import Login from './Login'
import Kart from './Kart'
// import Register from './Register'




function Header() {
  const {loginVisible,setLoginVisible}=useContext(Context)
  const {kartVisible,setkartVisible}=useContext(Context)
  const {registerVisible,setRegisterVisible}=useContext(Context)

 const navigate=useNavigate("")
  return (
    <div className='h-[9vh]'>
    <div className='w-[100%] bg-black fixed h-[9vh] z-[10] flex justify-center items-center'>
    <div className='text-white items-center h-[9vh] font-semibold text-[16px] w-[93%] bg-black  flex justify-around'>
   
   
    <div className=''><img className='h-5' src='https://www.gonoise.com/cdn/shop/files/Group_4_df1f4045-5a8c-4b00-94bb-a6622f06f7da.png?v=1696847023'></img></div>

    <div className='flex h-[100%] w-[60%] self-center justify-center items-center'>
        <div onClick={()=>{navigate("/allProduct")}} className='hover:border-b-2 h-[100%]  duration-100 hover:text-gray-300 flex justify-center items-center w-[20%] '><label className='cursor-pointer'>Products</label></div>
        <div className='hover:border-b-2 h-[100%]  duration-100 hover:text-gray-300 flex justify-center items-center w-[20%] '><label className='cursor-pointer'>Luna Ring</label></div>
        <div className='hover:border-b-2 h-[100%]  duration-100 hover:text-gray-300 flex justify-center items-center w-[20%] '><label className='cursor-pointer'>Gift Store</label></div>
        <div className='hover:border-b-2 h-[100%]  duration-100 hover:text-gray-300 flex justify-center items-center w-[20%] '><label className='cursor-pointer'>Support</label></div>
        <div className='hover:border-b-2 h-[100%]  duration-100 hover:text-gray-300 flex justify-center items-center w-[20%] '><label className='cursor-pointer'>Blogs</label></div>
    </div>
        
        
        <div className='flex gap-7 font-thin justify-center items-center text-[20px]'>
        <i class="fa fa-search" aria-hidden="true"></i>
          <div className='relative '>
          <i  onClick={()=>setkartVisible(true)} class="fa fa-suitcase" aria-hidden="true"></i> 
          <div className='h-[15px] absolute top-1 right-[-4px] w-[15px] rounded-full bg-red-600 text-white text-[10px] flex justify-center items-center'>1</div>
          </div>
       
        <i onClick={()=>setLoginVisible(true)} class="fa fa-user" aria-hidden="true"></i>
        
       </div>
      
      </div>
    </div>

    <Login></Login>
   
    <Kart></Kart>
   
    

    </div>
  )
}


export default  Header