export class Person{
    id?: number;//cuando creamos podria no venir
    nombre: string;
    apellido: string;
    descPers: string
    imagen: string;
    telefono: string;

    constructor(
        nombre: string,
        apellido: string, 
        descPers: string, 
        imagen: string,
        telefono: string
        ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.descPers = descPers;
        this.imagen = imagen;
        this.telefono = telefono;
    };
}