export class Project {
  id?: number;//cuando creamos podria no venir
  nombreProj: string;
  descProj: string;
  imagenProj: string;

  constructor(nombreProj: string, descProj: string, imagenProj: string) {
    this.nombreProj = nombreProj;
    this.descProj = descProj;
    this.imagenProj = imagenProj;
  }
}
