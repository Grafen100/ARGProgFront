import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditService } from 'src/app/services/edit.service';
import { Skill } from '../../../app/models/skill';
import { SKILL } from '../../services/mok';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  @Input() datos: any;
  @Output() onDeleteProgress: EventEmitter<Skill> = new EventEmitter();
  @Output() onSave: EventEmitter<Skill> = new EventEmitter();
  editFlag: boolean = false;
  nuevo: Skill = SKILL;
  editando: Skill = SKILL;

  constructor(public editService: EditService) {}

  ngOnInit(): void {}

  onEdit() {
    this.editando.id = this.datos.id;
    this.editando.porcentaje = this.datos.porcentaje;
    this.editando.imagen = this.datos.imagen;
    this.editando.color = this.datos.color;
    this.editFlag = !this.editFlag;
  }
  onSaveEdit(editado: Skill) {
    if (editado.porcentaje < 0) {
      editado.porcentaje = 0;
    }
    if (editado.imagen == '') {
      editado.imagen = './assets/imgs/alert.png';
    }

    this.onSave.emit(editado);
    this.editFlag = !this.editFlag;
  }
  onDelete(progress: Skill) {
    this.onDeleteProgress.emit(progress);
    this.editFlag = !this.editFlag;
  }
}
