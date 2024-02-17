import React from 'react'
import Counter from './Componont/Counter'
import Navbar from './Componont/Navbar'
import Cart from './Componont/Cart'
import Product from './Componont/Product'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      
      
      </Routes>
      </BrowserRouter>
      
      {/* <Counter/> */}
    
    </div>
  )
}

export default App