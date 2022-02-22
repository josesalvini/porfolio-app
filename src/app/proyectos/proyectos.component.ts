import { Component, OnInit } from '@angular/core';
import { ProyectosService } from './service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
  }

  get data(){
    return this.proyectosService.data;
  }

  getUrl(url: string){
    return encodeURI(url);
  }

}
