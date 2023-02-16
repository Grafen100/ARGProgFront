export class Skill {
  id?:number;//cuando creamos podria no venir
  porcentaje: number;
  imagen:string;
  color:string;

  constructor(
    porcentaje: number,
    imagen: string,
    color: string
  ) {
    this.porcentaje = porcentaje;
    this.imagen = imagen;
    this.color = color;
  }
}
