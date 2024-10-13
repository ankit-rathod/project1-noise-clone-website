import React from 'react'

function EnterEmail() {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center bg-white border-y '>
            <div className='w-[50%] h-[100vh]  border'><img className='w-[100%] h-[99%]' src='https://www.gonoise.com/cdn/shop/files/tapsee_desktop_765x.jpg?v=1703575421'></img></div>
          <div className='flex flex-col justify-center gap-10 items-center w-[50%] '>
            <label className='text-[60px] font-bold'>Hear the Noise first</label>
            <label className=' text-[16px] w-[70%] text-center font-normal'>Sign up now to hear about our latest offers, new products, collaborations, all things Noise - straight to your inbox.    </label>
            <input className='w-[70%] pt-10 focus:outline-none text-center border-b-[1px] placeholder:text-center  placeholder:text-[20px]' placeholder='Your Email Here'></input>
            <div className='w-[25%] h-[7vh] rounded-full border-[1px] border-black flex justify-center items-center'>SIGN UP</div>
          </div>
        </div>
  )
}

export default EnterEmail