import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const Context = createContext()
function MyContext({ children }) {
  React.useEffect(() => { getData() }, [])
  React.useEffect(() => { getProductData() }, [])

  const [loginVisible, setLoginVisible] = useState(false)
  
  const [userData, setUserData] = useState([])
  const [productData, setProductData] = useState([])
  const [kartVisible, setkartVisible] = useState(false)
  const [registerVisible, setRegisterVisible] = useState(false)


  
const deleteProduct=(id)=>{
  axios.delete("http://localhost:5001/api/productDetail/"+id).then((res)=>{alert("Product Deleted");getProductData()})
}

  const postData = (obj) => {
    axios.post("http://localhost:5001/api/customerDetail", obj).then((res) => alert("data posted"))
  }
  const postProductData = (obj) => {
    axios.post("http://localhost:5001/api/productDetail", obj).then((res) => alert("Product added to the list posted"))
  }
  const getData = () => {
    axios.get("http://localhost:5001/api/customerDetail").then((res) => setUserData(res.data.data))

  }
  const getProductData = () => {
    axios.get("http://localhost:5001/api/productDetail").then((res) => setProductData(res.data.data))

  }

  return (
    <Context.Provider value={{ loginVisible,productData,deleteProduct, postProductData,setLoginVisible, kartVisible, setkartVisible, userData, setUserData, registerVisible,setProductData, setRegisterVisible, postData, getData }}>
      {children}
    </Context.Provider>
  )
}

export default MyContext