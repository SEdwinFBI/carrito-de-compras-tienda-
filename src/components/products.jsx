import React from 'react'
import {AddToCartIcon} from './Iconos';
import './productos.css'



export function Productos ({products}){
    return(
        <>
        
        <main className=' productos'>
            <ul className='row '>
                {
                    products.map(product=>(
                        <li className='col col-sm-2 col-1 producto' key={product.id}>
                            <div className='producto-img'>
                            <img src={product.thumbnail} alt={product.title} />
                            </div>
                          
                            <div>
                                <strong>{product.title} </strong> - ${product.price}
                            </div>
                            <div>
                                <button><AddToCartIcon/></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
        </>
    )
}
