import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { EditService } from 'src/app/services/edit.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password!: string;
  terminos: boolean = false;
  roles: String[] = [];
  errMsj: string;

  constructor(
    private tokenServices: TokenService,
    private authServices: AuthService,
    private router: Router,
    private editService: EditService,
  ) {}

  ngOnInit(): void {
    if (this.tokenServices.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenServices.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, 
      this.password, this.terminos);
    this.authServices.login(this.loginUsuario).subscribe(
      (data) => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.editService.valorIcon = true;
        this.tokenServices.setToken(data.token);
        this.tokenServices.setUserName(data.nombreUsuario);
        this.tokenServices.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
      },
      (err) => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.editService.valorIcon = false;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        alert('ERROR:\n No coincide usuario con clave  \n o No esta autorizado a editar el portfolio \n Vuelva a intentar o solicite registracion al administrador.....!! ');
      }
    );
  }
}
