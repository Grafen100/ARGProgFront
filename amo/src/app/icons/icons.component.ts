import { Component, OnInit, Input} from '@angular/core';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  editIcon:boolean =true;
  quien:string ="aca id de quien quiero borrar";
  constructor( public editService:EditService) { }

  ngOnInit(): void {
    this.editIcon = this.editService.valorIcon;
  }
  onEdit(){
    alert("ESTE EDITA");
  }
  onDelete(valQuien:string){
    alert("ESTE BORRA");
    console.log(valQuien);
  }

  onToggle(){
    this.editIcon = this.editService.valorIcon;
  }

}

