import React from 'react'
import "../css/Nosotros.css"

export const Nosotros = () => {
  return (
    <div className='about-content'>
        <div className='img-about'>
            <img src={require("../img/almacen1.jpeg")} alt='Local'/>
        </div>
        <div className='description-content'>
            <p>
                Bienvenido a "Sabores de Tandil", un encantador local de productos regionales situado en el corazón de la hermosa ciudad de Tandil, Argentina. Este pintoresco establecimiento es un verdadero paraíso para los amantes de la gastronomía local y los productos artesanales.
            </p>
            <p>
                El local está decorado con elementos rústicos que evocan la tradición y la autenticidad de la región. Estanterías de madera exhiben una amplia selección de productos, desde chorizos caseros hasta salames de cerdo, todos elaborados con recetas transmitidas de generación en generación.
            </p>
            <p>
                Los quesos son una atracción principal en "Sabores de Tandil". Desde el queso de cabra hasta el queso semiduro de vaca, cada uno refleja el cuidado y la dedicación de los productores locales. Los clientes pueden deleitarse con muestras de queso fresco o sumergirse en la complejidad de sabores de un queso añejo.
            </p>
            <p>
            Además de embutidos y quesos, el local ofrece una variedad de otros productos regionales, como dulces artesanales, miel de montaña, aceitunas marinadas y una selección de vinos locales que complementan perfectamente los sabores de la región.
            </p>
        </div>
    </div>
  )
}

export default Nosotros;
