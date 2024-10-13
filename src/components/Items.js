import React from 'react'

function Items() {
    return (
        <div className='w-[100%]  flex justify-around items-center h-[30vh] bg-white'>
            <div className='w-[85%]  flex justify-around items-center'>
                <div className='flex flex-col justify-center items-center cursor-pointer'>
                    <img className='h-[90px]' src='https://www.gonoise.com/cdn/shop/files/Artboard_1_eff0cb9e-6293-493f-ae86-3b55a16ee565.png?v=1715857047'></img>
                    <label className=' cursor-pointer text-[12px]'>Smartwatches</label>
                </div>
                <div className='flex flex-col justify-center h-10 items-center cursor-pointer'>
                    <img className='h-[90px] ' src='https://www.gonoise.com/cdn/shop/files/2._Wireless_Earbuds.png?v=1715857520'></img>
                    <label className='text-[12px] cursor-pointer  w-[50%] '>
                        Wireless Earbuds</label>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer'>
                    <img className='h-[90px]' src='https://www.gonoise.com/cdn/shop/files/3._Gift_Store.png?v=1715857521'></img>
                    <label className=' cursor-pointer text-[12px]'>
                        Gift Store</label>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer'>
                    <img className='h-[90px]' src='https://www.gonoise.com/cdn/shop/files/4._Stunning_Straps.png?v=1715857521'></img>
                    <label className=' cursor-pointer text-[12px]'>
                        Straps</label>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer'>
                    <img className='h-[90px]' src='https://www.gonoise.com/cdn/shop/files/5._Luna_Ring.png?v=1715857521'></img>
                    <label className=' cursor-pointer text-[12px]'>
                        Luna Ring</label>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer'>
                    <img className='h-[90px]' src='https://www.gonoise.com/cdn/shop/files/6._Headphones.png?v=1715857521'></img>
                    <label className=' cursor-pointer text-[12px]'>
                        Headphones</label>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer'>
                    <img className='h-[90px]' src='https://www.gonoise.com/cdn/shop/files/7._BT_Speakers.png?v=1715857521'></img>
                    <label className=' cursor-pointer text-[12px]'>
                        Speakers</label>
                </div>
            </div>
        </div>
    )
}

export default Items