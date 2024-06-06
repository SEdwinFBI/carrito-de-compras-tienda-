import React, { useState } from 'react'
import './Filtro.css'
export const Filtro = ({ cargarFiltro }) => {
  const [minPrecio, setMinPrecio] = useState(0);

  const mostrarPrecio = (event) => {
    setMinPrecio(event.target.value)
    cargarFiltro(prevState => ({
      ...prevState,
      maxPrecio: event.target.value
    }))
  }
  const mostrarCategoria = (event) => {
    cargarFiltro(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (

    <div className='filtros'>
      <div className='filtro'>
        <label htmlFor="price">Precio Maximo</label>
        <input
          type="range"
          id='price'
          defaultValue={2000}
          min={0}
          max={2000}
          onChange={mostrarPrecio} />
        <span >Q. {minPrecio || 2000}.00</span>
      </div>

      <div className='filtro'>
        <label htmlFor="category">Categorias</label>
        <select name="categorias" id="category" onChange={mostrarCategoria}>
          <option
            value="all">Todo</option>
          <option
            value="home-decoration">Para el Hogar</option>
          <option
            value="laptops">Laptops</option>
          <option
            value="smartphones">Telefonos</option>
          <option
            value="fragrances">Perfumes</option>
          <option
            value="skincare">Skin Care</option>
          <option
            value="groceries">Comestible</option>
        </select>
      </div>
    </div>
  )
}
