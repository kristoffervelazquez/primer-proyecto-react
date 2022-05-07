export function calcularTotal(cantidad, plazo) {
    let interesTotal;

    if (cantidad > 0 && cantidad <= 1000) {
        interesTotal = cantidad * .25;
    } else if (cantidad > 1000 && cantidad <= 5000) {
        interesTotal = cantidad * .20;
    } else if (cantidad > 5000 && cantidad <= 10000) {
        interesTotal = cantidad * .15;
    } else {
        interesTotal = cantidad * .10;
    }

    // Calcular el plazo
    //3 = 5%
    //6 = 10%
    //12 = 15%
    //24 = 20%

    if(plazo === 3){
        interesTotal += cantidad * .05;
    }else if(plazo === 6){
        interesTotal += cantidad * .10;
    }else if( plazo === 12){
        interesTotal += cantidad * .15;
    }else{
        interesTotal += cantidad * .20;
    }

    return (interesTotal + cantidad);

}