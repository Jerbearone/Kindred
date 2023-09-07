import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainNavbar from './components/MainNavbar'
import Products from './components/Products/Products'


function App() {


  return (
    <>
    <h1 className="w-full text-3xl text-blue-600 bg-white mt-5 ">Kindred</h1>
    <MainNavbar></MainNavbar>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/cart'></Route>
        <Route path='/login'></Route>
        <Route path='/register'></Route>
        <Route path='history'></Route>
      </Routes>

    </>
  )
}

export default App
