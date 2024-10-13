import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { Context } from './MyContext'


function AllProduct() {
  const navigate = useNavigate("")
  const { loginVisible, setLoginVisible } = useContext(Context)

  const [sortBy, setSortBy] = useState(false)
  const [discount, setDiscount] = useState(false)
  const [rating, setRating] = useState(false)
  const { productData, setProductData } = useContext(Context)
  return (
    <div className='w-[100%] '>

      <Header></Header>
      <div className='w-[100%] flex '>
        <div className='w-[25%] border'>

          <div className='text-[36px] flex justify-between items-center m-4  font-bold'><label className='cursor-text'>Filters:</label><label className='text-[16px] font-[500] text-blue-600 cursor-pointer'>CLEAR ALL</label></div>


          <div onClick={() => { setSortBy((value) => !value) }} className='h-[6vh] border flex justify-between items-center p-6'><label className='font-bold text-[20px]'>Sort by</label><i style={{ transform: sortBy ? 'rotate(180deg)' : null }} className="fa fa-arrow-down duration-150" aria-hidden="true"></i>
          </div>

          {sortBy &&

            <div className='m-6'>


              <div className="flex text-[20px] flex-col gap-2">
                <label className="flex  items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5" ></input>
                  <span className="ml-2 text-gray-700">Featured</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Best selling</span>
                </label>
                <label className="flex items-center">
                  <input onClick={()=> setProductData(productData.sort((a,b)=> (a.originalPrice-(a.originalPrice*a.discount/100)) -  (b.originalPrice-(b.originalPrice*b.discount/100)))  )} type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Price, low to high</span>
                </label>
                <label className="flex items-center">
                  <input onClick={()=> setProductData(productData.sort((a,b)=> (b.originalPrice-(b.originalPrice*b.discount/100)) +  (a.originalPrice-(a.originalPrice*a.discount/100)))  )} type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Price, high to low</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Date, old to new</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Date, new to old</span>
                </label>
              </div>

            </div>
          }






          <div onClick={() => { setDiscount((value) => !value) }} className='h-[6vh] border flex justify-between items-center p-6'><label className='font-bold text-[20px]'>Discount</label><i style={{ transform: discount ? 'rotate(180deg)' : null }} className="fa fa-arrow-down duration-150" aria-hidden="true"></i>
          </div>

          {discount &&

            <div className='m-6'>


              <div className="flex text-[20px] flex-col gap-2">
                <label className="flex  items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5" ></input>
                  <span className="ml-2 text-gray-700">Discount of 20%</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Discount of 30%</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Discount of 40%</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Discount of 50%</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Discount of 60% and above</span>
                </label>

              </div>

            </div>
          }
          <div onClick={() => { setRating((value) => !value) }} className='h-[6vh] border flex justify-between items-center p-6'><label className='font-bold text-[20px]'>Rating</label><i style={{ transform: rating ? 'rotate(180deg)' : null }} className="fa fa-arrow-down duration-150" aria-hidden="true"></i>
          </div>

          {rating &&

            <div className='m-6'>


              <div className="flex text-[20px] flex-col gap-2">
                <label className="flex  items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5" ></input>
                  <span className="ml-2 text-gray-700">Rating above 4.0 <i className="fa fa-star text-[#ffff0096]" aria-hidden="true"></i></span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Rating above 4.2 <i className="fa fa-star text-[#ffff0096]" aria-hidden="true"></i></span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Rating above 4.4 <i className="fa fa-star text-[#ffff0096]" aria-hidden="true"></i></span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">Rating above 4.6 <i className="fa fa-star text-[#ffff0096]" aria-hidden="true"></i></span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sort" className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-5 w-5"></input>
                  <span className="ml-2 text-gray-700">5 <i className="fa fa-star text-[#ffff0096]" aria-hidden="true"></i> Rating
                  </span>
                </label>

              </div>

            </div>
          }



        </div>
        <div className='w-[75%] border'>

          <div className='text-[36px] flex justify-between items-center p-4 border font-bold'><label className='cursor-text'>All</label><label className='text-[16px] font-[500] text-gray-400 cursor-pointer'><label onClick={() => navigate("/")} className='hover:text-[gray] cursor-pointer'>Home  {">"}  </label><label className='hover:text-[gray] cursor-pointer'>Collection  {">"}</label><label className='text-black'>  All</label></label></div>
          <div className='w-[100%] flex gap-4 flex-wrap justify-center pt-4'>



            {productData.map((i) =>



              <div onClick={() => { navigate("/singleProduct"); localStorage.setItem("clickedProduct", JSON.stringify(i)) }} className='w-[30%] cursor-pointer border h-[75vh] bg-white'>

                <div className='w-[100%] h-[48vh] relative bg-[#F4F4F4] flex justify-center items-center'>
                  <label className='absolute left-2 font-bold text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 top-0'>SUPER SAVER</label>
                  <img className='h-[40vh]' src={i.images[0]}></img>
                </div>

                <div className='flex justify-around h-[25vh] mx-4 flex-col'>
                  <label className='text-[18px] font-bold'>{i.title}</label>
                  <label className='text-[15px] text-gray-600 '>{i.category}</label>
                  <label className='flex gap-1 '>
                    <div className='h-[20px] w-[20px] rounded-full bg-black'></div>
                    <div className='h-[20px] w-[20px] rounded-full bg-[#604939]'></div>
                    <div className='h-[20px] w-[20px] rounded-full bg-[#a5a2a0]'></div>
                    <div className='h-[20px] w-[20px] rounded-full bg-[#e47f37]'></div>
                  </label>
                  <label className='text-[20px] flex justify-between font-bold'><label>Rs {i.originalPrice - Math.floor(i.originalPrice * (i.discount / 100))}/- <span className='text-gray-400 text-[14px] line-through	'>Rs {i.originalPrice}/-</span> </label><label>rating</label></label>
                </div>
              </div>

            )}

          </div>



        </div>
      </div>


      <Footer></Footer>
    </div>

  )
}

export default AllProduct