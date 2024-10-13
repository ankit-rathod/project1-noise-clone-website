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


function ShowProduct() {
  const navigate=useNavigate()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [deleteObj,setDeleteObj]=useState({})
 
    const [showProduct,setShowProduct]=useState(false)
    const {deleteProduct}=useContext(Context)
    // const {postProductData}=useContext(Context)
    const {productData}=useContext(Context)
  return (
    <div className='w-[100%]  flex '>
  <SideBar></SideBar>
        
         
    <div className='w-[80%]' >
      <div><Header></Header></div>
      <div className='flex flex-col '>
        
        <div className='my-10'>
        <div>
        <h2 class="text-xl font-bold">All Products </h2>
        <p class="text-gray-500 text-sm">Here are all the products of your firm</p>
      </div>
        <div class="flex flex-col justify-between items-center mt-4">
    
      <div className='w-full'>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Image</TableCell>
            <TableCell >Title</TableCell>
            <TableCell >Original Price</TableCell>
            <TableCell >Selling Price</TableCell>
            <TableCell >Discount</TableCell>
            <TableCell >Category</TableCell>
            <TableCell >Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productData.map((i) => (
            <TableRow
              key={i.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="i">
              <img src={i.images[0]} className='h-10 w-10'></img>
              </TableCell>
              <TableCell >{i.title}</TableCell>
              <TableCell >{i.originalPrice}</TableCell>
              <TableCell >{i.originalPrice-Math.floor(i.originalPrice*(i.discount/100))}</TableCell>
              <TableCell >{i.discount}%</TableCell>
              <TableCell >{i.category}</TableCell>
              <TableCell >
              
   
      <Chip
        label="Delete"   
        deleteIcon={<DeleteIcon />}
       onClick={{handleOpen}}
        variant="outlined"
      />
         
        
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            This product will Permanently delete from Database
            </Typography>
            <Typography id="transition-modal-description" className='flex flex-col' sx={{ mt: 2 }}>
              If yes click I am Sure 
             
              <button className='border bg-[#4F54C8] text-white' onClick={()=>{deleteProduct();handleClose()}}>I am Sure</button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    
    </TableContainer>
        
      </div>
    
    </div>
          
        </div>
     
    
       
       
         
        
          
         
         
       
    
    
          </div>
          </div>
          <div>
  
    </div>
            
       </div>
  )
}

export default ShowProduct