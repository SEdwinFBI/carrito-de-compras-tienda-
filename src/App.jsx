import { useState } from 'react'


import './App.css'

import { Productos } from './components/products'
import {products as initProducts} from './products/products.json'
import { Footer } from './components/Footer'
import Nav from './components/Nav'
import { Filtros } from './components/Filtros'

function App() {
  const [products] = useState(initProducts)
  const [filtro,setFiltro] =useState({
    category:'all',
    minPrecio:0
  })

  const productosFiltrados = (products)=>{
    return products.filter(product => {
      return (
        product.price >= filtro.minPrecio &&
        (filtro.category === 'all'||
          product.category === filtro.category
        )
      )
    })
  }
  const productoFiltrado = productosFiltrados(products)

  return (
    <>
    <Nav/>
      <h1>Eligue tu producto</h1>
      <p>Carrito de compras v.1</p>
      <Filtros/>
      <div className='contenido'>
      <Productos products={productoFiltrado}/>
      </div>
      <Footer/>
     


    </>
  )
}

export default App
