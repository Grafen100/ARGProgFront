import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
})
export class EditEducationComponent implements OnInit {
  educ: Education = null;

  constructor(
    private educationService: EducationService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationService.detail(id).subscribe(
      (data) => {
        this.educ = data;
      },
      (err) => {
        alert('Error al modificar educación');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationService.update(id, this.educ).subscribe({
      next: (data) => {
        this.router.navigate([""]);
      },
      error: (err) => {
        alert("Error al modificar educación");
        this.router.navigate([""]);
      },
    });
  }
}
