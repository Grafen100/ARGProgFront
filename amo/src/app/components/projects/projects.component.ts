import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  proj: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProject();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProject(): void {
    this.projectService.lista().subscribe((data) => {
      this.proj = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.projectService.delete(id).subscribe(
        (data) => {
          this.cargarProject();
        },
        (err) => {
          alert('No se pudo borrar el proyecto');
        }
      );
    }
  }
}
