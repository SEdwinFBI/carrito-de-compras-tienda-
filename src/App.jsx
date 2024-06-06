import { useState } from 'react'


import './App.css'

import { Productos } from './components/products'
import {products} from './products/products.json'

function App() {


  return (
    <>
      <h1>Eligue tu producto</h1>
      <p>Carrito de compras v.1</p>
      <div className='contenido'>
      <Productos products={products}/>
      </div>
     


    </>
  )
}

export default App
