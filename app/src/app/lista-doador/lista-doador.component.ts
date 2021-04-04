import { Component, OnInit } from '@angular/core';
import { DoadorService } from 'src/service/doador/doador.service';

@Component({
  selector: 'app-lista-doador',
  templateUrl: './lista-doador.component.html',
  styleUrls: ['./lista-doador.component.css']
})

export class ListaDoadorComponent implements OnInit {

  doador: Array<any> = new Array();

  constructor(private doadorService: DoadorService) { }

  ngOnInit() {
    this.listAllDordor();
  }

  listAllDordor() {
    this.doadorService.getAllDoador().subscribe(data =>{
      this.doador = data;
      
    }, err => {
      console.log("erro ao listar os doadores");
    })
  } 
}
