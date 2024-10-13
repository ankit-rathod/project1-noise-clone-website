import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Pages/MyContext'
// import Register from './Register'


function Login() {
  const {loginVisible, setLoginVisible}=useContext(Context)
  const {registerVisible,setRegisterVisible}=useContext(Context)
  const {userData,setUserData}=useContext(Context)
  const {postData}=useContext(Context)
  const {getData}=useContext(Context)
  const [userLogin,setUserLogin]=useState({})
  useEffect(()=>{getData()},[])
  const [userObj,setUserObj]=useState({})
  
  

  const [hide,setHide]=useState(true)
  const [pass,setPass]=useState(true)


    const[flag,setFlag]=useState(false)
    const[focus,setFocus]=useState(false)


    const loginValidation=()=>{
      const customer=userData.filter((i,index)=>i.phone==userLogin.phone && i.password==userLogin.password)
      if(customer.length>0){
       localStorage.setItem("userPhone",userLogin.phone)
       alert("Credentials stored")
      }
      else{
        alert("Wrong Credentials")
      }
      
    }
   
   const registerValidation=()=>{

   if(userObj.phone == null || userObj.fullName==null || userObj.password ==null ){
    alert("enter valid data")
   }
   else{
    const user=userData.filter((i)=>i.phone==userObj.phone || i.email == userObj.email)
    if(user.length>0){
      alert("user already exist")
    }
    else{
      postData(userObj)
      setRegisterVisible(false)
      setHide(true)
      
    }
   }
   }
    
    return (

     <>
     {loginVisible &&
        <div className='fixed w-[100%]  z-[100] left-0 top-0 flex justify-end'>
   
            <div  onClick={()=>setLoginVisible(false)} className='absolute w-[100%] h-[100vh] bg-black opacity-70'></div>
         {hide &&   
            <div  className=' w-[30%]   h-[100vh] flex flex-col relative z-[1] bg-white'>

            <div className='border flex justify-end w-[100%]'>
            <i onClick={()=> setLoginVisible(false)} class="fa fa-times text-[30px] p-3 cursor-pointer" aria-hidden="true"></i>
            </div>
            <div className='w-[100%] flex  py-5 pl-11'>
                <label className='text-[30px] font-[700] '>Hello NoiseMaker!</label>
            </div>
            <div className='w-[100%] flex'>
                <label  style={{borderBottom: flag ? '3px solid black' : null,fontWeight:flag?'bold':null}}  onClick={()=>{setFlag(true);setFocus(false)}}  className=' cursor-pointer w-[50%] text-[14px] flex justify-center items-center border-b-2 p-4'>Phone Number</label>
                <label   style={{borderBottom: !flag ? '3px solid black' : null,fontWeight:!flag?'bold':null}}   onClick={()=>{setFlag(false);setFocus(false)}} className='w-[50%] text-[14px] flex justify-center items-center border-b-2 cursor-pointer p-4'>Email</label>
               
            </div>

    {flag &&

            <div onClick={()=>setFocus(true)}  className='w-[100%] flex relative cursor-text border-y-[1px] mt-10'>
                <input onChange={(e)=>setUserLogin({...userLogin,phone:e.target.value})} className='border-none h-[8vh] focus:outline-none pl-5 pt-3 z-[1000] bg-transparent w-[100%]' ></input>
                <label style={{top:focus?'0':null,left:focus?'20px':null,fontSize:focus?'12px':null }} className='absolute text-gray-700 duration-300 top-[25%] left-[5%] cursor-text'>Phone Number</label>
            </div>
}

{!flag &&

            <div onClick={()=>setFocus(true)}  className='w-[100%] flex relative cursor-text border-y-[1px] mt-10'>
                <input  onChange={(e)=>setUserLogin({email:e.target.value})}  className='border-none h-[8vh] focus:outline-none pl-5 pt-3 z-[1000] bg-transparent w-[100%]' ></input>
                <label style={{top:focus?'0':null,left:focus?'20px':null,fontSize:focus?'12px':null }} className='absolute text-gray-700 duration-300 top-[25%] left-[5%] cursor-text'>Email</label>
            </div>
}

<div className='flex justify-center items-center'><input placeholder='Password' type={pass?"password":"text"} onChange={(e)=>{setUserLogin({...userLogin,password:e.target.value})}} className='border-b border-t mt-4  h-[8vh] focus:outline-none pl-5 pt-3 z-[1000] bg-transparent w-[100%]'></input><i onClick={()=>setPass((value)=>!value)} class="fa fa-eye text-[20px]" aria-hidden="true"></i></div>

<div onClick={()=>loginValidation()} className='absolute w-[100%] border-y bottom-0 '><label className='rounded-full h-[6vh] w-[23%]  text-white bg-[#7F7F7F] flex justify-center items-center m-3'>LOGIN</label></div>
<div className='absolute w-[30%]  border-y flex bottom-0 right-0 '><label onClick={()=>{setRegisterVisible(true);setHide(false)}} className='rounded-full cursor-pointer h-[6vh] w-[100%]  text-white bg-[#7F7F7F] flex justify-center items-center m-3'>Register</label></div>
            </div>

}
           

{registerVisible &&
    <div className='h-[100vh] w-[100%] fixed left-0 '>

      <div className='h-[100vh] w-[100%]  bg-no-repeat bg-cover flex justify-center items-center bg-white'>
        <div className=' h-[100vh] bg-white flex flex-col items-center w-[40%]'>
          <div className='flex flex-col justify-center items-center pb-[40px] gap-4 '>
            <label className='text-[30px] font-bold'>Sign Up</label>
            <label className='text-[14px] text-gray-500 font-medium'>Create your account to get full access

            </label>
          </div>

          <div className='w-[100%] flex flex-col justify-center gap-16 items-center'>


            <div className='flex gap-2 flex-col w-[90%] items-center '>
             
              <label className='text-[17px]  font-semibold self-start'>Full Name</label>
              <input  onChange={(e)=>setUserObj({...userObj,fullName:e.target.value})} placeholder='Enter Full Name' className='px-6 box-border border-[1px] h-14 focus:outline-none border-gray-300 w-[100%]'></input>
              <label className='text-[17px]  font-semibold self-start'>Phone</label>
              <input onChange={(e)=>setUserObj({...userObj,phone:e.target.value})} placeholder='Enter Full Name' className='px-6 box-border border-[1px] h-14 focus:outline-none border-gray-300 w-[100%]'></input>
              <label className='text-[17px]  font-semibold self-start'>Email Address</label>
              <input type='email' onChange={(e)=>setUserObj({...userObj,email:e.target.value})} placeholder='Enter email address' className='px-6 box-border  border-[1px] focus:outline-none h-14 border-gray-300 w-[100%]'></input>
              <label className='text-[17px]  font-semibold self-start'>Password</label>
              <input  onChange={(e)=>setUserObj({...userObj,password:e.target.value})} placeholder='Enter Password' className='px-6 box-border border-[1px] h-14 focus:outline-none border-gray-300 w-[100%]'></input>
             
            </div>

            <div className='flex justify-between w-[90%]'>
              <label className='text-[14px] text-gray-500 font-semibold'>Already have an account?<span onClick={()=>{setRegisterVisible(false);setHide(true)}} className='cursor-pointer text-[#FD8F5F]'> Login </span>here</label>
              <button onClick={()=>{registerValidation()}}  className='h-[50px] font-semibold w-[130px] bg-[#7F7F7F] text-white '>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>}


        </div>}
       
</>

    )
}

export default Login