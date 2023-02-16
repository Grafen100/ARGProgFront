import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css'],
})
export class NewProjectsComponent implements OnInit {
  formProj: FormGroup;

  submitted = false;

 proj: Project;
 
  id: number;
  nombreProj: string;
  descProj: string;
  imagenProj: string;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.formProj = new FormGroup({
      nombreProj: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      descProj: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      imagenProj: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }
  onCreate(): void {
    this.submitted = true;

    const proj = new Project(this.nombreProj, this.descProj, this.imagenProj);
    const id = this.activatedRouter.snapshot.params['id'];

    this.projectService.save(proj).subscribe(
      (data) => {
        alert('Proyecto añadido correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }

}
