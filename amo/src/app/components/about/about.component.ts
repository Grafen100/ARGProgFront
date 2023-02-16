import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  person: Person;

  constructor(
    public personService: PersonService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  /* *********************************************************************************** */
  /* *******     SE PASA ID 1 AL METODO DETAIL PORQUE HABRA UNA SOLA PERSONA       ***** */
  /* *********************************************************************************** */

  cargarPersona(): void {
    this.personService.detail(1).subscribe((data) => {
      this.person = data;
    });
  }

  ngOnInit(): void {
    this.cargarPersona();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    /* *********************************************************************************** */
    /* *******                 EFECTO DE ANIMACION ESCRITURA TYPED.JS                ***** */
    /* *********************************************************************************** */

    var typed = new Typed('.typed', {
      stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75, // Velocidad en milisegundos para poner una letra,
      startDelay: 250, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 1100, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      loopCount: Infinity, // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true, // Mostrar cursor palpitanto
      cursorChar: '>_', // Caracter para el cursor
      contentType: 'html', // 'html' o 'null' para texto sin formato
    });
  }

    /* *********************************************************************************** */
    /* *******             METODO DELETE PARA PODER BORRAR PERSONA                   ***** */
    /* *********************************************************************************** */

  /* delete(id?: number) {
    if (id != undefined) {
      this.personService.delete(id).subscribe(
        (data) => {
          this.cargarPersona();
        },
        (err) => {
          alert('No se pudo borrar la persona');
        }
      );
    }
  }                                 */
}
