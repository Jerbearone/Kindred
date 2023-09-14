import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainNavbar from './components/MainNavbar'
import Products from './components/Products/Products'
import ProductDetails from './components/Products/ProductDetails'
import Login from './components/Auth/Login'
import Cart from './components/Cart/Cart'


function App() {


  return (
    <>
    <h1 className="w-full text-4xl text-blue-600 bg-white mt-5 ">Kindred</h1>
    <MainNavbar></MainNavbar>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register'></Route>
        <Route path='history'></Route>
        <Route path='/productinfo' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>

    </>
  )
}

export default App
