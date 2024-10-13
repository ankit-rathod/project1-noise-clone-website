
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import AllProduct from './Pages/AllProduct';
import SingleProduct from './Pages/SingleProduct';
import MyContext from './Pages/MyContext';
import Customer from './Admin.js/Customer';
import Products from './Admin.js/Products';
import ShowProduct from './Admin.js/ShowProduct';
import CustomerList from './Admin.js/CustomerList';
import ProductCategory from './Admin.js/ProductCategory';




function App() {
  return (
    <MyContext>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/allProduct' element={<AllProduct></AllProduct>}></Route>
      <Route path='/customer' element={<Customer></Customer>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/showProduct' element={<ShowProduct></ShowProduct>}></Route>
      <Route path='/productCategory' element={<ProductCategory></ProductCategory>}></Route>
      <Route path='/customerList' element={<CustomerList></CustomerList>}></Route>
      <Route path='/singleProduct' element={<SingleProduct></SingleProduct>}></Route>
    </Routes>
    </BrowserRouter>
    </MyContext>
  );
}

export default App;
