import React from 'react'
import { CardCompraPasos } from './CardCompraPasos'
import "../css/CardCompraPasosConteiner.css";

export const CardCompraPasosConteiner = () => {
  return (
    <div className='steps-conteiner'>
        <CardCompraPasos img="buy1.jpg" title="Busqueda de producto" text="Nuestro sitio cuenta con un menú de categorías que le permite identificar el producto buscado a través de una categorización realizada por nuestra empresa!"/>
        <CardCompraPasos img="buy2.jpg" title="Agregue productos" text="Cuando encuentre el producto, puede ver el detalle del mismo, conocer características. Cuando quiere comprar el mismo puede, cargar la cantidad y llevar el producto al carrito de compra con el botón Comprar."/>
        <CardCompraPasos img="buy3.jpg" title="Ver carrito de compras" text="En todo momento puede ver el carrito de compra, sólo tiene que realizar un clic en el carrito, ubicado en la parte superior derecha del sitio! desde el mismo puede FINALIZAR LA COMPRA y completar sus datos!"/>
        <CardCompraPasos img="buy4.jpg" title="Revisar su pedido" text="Nuestros sistema permite que pueda cargar sus datos y luego revisar si los mismos están correctos, si los datos ingresados están correctos puede hacer clic en el botón PAGAR, podrá realizar una revisión final de los datos cargados."/>
    </div>
  )
}
