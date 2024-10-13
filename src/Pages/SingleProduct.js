import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Description from '../components/Description'
import Footer from '../components/Footer'

function SingleProduct() {
    const getProduct=localStorage.getItem("clickedProduct")
    const clickedProduct=JSON.parse(getProduct)
    const [shift, setShift] = useState(0)
    const [count, setCount] = useState(1)
    useEffect(()=>{
        setTimeout(()=>{
            if (shift == 300){
                setShift(0)
            }
            else{

                setShift(shift+75)
            }
        },4000)

    }, [shift])
    return (
        <div>
            <Header></Header>
            <div className='w-[100%] flex '>
                <div className='w-[58%] border'>

                    <div className='w-[100%] flex p-5 bg-[#F5F5F5]'>
                        <label className='text-[gray] text-[14px]'>Home {">"}  </label>
                        <label className='text-[gray] text-[14px]'>  Smart Watches {">"}  </label>
                        <label className='text-[black] text-[14px]'>  Color fit noise watch pro {shift} </label>
                    </div>

                    <div className='w-[100%] h-[80vh] justify-center overflow-hidden items-center relative bg-[#F5F5F5]     flex'>
                        <div className='w-[20%] absolute h-[2vh] bottom-5 gap-2  flex justify-center items-center z-[1]'>

                            <div style={{backgroundColor: shift==0 ?"black" :"gray"}} onClick={() => setShift(0)} className='    w-[10px] h-[10px] rounded-full  bg-white cursor-pointer'></div>
                            <div style={{backgroundColor: shift==75 ?"black" :"gray"}} onClick={() => setShift(75)} className='  w-[10px] h-[10px] rounded-full  bg-white cursor-pointer'></div>
                            <div style={{backgroundColor: shift==150 ?"black" :"gray"}} onClick={() => setShift(150)} className='w-[10px] h-[10px] rounded-full  bg-white cursor-pointer'></div>
                            <div style={{backgroundColor: shift==225 ?"black" :"gray"}} onClick={() => setShift(225)} className='w-[10px] h-[10px] rounded-full  bg-white cursor-pointer'></div>



                        </div>


                        <div className='h-[50px] w-[50px] rounded-full  z-10 right-0 cursor-pointer flex justify-center  items-center  top-[40%] text-[20px] absolute'><img src='https://cdn.shopify.com/s/files/1/0997/6284/files/next.png?v=1674474554'></img>
                        </div>
                        <div className='h-[50px] w-[50px] rounded-full  z-10 left-0 flex justify-center  items-center cursor-pointer text-[20px] top-[40%] absolute'><img src='https://cdn.shopify.com/s/files/1/0997/6284/files/prev_56faeed5-24a4-4538-8c25-ad8f567329dd.png?v=1674553219'></img>
                        </div>


                        <div style={{ transform: `translateX(-${shift}%)` }} className={`w-[500%] p-5 flex ${shift>0 ? 'duration-500' : null } `}>
                            <img className='w-[100%] h-[100vh] scale-[.5] ' src={clickedProduct.images[0]}></img>
                            <img className='w-[100%] h-[100vh] scale-[.5] ' src={clickedProduct.images[1]}></img>
                            <img className='w-[100%] h-[100vh] scale-[.5] ' src={clickedProduct.images[2]}></img>
                            <img className='w-[100%] h-[100vh] scale-[.5] ' src={clickedProduct.images[3]}></img>
                            <img className='w-[100%] h-[100vh] scale-[.5] ' src={clickedProduct.images[0]}></img>
                        </div>
                    </div>




                </div>





                <div className='w-[42%] flex flex-col items-center'>



                    <div className='w-[100%] flex justify-between p-4 text-[28px] font-bold items-center'>
                        <label >{clickedProduct.title}</label>
                        <label className='text-[20px] font-bold'>4.9</label>
                    </div>
                    <div className='w-[100%] flex  px-4 p text-[24px] font-bold items-center'>
                        <label className='text-[24px] flex justify-between font-bold'><label>Rs {Math.floor(clickedProduct.originalPrice*clickedProduct.discount/100)} <span className='text-gray-400 text-[20px] line-through	'>Rs {clickedProduct.originalPrice}</span> </label></label>

                    </div>
                    <label className='text-[14px] px-4 text-gray-300  self-start'>Inclusive of all taxes

                    </label>

                    <div className='w-[95%] mt-6 p-2 px-5 border relative bg-[#22D143] flex justify-between items-center rounded-2xl text-white'>
                        
                        <div className='absolute h-[80%] right-0 w-[15%] bg-white walkerDiv'></div>

                        <label>Super Saver Deal <span className='font-bold text-[20px]'>{clickedProduct.discount}% OFF </span></label>

                        <label>Timer</label>
                    </div>


                    <div className='w-[100%] flex flex-col justify-center mt-10 items-center border'>
                        <label  className='self-start font-semibold px-3 '> <span className='text-gray-400 font-bold'>Colour</span> Multicolor</label>
                        
                        <div  className='w-[100%] p-5 justify-between  flex  '>
                            <img className=' w-[20%] cursor-pointer  scale-90' src={clickedProduct.images[0]}></img>
                            <img className=' w-[20%] cursor-pointer  scale-90' src={clickedProduct.images[1]}></img>
                            <img className=' w-[20%] cursor-pointer  scale-90' src={clickedProduct.images[2]}></img>
                            <img className=' w-[20%] cursor-pointer  scale-90' src={clickedProduct.images[3]}></img>
                        </div>
                        
                    </div>


                    <div className="flex justify-between w-[100%] border items-center gap-4">
  <div className="flex items-center">
    <span className="text-gray-500 text-[14px] font-bold p-4">QUANTITY</span>
    <button onClick={()=>setCount((value)=>value==2?value-1:value)} className="border h-[30px] w-[30px] flex justify-center items-center  rounded-full p-2">-
    </button>
    <span  className="text-gray-700 font-medium p-4"> {count} </span> 
    <button onClick={()=>setCount((value)=>value<2?value+1:value)} className="border h-[30px] w-[30px] flex justify-center items-center rounded-full p-2">+
    </button>
  </div>
  <button className="bg-black text-white font-bold py-2 px-4 rounded-full">Buy Now</button>
</div>



<div className='w-full flex justify-between items-center h-[4vh] mt-9 p-3'>
<div>
  <h2 className="text-[14px] text-gray-400 font-medium mb-2">Check delivery date</h2>
  <p className="mb-4 text-[12px] text-gray-600 ">Enter Pincode to check estimated delivery date</p>
  </div>


<div className='border rounded-full h-[7vh] flex justify-between items-center pl-2'>
    <input className='focus:outline-none' placeholder='Enter Pincode '></input>
    <button className='bg-slate-700 rounded-full text-white p-2'>Check</button>
</div>

</div>


<div class="flex justify-around items-center w-[100%] mt-10 border-y text-center  p-4 gap-10">
  <div className='p-3 flex flex-col justify-center items-center gap-4'>
    <img src="https://www.gonoise.com/cdn/shop/files/rupee_square_5ee889ca-710c-4b9d-baae-16adab9d84d4.svg?v=1684401789" alt="7 day replacement" className="" />
    <p className="text-[14px] font-medium w-[40%] ">7 day replacement</p>
  </div>
  <div className='p-3 flex flex-col justify-center items-center gap-4'>
    <img src="https://www.gonoise.com/cdn/shop/files/Document_verified_-_1_398219e2-8134-4693-a498-58635f9c03d7.svg?v=1684401789" alt="1 year warranty" className="" />
    <p className="tex[14px] font-medium w-[40%] ">1 year warranty</p>
  </div>
  <div className='p-3 flex flex-col justify-center items-center gap-4'>
    <img src="https://www.gonoise.com/cdn/shop/files/Shield_Done_04409ec8-3d1b-414b-96f8-7d2211b7f52f.svg?v=1684401789" alt="Secure payment" className="" />
    <p className="te[14px] font-medium w-[40%] ">Secure payment</p>
  </div>
</div>


                </div>
            </div>

            <Description></Description>
            <Footer></Footer>
        </div>
    )
}

export default SingleProduct