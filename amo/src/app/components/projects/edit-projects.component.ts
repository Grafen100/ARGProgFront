import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css'],
})
export class EditProjectsComponent implements OnInit {
  proj: Project;
  url: Observable<string>;

  constructor(
    private projectService: ProjectService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.projectService.detail(id).subscribe(
      (data) => {
        this.proj = data;
      },
      (err) => {
        alert('Error al modificar proyecto');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.projectService.update(id, this.proj).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al modificar proyecto');
        this.router.navigate(['']);
      },
    });
  }

}
