import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
/*import { NuevoUsuario } from '../models/nuevo-usuario';*/

/* *********************************************************************************** */
/* ****  DESCOMENTAR SI SE VA IMPLEMENTAR UN REGISTRO Y LA CREACION DE PERSONA    **** */
/* *********************************************************************************** */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.URL + 'auth/';

  constructor(private httpClient: HttpClient) { }

/* *********************************************************************************** */
/* ****  DESCOMENTAR SI SE VA IMPLEMENTAR UN REGISTRO Y LA CREACION DE PERSONA    **** */
/* *********************************************************************************** */

 /*public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.httpClient.post<any>(this.URL + 'news', nuevoUsuario);
 }*/

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario)
 }

 loggedIn() {
  return this.login(new LoginUsuario('admin', 'admin', true));
 }
}
