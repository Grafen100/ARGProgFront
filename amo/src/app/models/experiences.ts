export class Experiences {
  id?: number;//cuando creamos podria no venir
  nombreExp: string;
  fechaInicio: string;
  fechaFinal: string;
  descExp: string;

  constructor(
    nombreExp: string,
    fechaInicio: string,
    fechaFinal: string,
    descExp: string
  ) {
    this.nombreExp = nombreExp;
    this.fechaInicio = fechaInicio;
    this.fechaFinal = fechaFinal;
    this.descExp = descExp;
  }
}
