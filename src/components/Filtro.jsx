import React from 'react'
import './Filtro.css'
export const Filtro = () => {
  return (
    <div className='filtros'>
      <div className='filtro'>
        <label htmlFor="price">precio</label>
        <input type="range" id='price' min={0} max={2000} />
      </div>
      <div className='filtro'>
        <label htmlFor="category">Categorias</label>
        <select name="categorias" id="category">
          <option value="all">Todo</option>
          <option value="home-decoration">Para el Hogar</option>
          <option value="laptop">Laptops</option>
          <option value="smartphones">Telefonos</option>
          <option value="fragrances">Perfumes</option>
          <option value="skincare">Skin Care</option>
          <option value="groceries">Comestible</option>
          


        </select>
      </div>
    </div>
  )
}
