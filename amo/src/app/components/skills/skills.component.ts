import { Component, OnInit } from '@angular/core';
import { SKILL } from 'src/app/services/mok';
import { DatosService } from 'src/app/services/datos.service';
import { EditService } from 'src/app/services/edit.service';
import { Skill } from '../../models/skill';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  barras: Skill[] = [];
  nuevo: Skill = SKILL;
  toggleModal: boolean = false;

  constructor(
    private datosProgress: DatosService,
    public editService: EditService,
    private tokenService: TokenService,
  
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.datosProgress.getDatos(0).subscribe((data) => {
      // 0 es el valor que identifica la sección Skills - ver DatosService
      this.barras = data;
    });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  onNew() {

    this.toggleModal = !this.toggleModal;
    
  }
  onAdd(dato: Skill) {
    if (dato.porcentaje < 0) {
      dato.porcentaje = 0;
    }
    if (dato.imagen == '') {
      dato.imagen = './assets/media/alert.png';
    }
    this.datosProgress.addSDatos(dato, 0).subscribe((data) => {
      this.ngOnInit();
    });
    alert('Se agregó una nueva habilidad');
  }
  deleteSkill(dato: Skill) {
    if (confirm('¿Estas seguro que quiere borrar la habilidad?')) {
      this.datosProgress.deleteDatos(dato, 0).subscribe((data) => {
        this.ngOnInit();
      });
    }
  }
  onEdit(dato: Skill) {
    this.datosProgress.updateDatos(dato, 0).subscribe((data) => {
      this.ngOnInit();
    });
  }
  
}
