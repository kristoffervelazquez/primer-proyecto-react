import React, {useState, Fragment} from 'react'
import { calcularTotal } from '../helpers';



const Formulario = (props) => { 

    const {cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal} = props

    // Definir state

    const [error, guardarError] = useState(false);

    const calcularPrestamo = (e) => {
        e.preventDefault();

        // Validar formulario         
        if(cantidad <= 0 || plazo === ''){
            console.log('Hay un error')
            guardarError(true)
            return;
        }

        guardarError(false);

        // Realizar cotización
        const total = calcularTotal(cantidad, plazo);

        // Una vez calculado guardar el total
        guardarTotal(total)
    }
 
    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input
                        className="u-full-width"
                        type="number"
                        placeholder="Ejemplo: 3000"
                        onChange = { e => guardarCantidad(parseInt(e.target.value))}
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select
                        className="u-full-width"
                        onChange={e => guardarPlazo(parseInt(e.target.value))}
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Calcular"
                        className="button-primary u-full-width"
                    />
                </div>
            </div>
        </form>
        {(error) ? <p className="error"><strong>ERROR!</strong> Hubo un error en la validacion del formulario</p> : null}
        </Fragment>
        
    );
}


export default Formulario;