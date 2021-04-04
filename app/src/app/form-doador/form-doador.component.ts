import { Component } from '@angular/core';
import { doadorModel } from 'src/models/doador.models';
import { DoadorService } from 'src/service/doador/doador.service';

@Component({
  selector: 'app-form-doador',
  templateUrl: './form-doador.component.html',
  styleUrls: ['./form-doador.component.css']
})
export class FormDoadorComponent {
  public doador: doadorModel = new doadorModel();
  public doadores: Array<any> = new Array();
  
  constructor( private doadorService: DoadorService) {}

  save() {
    this.doadorService.postDoador(this.doador).subscribe(data => {
      this.doador = data;
    }, err => {
      console.log("erro ao listar os doadores", err);
    })
  }

  
}
