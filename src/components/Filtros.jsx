import React from 'react'
import {Filtro} from './Filtro.jsx'

export const Filtros = ({filtro}) => {
  return (
    <section>
        <Filtro cargarFiltro = {filtro}/>
    </section>

  )
}
