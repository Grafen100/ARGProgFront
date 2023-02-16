import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiences } from 'src/app/models/experiences';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'app-edit-experiences',
  templateUrl: './edit-experiences.component.html',
  styleUrls: ['./edit-experiences.component.css'],
})
export class EditExperiencesComponent implements OnInit {
  expjob: Experiences = null;

  constructor(
    private experiencesService: ExperiencesService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experiencesService.detail(id).subscribe(
      (data) => {
        this.expjob = data;
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experiencesService.update(id, this.expjob).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      },
    });
  }
}
