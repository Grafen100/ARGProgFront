import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  pers: Person = new Person("","","","","");

  constructor(
    private router: Router,
    private tokenService: TokenService,
    public personService: PersonService
  ) {}

/* *********************************************************************************** */
/* *******     SE PASA ID 1 AL METODO DETAIL PORQUE HABRA UNA SOLA PERSONA       ***** */
/* *********************************************************************************** */


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.personService.detail(1).subscribe(data => {this.pers = data})
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
