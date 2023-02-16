export class LoginUsuario {
    nombreUsuario: string;
    password: string;
    terminos: boolean;

    constructor(nombreUsuario: string, password: string,
        terminos: boolean) {
         this.nombreUsuario = nombreUsuario; 
         this.password = password;
         this.terminos = terminos;
    }
}
