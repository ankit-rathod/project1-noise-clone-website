import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Header from './Header';
import { Context } from '../Pages/MyContext';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';

function Products() {
  const navigate = useNavigate()
  const [imageList, setImageList] = useState([])
  const [image, setImage] = useState("")
  const [productObj, setProductObj] = React.useState({ images: [] })
  const [showProduct, setShowProduct] = useState(false)
  const { postProductData } = useContext(Context)

const discard=()=>{
  setImage("")
  setProductObj({images:[]})
}

  return (
    <div className='w-[100%]  flex '>
      <SideBar></SideBar>


      <div className='w-[80%]' >
        <div><Header></Header></div>
        <div className='flex flex-col '>
          <div className='my-10'>

            <div class="flex justify-between items-center mt-4">
              <div>
                <h2 class="text-xl font-bold">Add a new Product</h2>
                <p class="text-gray-500 text-sm">Orders placed across your store</p>
              </div>
              <div class="flex space-x-4">
                <button onClick={()=>discard()} class="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Discard</button>
                <button class="bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-md shadow-sm hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save draft</button>
                <button onClick={() => { postProductData(productObj); setProductObj({ images: [] }) }} class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Publish product</button>
              </div>
            </div>

          </div>
          <div className='flex flex-col'>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >


              <TextField value={productObj.title ? productObj.title : ""} onChange={(e) => setProductObj({ ...productObj, title: e.target.value })}  id="filled-basic" label="Title" variant="filled"/>
              <TextField value={productObj.originalPrice?productObj.originalPrice:""} onChange={(e) => setProductObj({ ...productObj, originalPrice: e.target.value })} id="filled-basic" label="Price" variant="filled" />
              <TextField value={productObj.discount?productObj.discount:""} onChange={(e) => setProductObj({ ...productObj, discount: e.target.value })} id="filled-basic" label="Discount" variant="filled" />
            </Box>
            <div className=' flex w-full gap-5 ml-2 '>
              <TextField value={productObj.category?productObj.category:""} onChange={(e) => setProductObj({ ...productObj, category: e.target.value })} id="filled-basic" label="Category" variant="filled" />

              <TextField  value={image} onChange={(e) => setImage(e.target.value)} id="filled-basic" label="Image" variant="filled" />
              <Button onClick={() => setProductObj({ ...productObj, images: [...productObj.images, image] })} variant="contained" >
                Set
              </Button>
            </div>
          </div>


          <div className='w-[full] flex'> 
            

            <div className='m-10 w-1/2 shadow-lg'>
              <ImageList sx={{ width: 500, height: 120 }} cols={4} >
                {productObj.images.map((item) => (
                  <ImageListItem key={item}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={item}
                      alt={item}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
            <div className='flex w-full'>
             
              <div className='flex flex-col justify-center '>
                <label className='font-bold'>Title : {productObj.title}</label>
                <label className='font-bold'>Price : {productObj.originalPrice}</label>
                <label className='font-bold'>Discount : {productObj.discount}</label>
                <label className='font-bold'>Category : {productObj.category}</label>



              </div>
            </div>
          </div>








        </div>
      </div>

    </div>
  )
}

export default Products