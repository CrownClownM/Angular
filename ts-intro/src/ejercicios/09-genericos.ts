
/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento:T){
    return argumento;
}

const soyCadena = queTipoSoy('Hola mundo');
const soyNumero = queTipoSoy(100);
const soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9]);
const soyExplicito = queTipoSoy<number>(100);