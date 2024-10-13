import React, { useState } from 'react'

function Blogs() {

    const [shift,setShift]=useState(0)
  return (
    <div className='h-[80vh] w-[100%] border border-b-1 b-0 bg-[#FBFBFB]'>
    <div className='pl-[50px] w-[100%] border justify-between flex gap-10 items-center h-[11vh]'>
       <div className='w-[40%] flex gap-6 jusy items-center'>
         <label className='text-[24px] font-bold'>Noise Blogs</label>
       <label className='text-blue-500'>View all {">"}</label></div>

      
    </div>
    
<div className='w-[100%] flex h-[69vh] relative overflow-hidden  gap-6 pl-7 '>

<div onClick={()=>{setShift(-22)}} className='h-[50px] w-[50px] rounded-full  z-10 right-0 cursor-pointer flex justify-center text-white items-center  top-[40%] text-[20px] bg-slate-600 absolute'><i class="fa fa-arrow-right" aria-hidden="true"></i>
</div>
<div onClick={()=>{shift !==0 && setShift(0)}} className='h-[50px] w-[50px] rounded-full  z-10 left-0 flex justify-center text-white items-center cursor-pointer text-[20px] top-[40%] bg-slate-600 absolute'><i class="fa fa-arrow-left" aria-hidden="true"></i>
</div>

    <div  style={{transform:`translateX(${shift}%)`}} className='flex gap-6 w-[100%]'>

 
<div className='w-[100%] flex justify-center items-center h-[69vh]'>
<div class=" overflow-hidden  shadow-lg cursor-pointer h-90 w-60">
    <a >
     <div className='overflow-hidden'><img className="object-cover duration-500 hover:scale-[1.5] blogHover w-full max-h-40" src="https://www.gonoise.com/cdn/shop/files/1188x1038_ba38f3b5-e6ec-47ed-8b60-9537e9290b2f_360x.png?v=1716790637" /></div>   
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
                Article
            </p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Supercharged !
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
            </p>
            <div class="flex flex-wrap items-center mt-4 justify-starts">
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Car
                </div>
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Money
                </div>
            </div>
        </div>
    </a>
</div>
</div>
<div className='w-[100%] flex justify-center items-center h-[69vh]'>
<div class=" overflow-hidden  shadow-lg cursor-pointer h-90 w-60">
    <a >
     <div className='overflow-hidden'><img className="object-cover duration-500 hover:scale-[1.5] blogHover w-full max-h-40" src="https://www.gonoise.com/cdn/shop/files/1188x1038_51e0c815-15ff-4a05-9845-6c5ccb01e278_360x.jpg?v=1713205829" /></div>   
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
                Article
            </p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Supercharged !
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
            </p>
            <div class="flex flex-wrap items-center mt-4 justify-starts">
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Car
                </div>
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Money
                </div>
            </div>
        </div>
    </a>
</div>
</div>
<div className='w-[100%] flex justify-center items-center h-[69vh]'>
<div class=" overflow-hidden  shadow-lg cursor-pointer h-90 w-60">
    <a >
     <div className='overflow-hidden'><img className="object-cover duration-500 hover:scale-[1.5] blogHover w-full max-h-40" src="https://www.gonoise.com/cdn/shop/files/Main-1_360x.png?v=1707382382" /></div>   
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
                Article
            </p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Supercharged !
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
            </p>
            <div class="flex flex-wrap items-center mt-4 justify-starts">
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Car
                </div>
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Money
                </div>
            </div>
        </div>
    </a>
</div>
</div>
<div className='w-[100%] flex justify-center items-center h-[69vh]'>
<div class=" overflow-hidden  shadow-lg cursor-pointer h-90 w-60">
    <a >
     <div className='overflow-hidden'><img className="object-cover duration-500 hover:scale-[1.5] blogHover w-full max-h-40" src="https://www.gonoise.com/cdn/shop/files/Evolve_4_360x.png?v=1702363342" /></div>   
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
                Article
            </p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Supercharged !
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
            </p>
            <div class="flex flex-wrap items-center mt-4 justify-starts">
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Car
                </div>
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Money
                </div>
            </div>
        </div>
    </a>
</div>
</div>
<div className='w-[100%] flex justify-center items-center h-[69vh]'>
<div class=" overflow-hidden  shadow-lg cursor-pointer h-90 w-60">
    <a >
     <div className='overflow-hidden'><img className="object-cover duration-500 hover:scale-[1.5] blogHover w-full max-h-40" src="https://www.gonoise.com/cdn/shop/files/Sleep_1_360x.png?v=1702363419" /></div>   
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
                Article
            </p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Supercharged !
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
            </p>
            <div class="flex flex-wrap items-center mt-4 justify-starts">
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Car
                </div>
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Money
                </div>
            </div>
        </div>
    </a>
</div>
</div>
<div className='w-[100%] flex justify-center items-center h-[69vh]'>
<div class=" overflow-hidden  shadow-lg cursor-pointer h-90 w-60">
    <a >
     <div className='overflow-hidden'><img className="object-cover duration-500 hover:scale-[1.5] blogHover w-full max-h-40" src="https://www.gonoise.com/cdn/shop/files/Yoga_360x.png?v=1702363484" /></div>   
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
                Article
            </p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Supercharged !
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
            </p>
            <div class="flex flex-wrap items-center mt-4 justify-starts">
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Car
                </div>
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Money
                </div>
            </div>
        </div>
    </a>
</div>
</div>

</div>




</div>




</div>
  )
}

export default Blogs