
/*
    ===== Código de TypeScript =====
*/

function sumar(a:number,b:number):number{
    return a + b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

function sumarTres(a:number,b?:number,c:number=2):number{
    return a * c;
}

interface personajeLOR{
    nombre: string;
    hp: number;
    mostrarHp: () => void; 
}

function curar(personaje:personajeLOR, curarX: number){
    personaje.hp += curarX;
    console.log(personaje);
}

const nuevoPersonaje: personajeLOR = {
    nombre: 'Medina',
    hp: 50,
    mostrarHp(){
        console.log('Los puntos de vida son: ', this.hp);
    }
}

curar(nuevoPersonaje,10);
nuevoPersonaje.mostrarHp();