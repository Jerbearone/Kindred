import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainNavbar from './components/MainNavbar'
import Products from './components/Products/Products'
import ProductDetails from './components/Products/ProductDetails'
import Login from './components/Auth/Login'
import Cart from './components/Cart/Cart'
import Checkout from './components/Cart/Checkout'
import { useState } from 'react'
import Footer from './components/Footer/Footer'


function App() {
  const [username, setUsername] = useState("");
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState(null);


  return (
    <>
    <h1 className="w-full text-4xl text-blue-600 bg-white mt-5 ">Kindred</h1>
    <MainNavbar username={username} setUsername={setUsername} products={products} setSearchedProducts={setSearchedProducts}></MainNavbar>
      <Routes>
        <Route path='/' element={<Products products={products} setProducts={setProducts} searchedProducts={searchedProducts}>
        </Products>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/login' element={<Login username={username} setUsername={setUsername}></Login>}></Route>
        <Route path='/register'></Route>
        <Route path='history'></Route>
        <Route path='/productinfo' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
      <Footer></Footer>

    </>
  )
}

export default App
