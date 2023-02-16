import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { TokenService } from 'src/app/services/token.service';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educ: Education[] = [];

  constructor(
    private educationService: EducationService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educationService.lista().subscribe((data) => {
      this.educ = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educationService.delete(id).subscribe(
        (data) => {
          this.cargarEducacion();
        },
        (err) => {
          alert('No se pudo borrar la educación');
        }
      );
    }
  }
}