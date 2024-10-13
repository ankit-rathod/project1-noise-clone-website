import React, { useContext, useState } from 'react'

import { Context } from '../Pages/MyContext';
import { useNavigate } from 'react-router-dom';
 
function SideBar() {
    const navigate=useNavigate()
 
    const [showProduct,setShowProduct]=useState(false)

  return (
    <div className='w-[20%]'>
    <div class="flex items-center p-4">
      <img src="https://cdn-icons-png.flaticon.com/512/6830/6830335.png" alt="" class="h-20 w-20" />
      <span class="ml-2 text-[40px] font-bold text-[#654CCE]">Admin</span>
    </div>
    <div class="flex items-center p-4">
      <div  class="h-3 w-3 rounded-full  border" ></div>
      <span onClick={()=>navigate("/customerList")} class="ml-2 text-[25px] font-bold cursor-pointer text-gray-700">Customers</span>
    </div>
    <div onClick={()=>setShowProduct((value)=>!value)} class=" flex cursor-pointer justify-between items-center p-4">
     <div className='flex justify-between items-center'>
     <div  style={{backgroundColor:showProduct?"#654CD0":null}} class="h-3 w-3 rounded-full  border" ></div>
     <span class="ml-2 text-[25px] font-bold text-gray-700">Products</span>
     </div> 
      <i class="fa fa-ari-right" aria-hidden="true"></i>
    
    </div>
    
    {showProduct &&
    <div className=''>
    
    <div onClick={()=>navigate("/showProduct")} class="flex items-center pl-4">
      <div  class="h-2 w-2 rounded-full border-black border" ></div>
      <span class="ml-2 text-[20px] font-bold text-gray-500">Product List</span>
    </div>
    <div onClick={()=>navigate("/products")} class="flex items-center pl-4">
      <div  class="h-2 w-2 rounded-full border-black border" ></div>
      <span class="ml-2 text-[20px] font-bold text-gray-500">Add Product</span>
    </div>
    <div onClick={()=>navigate("/productCategory")} class="flex items-center pl-4">
      <div  class="h-2 w-2 rounded-full border-black border" ></div>
      <span class="ml-2 text-[20px] font-bold text-gray-500">Category List</span>
    </div>
    
    </div>
    }
    </div>
  )
}

export default SideBar