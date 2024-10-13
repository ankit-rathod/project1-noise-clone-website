import React from 'react'

function HoverProduct() {
    return (
        <div className='w-[80%]  flex'>



            <div class="flex w-[30%] flex-col ">
                <div class="bg-white  px-20 gap-2 w-[100%]   p-4  flex border  items-center">
                    <img src="https://www.gonoise.com/cdn/shop/files/nav-smart-watches.png?v=7859754826605404333" alt="Image 1" class="  w-[50px] h-[50px] object-cover rounded-md" />
                    <label class="text-[15px] font-bold">Smart Watches</label>
                </div>
                <div class="bg-white px-20 gap-4 w-[100%] p-4 flex border   items-center">
                    <img src="https://www.gonoise.com/cdn/shop/files/nav-wireless-earbuds.png?v=14530219236254721477" alt="Image 1" class=" self-start w-[50px] h-[50px] object-cover rounded-md" />

                    <label class="text-[15px] font-bold">Audio</label>
                </div>
                <div class="bg-white px-20 gap-4 w-[100%] p-4 flex border  items-center">
                    <img src="https://www.gonoise.com/cdn/shop/files/nav-accessories.png?v=18287205615061941850" alt="Image 1" class="  w-[50px] h-[50px] object-cover rounded-md" />

                    <label class="text-[15px] font-bold">Accessories</label>
                </div>
                <div class="bg-white px-20 gap-4 w-[100%] p-4 flex border  items-center">
                    <img src="https://www.gonoise.com/cdn/shop/files/nav-noise-junior.png?v=11558008967266599719" alt="Image 1" class="  w-[50px] h-[50px] object-cover rounded-md" />

                    <label class="text-[15px] font-bold">Noise Junior</label>
                </div>
            </div>


            <div className='w-[50%] flex-wrap flex   bg-gray-100'>
                <div className='flex flex-col gap-4 justify-between border items-center '>
                    <div className='w-[80%] flex justify-between  items-center'>
                        <label>Bestsellers</label>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>

                    </div>
                    <div className='flex h-full justify-center items-end w-[100%]'>
                        <label className='w-[50%]'>Something for everyone</label>
                        <img src="https://www.gonoise.com/cdn/shop/files/nav-smart-watches.png?v=7859754826605404333" alt="Image 1" class="  w-[100px] h-[100px] object-cover rounded-md" />

                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-between border items-center '>
                    <div className='w-[80%] flex justify-between  items-center'>
                        <label>Bestsellers</label>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>

                    </div>
                    <div className='flex h-full justify-center items-end w-[100%]'>
                        <label className='w-[50%]'>Something for everyone</label>
                        <img src="https://www.gonoise.com/cdn/shop/files/Pro-5-carousel-images-1-min_c56ccd64-1d5a-4a26-bbf6-270bf289af83.png?v=1702964374" alt="Image 1" class="  w-[100px] h-[100px] object-cover rounded-md" />

                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-between border items-center '>
                    <div className='w-[80%] flex justify-between  items-center'>
                        <label>Bestsellers</label>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>

                    </div>
                    <div className='flex h-full justify-center items-end w-[100%]'>
                        <label className='w-[50%]'>Something for everyone</label>
                        <img src="https://www.gonoise.com/cdn/shop/files/Mettle-carousel-4-min_bb515f7b-d775-4a51-9b29-9c1649edc3f7.png?v=1702964415" alt="Image 1" class="  w-[100px] h-[100px] object-cover rounded-md" />

                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-between border items-center '>
                    <div className='w-[80%] flex justify-between  items-center'>
                        <label>Bestsellers</label>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>

                    </div>
                    <div className='flex h-full justify-center items-end w-[100%]'>
                        <label className='w-[50%]'>Something for everyone</label>
                        <img src="https://www.gonoise.com/cdn/shop/files/NoiseFitForce-JetBlack-1_210fde4b-5ae5-485f-99b7-bd6edf6244ee.png?v=1702964451" alt="Image 1" class="  w-[100px] h-[100px] object-cover rounded-md" />

                    </div>
                </div>
            </div>



        </div>
    )
}

export default HoverProduct