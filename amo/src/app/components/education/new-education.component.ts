import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css'],
})
export class NewEducationComponent implements OnInit {

  formEduc: FormGroup;

  submitted = false;

  public past: Date;
  public pastStr: string;
  public today: Date;
  public todayStr: string;
  public disableDateStr: string;

  nombreEduc: string = '';
  fechaInicio: string = '';
  fechaFinal: string = '';
  descEduc: string = '';
  
  constructor(
    private educationService: EducationService,
    private router: Router,
    private datePipe: DatePipe  ) {}

  ngOnInit() {
    this.formEduc = new FormGroup({
      nombreEduc: new FormControl('',[Validators.required, Validators.minLength(3)]),
      fechaInicio: new FormControl('', Validators.required),
      fechaFinal: new FormControl('', Validators.required),
      descEduc: new FormControl('',[Validators.required, Validators.minLength(10)]),
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

    const educ = new Education(
      this.nombreEduc,
      this.fechaInicio,
      this.fechaFinal,
      this.descEduc
    );

    this.educationService.save(educ).subscribe(
      (data) => {
        alert('Se ha creado la educación');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al crear la educación');
        this.router.navigate(['']);
      }
    );
  }

  dateChanged() {
    this.disableDateStr = this.fechaInicio;
  }
}
