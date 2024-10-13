import React, { useContext, useState } from 'react'

import Header from './Header';
import { Context } from '../Pages/MyContext';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';


function ProductCategory() {
    const {productData}=useContext(Context)
    
    const list = productData.map((i)=>i.category);

        const categories=[...new Set(list)]
        const [category,setCategory]=useState("")
 

  return (
      <div className='w-[100%]  flex '>
<SideBar></SideBar>


     
<div className='w-[80%]' >
  <div><Header></Header></div>
  <div className='flex flex-col '>
  

    <div class="flex justify-between flex-col w-full items-center mt-4">
  <div className='w-full'>
    <h2 class="text-xl font-bold">Product Categories</h2>{JSON.stringify(categories)}
    <p class="text-gray-500 text-sm">These are the categories of product of your firm</p>
  </div>
  
    
<div class="container mt-10 flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
    <ul class="flex flex-wrap divide-y divide">
      {categories.map((i)=>
        <li class="flex flex-row">
            <div class="flex items-center flex-1 p-4 cursor-pointer ">
               
                <div onClick={()=>setCategory(i)} class="flex-1 pl-1 mr-16">
                    <div class="font-medium dark:text-white">
                       {i}
                    </div>
                 
                </div>
              
            </div>
        </li>
      )}
      
    </ul>
</div>
<div className='flex w-full p-10'>
{(productData.filter((i)=>i.category==category)).map((i)=>



<div className='w-[200px] h-[200px] flex  shadow-lg gap-4'>

<img src={i.images[0]}></img>



</div>
)}</div>
  </div>
  

      
    </div>
  

   
      
     
    
      
     
     
   


 
      </div>
</div>
  )
}

export default ProductCategory