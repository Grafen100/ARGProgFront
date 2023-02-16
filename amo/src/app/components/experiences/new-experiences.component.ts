import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Experiences } from 'src/app/models/experiences';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'app-new-experiences',
  templateUrl: './new-experiences.component.html',
  styleUrls: ['./new-experiences.component.css'],
})
export class NewExperiencesComponent implements OnInit {
  
  formExp: FormGroup;

  submitted = false;
  
  public past: Date;
  public pastStr: string;
  public today: Date;
  public todayStr: string;
  public disableDateStr: string;

  nombreExp: string = '';
  fechaInicio: string = '';
  fechaFinal: string = '';
  descExp: string = '';
  
  constructor(
    private experiencesService: ExperiencesService,
    private router: Router,
    private datePipe: DatePipe  ) {}

  ngOnInit() {
    this.formExp = new FormGroup({
      nombreExp: new FormControl('',[Validators.required, Validators.minLength(3)]),
      fechaInicio: new FormControl('', Validators.required),
      fechaFinal: new FormControl('', Validators.required),
      descExp: new FormControl('',[Validators.required, Validators.minLength(10)]),
    });
     

  /* *********************************************************************************** */
  /* *******                MINIMO DE FECHA (ULTIMO AÑO PARA ATRAS)                ***** */
  /* *********************************************************************************** */

    this.past = new Date(
      new Date().getFullYear() - 1,
      new Date().getMonth(),
      new Date().getDate()
    );
    this.pastStr = this.datePipe.transform(this.past, 'yyyy-MM-dd');
   
  /* *********************************************************************************** */
  /* *******                MAXIMO DE FECHA (FECHA DEL DIA DE HOY)                 ***** */
  /* *********************************************************************************** */ 

    this.today = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );
    this.todayStr = this.datePipe.transform(this.today, 'yyyy-MM-dd');
  }

  onCreate(): void {
    this.submitted = true;

    const expe = new Experiences(
      this.nombreExp,
      this.fechaInicio,
      this.fechaFinal,
      this.descExp
    );

    this.experiencesService.save(expe).subscribe(
      (data) => {
        alert('Se ha creado la experiencia con EXITO!!');
        this.router.navigate(['']);
      },
      (err) => {
        alert('ERROR al crear la experiencia');
        this.router.navigate(['']);
      }
    );
  }

  dateChanged() {
    this.disableDateStr = this.fechaInicio;
  }
}
