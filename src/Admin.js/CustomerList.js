import React, { useContext, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from './Header';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import { Context } from '../Pages/MyContext';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Customer from './Customer';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};


function CustomerList() {
  const navigate=useNavigate()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
    const [showProduct,setShowProduct]=useState(false)
    const {deleteProduct}=useContext(Context)
    // const {postProductData}=useContext(Context)
    const {productData}=useContext(Context)
  return (
    <div className='w-[100%]  flex '>
   <SideBar></SideBar>
         
    <div className='w-[80%] flex flex-col items-center' >
      <div className='w-[100%]'><Header></Header></div>
      <div className='flex flex-col items-center w-[100%]'>
        
      
        <div className='mt-10 w-[100%] '>
        <h2 class="text-xl font-bold">All Customers </h2>
        <p class="text-gray-500 text-sm">Here are all the Customers of your firm</p>
      </div>
     <div className='mt-10 w-[80%]'>
       <Customer></Customer>
     </div>
          
        
     
    
       
       
         
        
          
         
         
       
    
    
          </div>
          </div>
          <div>
  
    </div>
            
       </div>
  )
}

export default CustomerList