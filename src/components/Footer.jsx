import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contenido">
                <p>&copy; 2023 Carrito de compras SEFBI.</p>
                <div className="politicas">
                   
                        <a href="#" className="texto t1" >
                          <p> Política de Privacidad</p> 
                        </a>
                   
                    
                        <a href="#" className="texto t2" >
                            Términos y Condiciones
                        </a>
                 

                </div>
            </div>
        </footer>
    )
}
