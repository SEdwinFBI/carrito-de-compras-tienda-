import React from 'react'
import {AddToCartIcon} from './Iconos';
import './productos.css'



export function Productos ({products}){
    return(
        <>
        
        <main className=' productos'>
            <ul className='row '>
                {//slice(0,5)//cantidad de productos
                    products.slice().map(product=>(
                        <li className='col col-sm-2 col-1 producto' key={product.id}>
                            <div className='producto-img'>
                            <img src={product.thumbnail} alt={product.title} />
                            </div>
                          
                            <div className='titulo'>
                                <strong>{product.title} <br /> ${product.price}  </strong> 
                            </div>
                            <div>
                                <button className='btn'><AddToCartIcon/></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
        </>
    )
}
