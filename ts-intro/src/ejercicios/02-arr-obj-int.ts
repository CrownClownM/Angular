
/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash','Counter','Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 150,
    habilidades: ['Bash','Counter','Healing']
}


console.table(personaje);