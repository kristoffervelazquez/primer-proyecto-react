import React from 'react'

const Resultado = (props) => {
    const {total, plazo, cantidad} = props

    return ( 
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: <strong>${cantidad}</strong></p>
            <p>A pagar en un plazo de <strong>{plazo}</strong> meses</p>
            <p>Su pago mensual es de: <strong>${(total/plazo).toFixed(2)}</strong></p>
            <p>Total a pagar: <strong>${(total).toFixed(2)}</strong></p>
        </div>
     );
}
 
export default Resultado;