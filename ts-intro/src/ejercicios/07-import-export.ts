import { Producto, calculaISV } from './06-desestructuracion-funcion';

/*
    ===== Código de TypeScript =====
*/

const portatiles: Producto[]=[
    {
        desc: 'HP',
        precio: 500
    },
    {
        desc: 'LEVIN',
        precio: 600
    }
]

const [total, isv] = calculaISV(portatiles);

console.log('Total:', total);
console.log('ISV:',isv);