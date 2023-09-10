import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainNavbar from './components/MainNavbar'
import Products from './components/Products/Products'
import ProductDetails from './components/Products/ProductDetails'


function App() {


  return (
    <>
    <h1 className="w-full text-4xl text-blue-600 bg-white mt-5 ">Kindred</h1>
    <MainNavbar></MainNavbar>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/cart'></Route>
        <Route path='/login'></Route>
        <Route path='/register'></Route>
        <Route path='history'></Route>
        <Route path='/productinfo' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>

    </>
  )
}

export default App
