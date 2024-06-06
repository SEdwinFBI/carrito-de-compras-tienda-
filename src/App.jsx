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
    maxPrecio:2000
  })

  const productosFiltrados = (products)=>{
    return products.filter(product => {
      return (
        //el precio es mayor o igual a precio minimo
        product.price <= filtro.maxPrecio &&
        (filtro.category === 'all'|| //devuelve toda la categoria si el filtro esta en todo
          product.category === filtro.category //sino el filtro puesto
        )
      )
    })
  }
  const productoFiltrado = productosFiltrados(products)

  return (
    <>
    <Nav/>
      <h1>Eligue tu producto</h1>
      <p>Carrito de compras En desarrollo</p>
      <Filtros filtro={setFiltro}/>
      <div className='contenido'>
      <Productos products={productoFiltrado}/>
      </div>
      <Footer/>
     


    </>
  )
}

export default App
