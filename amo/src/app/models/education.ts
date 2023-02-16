export class Education {
  id?: number;//cuando creamos podria no venir
  nombreEduc: string;
  fechaInicio: string;
  fechaFinal: string;
  descEduc: string;

  constructor(
    nombreEduc: string,
    fechaInicio: string,
    fechaFinal: string,
    descEduc: string
  ) {
    this.nombreEduc = nombreEduc;
    this.fechaInicio = fechaInicio;
    this.fechaFinal = fechaFinal;
    this.descEduc = descEduc;
  }
}
