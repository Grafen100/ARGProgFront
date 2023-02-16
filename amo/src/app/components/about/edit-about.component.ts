import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Person } from 'src/app/models/person';
import { ImageService } from 'src/app/services/image.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css'],
})
export class EditAboutComponent implements OnInit {
  person: Person ;
  url: Observable<string>;

  constructor(
    private personService: PersonService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.personService.detail(id).subscribe(
      (data) => {
        this.person = data;
      },
      (err) => {
        alert('Error al modificar datos de persona');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.person.imagen = this.imageService.url;
    this.personService.update(id, this.person).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al modificar los datos de personas');
        this.router.navigate(['']);
      },
    });
  }

  uploadFile($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = `photo_pic` + id; //nombre en el Storage de Firebase

    this.imageService.uploadFile($event, name);
  }
}
